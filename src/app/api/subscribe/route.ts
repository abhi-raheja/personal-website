import { NextRequest, NextResponse } from 'next/server';

// Force Node.js runtime (required for substack-subscriber package)
export const runtime = 'nodejs';

const SUBSTACK_URL = 'https://abhiraheja.substack.com';

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

    // Subscribe to Substack (dynamic import for serverless compatibility)
    const { subscribe } = await import('substack-subscriber');
    const result = await subscribe(email, SUBSTACK_URL);

    return NextResponse.json({
      success: true,
      message: 'Subscription successful! Please check your email to confirm.',
      data: result,
    });
  } catch (error: unknown) {
    console.error('Subscription error:', error);
    
    // Log more detailed error info for debugging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      // Check if it's already subscribed
      if (error.message.includes('already subscribed') || error.message.includes('exists')) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'This email is already subscribed',
            message: 'You are already subscribed to the newsletter.'
          },
          { status: 409 }
        );
      }
      
      // Check for Playwright/browser errors
      if (error.message.includes('browserType') || error.message.includes('Playwright') || error.message.includes('chromium')) {
        console.error('Playwright error detected - browser automation not available in serverless environment');
        return NextResponse.json(
          { 
            success: false,
            error: 'Browser automation not available',
            message: 'Subscription service temporarily unavailable. Please subscribe directly at https://abhiraheja.substack.com'
          },
          { status: 503 }
        );
      }
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

