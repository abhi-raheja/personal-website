import Link from 'next/link';
import journalData from '@/data/journal.json';

interface JournalEntry {
  id: string;
  date: string;
  time: string;
  content: string;
}

function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

export default function Journal() {
  const entries = journalData as JournalEntry[];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content - accessibility feature */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Simple, minimal navigation */}
      <nav className="w-full py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Back Button */}
            <Link 
              href="/" 
              className="flex items-center text-gray-700 hover:text-black transition-colors font-normal"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link 
                href="/writings" 
                className="text-gray-700 hover:text-black transition-colors font-normal"
              >
                Writings
              </Link>
              <Link 
                href="/journal" 
                className="text-black font-normal"
              >
                Journal
              </Link>
              <Link 
                href="/reading" 
                className="text-gray-700 hover:text-black transition-colors font-normal"
              >
                Reading
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            {/* Page Title */}
            <h1 className="text-xl md:text-2xl font-semibold text-black mb-8">
              Journal
            </h1>
            <p className="text-base text-gray-700 font-normal leading-relaxed mb-8 max-w-2xl">
              Casual thoughts, observations, and daily musings in no particular order.
            </p>
          </div>

          {/* Journal Entries List */}
          <div className="mb-16">
            <div className="space-y-8">
              {entries.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 font-normal">No entries yet. Check back soon!</p>
                </div>
              ) : (
                entries.map((entry) => (
                  <div key={entry.id} className="border-l-2 border-gray-200 pl-6 pb-8">
                    <div className="text-gray-500 text-sm mb-3 font-medium">
                      {formatDate(entry.date)} • {formatTime(entry.time)}
                    </div>
                    <div className="text-gray-800 font-normal leading-relaxed whitespace-pre-wrap">
                      {entry.content}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </main>
      
      {/* Footer */}
      <footer className="px-6 md:px-12 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 text-center">
            © 2025 Abhi Raheja
          </p>
        </div>
      </footer>
    </div>
  );
}
