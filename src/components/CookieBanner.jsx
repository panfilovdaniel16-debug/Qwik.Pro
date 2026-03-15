import { useState, useEffect } from 'react'

const COOKIE_KEY = 'qwik_cookies_accepted'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Показываем плашку через секунду, если ещё не приняли
    const accepted = localStorage.getItem(COOKIE_KEY)
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-[90] animate-fade-in-up">
      <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          {/* Cookie icon */}
          <span className="text-xl shrink-0 mt-0.5">🍪</span>
          <div className="min-w-0">
            <p className="text-sm text-gray-700 leading-relaxed">
              Мы используем файлы cookie для улучшения работы сайта и анализа трафика.
              Продолжая использовать сайт, вы соглашаетесь с{' '}
              <a
                href="#/privacy"
                className="underline underline-offset-2 text-gray-900 hover:text-emerald-700 transition-colors"
              >
                политикой конфиденциальности
              </a>.
            </p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={handleAccept}
                className="rounded-lg bg-emerald-deep px-4 py-2 text-sm font-semibold text-ivory transition-colors hover:bg-emerald-dark cursor-pointer"
              >
                Принять
              </button>
              <button
                onClick={handleAccept}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700 cursor-pointer"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}
