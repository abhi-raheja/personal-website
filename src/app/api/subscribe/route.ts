import { NextRequest, NextResponse } from 'next/server';

const SUBSTACK_URL = 'https://abhiraheja.substack.com';
const SUBSTACK_API_ENDPOINT = `${SUBSTACK_URL}/api/v1/free`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Submit directly to Substack's API endpoint
    const formData = new URLSearchParams();
    formData.append('email', email.trim());
    formData.append('first_url', '');
    formData.append('first_referrer', '');
    formData.append('current_url', '');
    formData.append('current_referrer', '');
    formData.append('first_session_url', '');
    formData.append('first_session_referrer', '');
    formData.append('referral_code', '');
    formData.append('source', 'embed');
    formData.append('referring_pub_id', '');
    formData.append('additional_referring_pub_ids', '');

    const response = await fetch(`${SUBSTACK_API_ENDPOINT}?nojs=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': SUBSTACK_URL,
        'Origin': SUBSTACK_URL,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
      body: formData.toString(),
    });

    const responseText = await response.text();
    
    // Check for Cloudflare blocking
    if (response.status === 403 || responseText.includes('Cloudflare') || responseText.includes('challenge') || responseText.includes('blocked')) {
      console.error('Substack API blocked by Cloudflare');
      return NextResponse.json(
        { 
          success: false,
          error: 'Service unavailable',
          message: 'Subscription service is temporarily unavailable. Please subscribe directly at https://abhiraheja.substack.com'
        },
        { status: 503 }
      );
    }

    // Check if response is JSON (Substack sometimes returns JSON errors)
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = null;
    }

    // If we got JSON response, check for errors
    if (responseData && responseData.errors) {
      const errors = responseData.errors;
      console.error('Substack API errors:', errors);
      
      // Check if it's an "already subscribed" error
      const alreadySubscribed = errors.some((err: any) => 
        err.msg?.toLowerCase().includes('already') || 
        err.msg?.toLowerCase().includes('subscribed') ||
        err.msg?.toLowerCase().includes('exists')
      );
      
      if (alreadySubscribed) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'This email is already subscribed',
            message: 'You are already subscribed to the newsletter.'
          },
          { status: 409 }
        );
      }

      // Other validation errors
      const errorMsg = errors.map((err: any) => err.msg || 'Validation error').join(', ');
      return NextResponse.json(
        { 
          success: false,
          error: 'Subscription failed',
          message: errorMsg || 'Unable to subscribe. Please check your email and try again, or subscribe directly at https://abhiraheja.substack.com'
        },
        { status: response.status || 400 }
      );
    }

    // Check for HTML error messages in response text
    if (responseText.includes('error') || responseText.includes('invalid')) {
      // Check if it's an "already subscribed" type error
      if (responseText.includes('already') || responseText.includes('exists') || responseText.includes('subscribed')) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'This email is already subscribed',
            message: 'You are already subscribed to the newsletter.'
          },
          { status: 409 }
        );
      }
    }

    // Success (200, 201, 302, or successful redirects)
    if (response.ok || response.status === 302 || response.status === 201) {
      return NextResponse.json({
        success: true,
        message: 'Subscription successful! Please check your email to confirm.',
      });
    }

    // Non-success response
    console.error('Substack API error:', response.status, responseText.substring(0, 500));
    return NextResponse.json(
      { 
        success: false,
        error: 'Subscription failed',
        message: 'Unable to subscribe at this time. Please try subscribing directly at https://abhiraheja.substack.com'
      },
      { status: response.status || 500 }
    );
  } catch (error: unknown) {
    console.error('Subscription error:', error);
    
    // Log more detailed error info for debugging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }

    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to subscribe. Please try again later.',
        message: 'An error occurred while processing your subscription. Please try subscribing directly at https://abhiraheja.substack.com'
      },
      { status: 500 }
    );
  }
}

