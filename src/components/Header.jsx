import { useState } from 'react'
import { reachGoal } from '../utils/metrika'

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
            onClick={() => reachGoal('click_phone')}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-ivory transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0 text-text-tertiary group-hover:text-ivory transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +7 (906) 496-88-02
          </a>

          {/* Email */}
          <a
            href="mailto:sales@qwik.pro"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-ivory transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0 text-text-tertiary group-hover:text-ivory transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            sales@qwik.pro
          </a>

          {/* Messengers */}
          <div className="flex items-center gap-1.5">
            <a href="https://wa.me/79064968802?text=Здравствуйте" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" onClick={() => reachGoal('click_whatsapp')} className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.96c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.11-1.84-.12-.42-.14-.96-.33-1.66-.65-2.92-1.33-4.83-4.28-4.98-4.48-.14-.2-1.18-1.57-1.18-3 0-1.43.75-2.14 1.01-2.43.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.57.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.28.47-.14.17-.3.37-.42.5-.14.14-.29.3-.12.58.17.29.74 1.22 1.58 1.97 1.09.97 2.01 1.27 2.29 1.41.29.14.45.12.62-.07.17-.2.71-.83.9-1.12.19-.29.38-.24.64-.14.26.1 1.63.77 1.91.91.29.14.48.22.55.33.07.12.07.67-.17 1.35z"/></svg>
            </a>
            <a href="https://t.me/+79064968802" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram" onClick={() => reachGoal('click_telegram')} className="flex items-center justify-center w-8 h-8 rounded-full bg-[#229ED9]/10 text-[#229ED9] hover:bg-[#229ED9]/20 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.49 7.87l-1.95 9.19c-.15.67-.54.83-1.1.52l-3.03-2.23-1.46 1.41c-.16.16-.3.3-.61.3l.22-3.06 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.93c-.64-.2-.66-.64.14-.95l11.58-4.46c.53-.2 1-.05.85.93z"/></svg>
            </a>
            <a href="https://vk.com/public211244635" target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте" title="ВКонтакте" onClick={() => reachGoal('click_vk')} className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0077FF]/10 text-[#0077FF] hover:bg-[#0077FF]/20 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="m9.489.004.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z"/></svg>
            </a>
          </div>

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
            onClick={() => reachGoal('click_phone')}
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
            <a href="tel:+79064968802" onClick={() => reachGoal('click_phone')} className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-ivory transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              +7 (906) 496-88-02
            </a>
            <a href="mailto:sales@qwik.pro" className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-ivory transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              sales@qwik.pro
            </a>
            <div className="flex gap-2 pt-1">
              <a href="https://wa.me/79064968802?text=Здравствуйте" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" onClick={() => reachGoal('click_whatsapp')} className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] hover:bg-[#25D366]/25 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.96c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.11-1.84-.12-.42-.14-.96-.33-1.66-.65-2.92-1.33-4.83-4.28-4.98-4.48-.14-.2-1.18-1.57-1.18-3 0-1.43.75-2.14 1.01-2.43.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.57.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.28.47-.14.17-.3.37-.42.5-.14.14-.29.3-.12.58.17.29.74 1.22 1.58 1.97 1.09.97 2.01 1.27 2.29 1.41.29.14.45.12.62-.07.17-.2.71-.83.9-1.12.19-.29.38-.24.64-.14.26.1 1.63.77 1.91.91.29.14.48.22.55.33.07.12.07.67-.17 1.35z"/></svg>
              </a>
              <a href="https://t.me/+79064968802" target="_blank" rel="noopener noreferrer" aria-label="Telegram" onClick={() => reachGoal('click_telegram')} className="flex items-center justify-center w-8 h-8 rounded-full bg-[#229ED9]/15 border border-[#229ED9]/25 text-[#229ED9] hover:bg-[#229ED9]/20 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.49 7.87l-1.95 9.19c-.15.67-.54.83-1.1.52l-3.03-2.23-1.46 1.41c-.16.16-.3.3-.61.3l.22-3.06 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.93c-.64-.2-.66-.64.14-.95l11.58-4.46c.53-.2 1-.05.85.93z"/></svg>
              </a>
              <a href="https://vk.com/public211244635" target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте" onClick={() => reachGoal('click_vk')} className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0077FF]/15 border border-[#0077FF]/25 text-[#0077FF] hover:bg-[#0077FF]/20 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="m9.489.004.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z"/></svg>
              </a>
            </div>
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
