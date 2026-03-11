import { useState } from 'react'

export default function FloatingButtons() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded buttons */}
      {open && (
        <div className="flex flex-col gap-2 animate-in">
          {/* Telegram */}
          <a
            href="https://t.me/qwikpro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-[#229ED9] pl-4 pr-5 py-3 text-white text-sm font-semibold shadow-lg transition-transform hover:scale-105"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.49 7.87l-1.95 9.19c-.15.67-.54.83-1.1.52l-3.03-2.23-1.46 1.41c-.16.16-.3.3-.61.3l.22-3.06 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.93c-.64-.2-.66-.64.14-.95l11.58-4.46c.53-.2 1-.05.85.93z" />
            </svg>
            Telegram
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/74991000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-white text-sm font-semibold shadow-lg transition-transform hover:scale-105"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.96c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.11-1.84-.12-.42-.14-.96-.33-1.66-.65-2.92-1.33-4.83-4.28-4.98-4.48-.14-.2-1.18-1.57-1.18-3 0-1.43.75-2.14 1.01-2.43.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.57.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.28.47-.14.17-.3.37-.42.5-.14.14-.29.3-.12.58.17.29.74 1.22 1.58 1.97 1.09.97 2.01 1.27 2.29 1.41.29.14.45.12.62-.07.17-.2.71-.83.9-1.12.19-.29.38-.24.64-.14.26.1 1.63.77 1.91.91.29.14.48.22.55.33.07.12.07.67-.17 1.35z" />
            </svg>
            WhatsApp
          </a>

          {/* Phone */}
          <a
            href="tel:+74991000000"
            className="flex items-center gap-3 rounded-full bg-ivory pl-4 pr-5 py-3 text-emerald-deep text-sm font-semibold shadow-lg transition-transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Позвонить
          </a>
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all cursor-pointer ${
          open
            ? 'bg-emerald-dark text-ivory rotate-45'
            : 'bg-ivory text-emerald-deep hover:bg-ivory-hover'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 transition-transform">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          )}
        </svg>
      </button>
    </div>
  )
}
