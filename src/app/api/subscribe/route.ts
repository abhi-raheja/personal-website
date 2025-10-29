import { NextRequest, NextResponse } from 'next/server';
import { subscribe } from 'substack-subscriber';

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

    // Subscribe to Substack
    const result = await subscribe(email, SUBSTACK_URL);

    return NextResponse.json({
      success: true,
      message: 'Subscription successful! Please check your email to confirm.',
      data: result,
    });
  } catch (error: unknown) {
    console.error('Subscription error:', error);
    
    // Handle specific error cases
    if (error instanceof Error) {
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
    }

    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to subscribe. Please try again later.',
        message: 'An error occurred while processing your subscription.'
      },
      { status: 500 }
    );
  }
}

