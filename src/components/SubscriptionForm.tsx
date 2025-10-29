'use client';

import { useEffect, useRef } from 'react';

export default function SubscriptionForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Inject CSS to hide Substack branding and style the form
    const iframe = iframeRef.current;
    if (iframe) {
      const handleLoad = () => {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            // Hide Substack watermark and terms text
            const style = iframeDoc.createElement('style');
            style.textContent = `
              .substack-watermark,
              .embed-tos,
              .publication-logo,
              .publication-name,
              .publication-tagline,
              .publication-meta {
                display: none !important;
              }
              .subscribe-widget {
                padding: 0 !important;
              }
              .form {
                margin: 0 !important;
              }
            `;
            iframeDoc.head.appendChild(style);
          }
        } catch (e) {
          // Cross-origin restrictions - this is expected
          console.log('Cannot access iframe content due to CORS');
        }
      };

      iframe.addEventListener('load', handleLoad);
      return () => iframe.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="w-full">
      {/* Substack embed iframe - minimal styling */}
      <iframe
        ref={iframeRef}
        src="https://abhiraheja.substack.com/embed"
        width="100%"
        height="140"
        style={{ 
          border: 'none',
          background: 'transparent',
          overflow: 'hidden'
        }}
        frameBorder="0"
        scrolling="no"
        title="Subscribe to newsletter"
        className="w-full"
      />
      <p className="text-xs text-gray-500 mt-2">
        Powered by <a href="https://substack.com" target="_blank" rel="noopener noreferrer" className="underline">Substack</a>
      </p>
    </div>
  );
}

