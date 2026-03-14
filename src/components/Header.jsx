import { useState } from 'react'

const links = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Брендирование', href: '#branding' },
  { label: 'Условия', href: '#pricing' },
  { label: 'Сервис', href: '#service' },
  { label: 'Контакты', href: '#lead-form' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-deep/80 backdrop-blur-lg border-b border-border-neutral">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-8 h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <img
            src="https://qwik.pro/wp-content/uploads/2023/06/1b9dbf80fd5ed21739d20a4651110c8c.png"
            alt="Qwik.Pro"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary transition-colors hover:text-ivory"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop: phone + email + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Phone */}
          <a
            href="tel:+79064968802"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-ivory transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0 text-text-tertiary group-hover:text-ivory transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +7 (906) 496-88-02
          </a>

          {/* Email */}
          <a
            href="mailto:info@qwik.pro"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-ivory transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0 text-text-tertiary group-hover:text-ivory transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            info@qwik.pro
          </a>

          {/* CTA */}
          <a
            href="#lead-form"
            className="inline-flex items-center rounded-full border border-border-accent px-5 py-2 text-sm font-semibold text-ivory transition-colors hover:bg-white/5"
          >
            Заказать систему
          </a>
        </div>

        {/* Mobile: phone icon + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="tel:+79064968802"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-ivory/8 border border-border-neutral text-text-secondary hover:text-ivory transition-colors"
            aria-label="Позвонить"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Меню"
          >
            <span className={`block h-0.5 w-6 bg-ivory transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-ivory transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-ivory transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-emerald-deep/95 backdrop-blur-lg border-t border-border-neutral px-5 pb-6 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base text-text-secondary transition-colors hover:text-ivory border-b border-border-neutral"
            >
              {l.label}
            </a>
          ))}

          {/* Mobile contact info */}
          <div className="py-3 border-b border-border-neutral space-y-2">
            <a href="tel:+79064968802" className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-ivory transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              +7 (906) 496-88-02
            </a>
            <a href="mailto:info@qwik.pro" className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-ivory transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              info@qwik.pro
            </a>
          </div>

          <a
            href="#lead-form"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center rounded-full border border-border-accent px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-white/5"
          >
            Заказать систему
          </a>
        </nav>
      )}
    </header>
  )
}
