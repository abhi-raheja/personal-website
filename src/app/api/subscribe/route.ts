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
        'User-Agent': 'Mozilla/5.0 (compatible; Newsletter/1.0)',
      },
      body: formData.toString(),
    });

    // Substack returns HTML even on success, so we check status code
    if (response.ok || response.status === 302 || response.status === 200) {
      // Check response text for error messages
      const responseText = await response.text();
      
      // If response contains error indicators
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
        
        return NextResponse.json(
          { 
            success: false,
            error: 'Subscription failed',
            message: 'Unable to subscribe. Please check your email and try again, or subscribe directly at https://abhiraheja.substack.com'
          },
          { status: 400 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Subscription successful! Please check your email to confirm.',
      });
    } else {
      // Non-200 response
      const responseText = await response.text();
      console.error('Substack API error:', response.status, responseText.substring(0, 500));
      
      return NextResponse.json(
        { 
          success: false,
          error: 'Subscription failed',
          message: 'Unable to subscribe at this time. Please try subscribing directly at https://abhiraheja.substack.com'
        },
        { status: response.status || 500 }
      );
    }
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

