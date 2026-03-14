export default function LegalPage({ title, children, onBack }) {
  return (
    <div className="min-h-screen bg-emerald-deep text-ivory">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-emerald-deep/90 backdrop-blur-lg border-b border-border-neutral">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 h-16 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-ivory transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Назад
          </button>
          <span className="text-border-neutral">|</span>
          <a href="#" onClick={onBack} className="flex items-center gap-2">
            <img
              src="https://qwik.pro/wp-content/uploads/2023/06/1b9dbf80fd5ed21739d20a4651110c8c.png"
              alt="Qwik.Pro"
              className="h-7 w-auto"
            />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold mb-10 leading-tight">{title}</h1>
        <div className="prose-legal">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border-neutral mt-16 py-8">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Qwik.Pro. Все права защищены.
          </p>
          <button
            onClick={onBack}
            className="text-xs text-text-tertiary hover:text-ivory transition-colors"
          >
            ← Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  )
}
