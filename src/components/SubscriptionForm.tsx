'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setMessage('You\'re in. Check your inbox to confirm.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Try again.');
    }
  }

  return (
    <div
      className="relative border-2 rounded-xl px-6 py-7 md:px-8 md:py-8"
      style={{
        borderColor: '#556B2F',
        background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
        boxShadow: '4px 4px 0px 0px #556B2F',
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left: copy */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"
              style={{ boxShadow: '0 0 4px rgba(34,197,94,0.6)' }}
            />
            <h2 className="text-base font-bold text-gray-900 tracking-tight leading-none">
              Early as a Service
            </h2>
          </div>
          <p className="text-xs text-gray-500 font-mono mt-2 leading-none">
            Exploring why we chase what&apos;s next &amp; what we find when we get there
          </p>
        </div>

        {/* Right: form */}
        <div className="flex-shrink-0 w-full md:w-auto">
          {status === 'success' ? (
            <p className="text-xs font-mono text-gray-600 flex items-center gap-1.5">
              <span className="text-green-600">&#10003;</span>
              {message}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div
                className="rounded-lg border border-gray-300"
                style={{
                  boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.06)',
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  disabled={status === 'loading'}
                  className="w-48 px-3 py-2 text-sm bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none disabled:opacity-50 font-mono"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || !email.trim()}
                className="px-4 py-2 text-xs font-bold font-mono uppercase tracking-wider text-white rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed active:translate-y-px"
                style={{
                  background: 'linear-gradient(180deg, #222 0%, #000 100%)',
                  boxShadow: status === 'loading'
                    ? 'none'
                    : '2px 2px 0px 0px #555',
                }}
              >
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="mt-1.5 text-xs font-mono text-red-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
