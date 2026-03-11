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

        {/* Desktop CTA */}
        <a
          href="#lead-form"
          className="hidden lg:inline-flex items-center rounded-full border border-border-accent px-5 py-2 text-sm font-semibold text-ivory transition-colors hover:bg-white/5"
        >
          Заказать систему
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Меню"
        >
          <span className={`block h-0.5 w-6 bg-ivory transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ivory transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ivory transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-emerald-deep/95 backdrop-blur-lg border-t border-border-neutral px-5 pb-6 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base text-text-secondary transition-colors hover:text-ivory border-b border-border-neutral last:border-0"
            >
              {l.label}
            </a>
          ))}
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
