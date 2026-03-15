import { reachGoal } from '../utils/metrika'

export default function Footer() {
  return (
    <footer className="bg-emerald-dark border-t border-border-neutral py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src="https://qwik.pro/wp-content/uploads/2023/06/1b9dbf80fd5ed21739d20a4651110c8c.png"
              alt="Qwik.Pro"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-text-secondary leading-relaxed">
              Системы вызова персонала для&nbsp;HoReCa. Аренда, продажа, сервис&nbsp;24/7.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-ivory mb-4">Каталог</h4>
            <ul className="space-y-2.5">
              {['Кнопки вызова', 'Часы-пейджеры', 'Пейджеры', 'Усилители сигнала', 'Рации'].map((l) => (
                <li key={l}>
                  <a href="#catalog" className="text-sm text-text-secondary hover:text-ivory transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-ivory mb-4">Компания</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Брендирование', href: '#branding' },
                { label: 'Условия аренды', href: '#pricing' },
                { label: 'Сервис и гарантия', href: '#service' },
                { label: 'Контакты', href: '#lead-form' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-text-secondary hover:text-ivory transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-ivory mb-4">Связаться</h4>
            <div className="space-y-3 mb-5">
              <a href="tel:+79064968802" onClick={() => reachGoal('click_phone')} className="flex items-center gap-2 text-sm text-text-secondary hover:text-ivory transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                +7 (906) 496-88-02
              </a>
              <a href="mailto:info@qwik.pro" className="flex items-center gap-2 text-sm text-text-secondary hover:text-ivory transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                info@qwik.pro
              </a>
            </div>

            {/* Messengers */}
            <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-3">Мессенджеры</h4>
            <div className="flex flex-wrap gap-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/79064968802?text=Здравствуйте"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                onClick={() => reachGoal('click_whatsapp')}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] hover:bg-[#25D366]/25 hover:border-[#25D366]/50 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.96c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.11-1.84-.12-.42-.14-.96-.33-1.66-.65-2.92-1.33-4.83-4.28-4.98-4.48-.14-.2-1.18-1.57-1.18-3 0-1.43.75-2.14 1.01-2.43.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.57.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.28.47-.14.17-.3.37-.42.5-.14.14-.29.3-.12.58.17.29.74 1.22 1.58 1.97 1.09.97 2.01 1.27 2.29 1.41.29.14.45.12.62-.07.17-.2.71-.83.9-1.12.19-.29.38-.24.64-.14.26.1 1.63.77 1.91.91.29.14.48.22.55.33.07.12.07.67-.17 1.35z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/+79064968802"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                title="Telegram"
                onClick={() => reachGoal('click_telegram')}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#229ED9]/15 border border-[#229ED9]/25 text-[#229ED9] hover:bg-[#229ED9]/25 hover:border-[#229ED9]/50 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.49 7.87l-1.95 9.19c-.15.67-.54.83-1.1.52l-3.03-2.23-1.46 1.41c-.16.16-.3.3-.61.3l.22-3.06 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.93c-.64-.2-.66-.64.14-.95l11.58-4.46c.53-.2 1-.05.85.93z" />
                </svg>
              </a>

              {/* VKontakte */}
              <a
                href="https://vk.com/public211244635"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
                title="ВКонтакте"
                onClick={() => reachGoal('click_vk')}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0077FF]/15 border border-[#0077FF]/25 text-[#0077FF] hover:bg-[#0077FF]/25 hover:border-[#0077FF]/50 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m9.489.004.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z"/>
                </svg>
              </a>

              {/* MAX */}
              <a
                href="https://max.ru/u/f9LHodD0cOK7_-1M0o-5bG427whLGMTsJK1hHkGEjHMxCZw00WraU8Ok93Y"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MAX"
                title="MAX"
                onClick={() => reachGoal('click_max')}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#5B6EF5]/25 hover:border-[#5B6EF5]/50 transition-colors"
                style={{ background: 'rgba(91,110,245,0.15)' }}
              >
                <svg className="w-4 h-4" viewBox="0 0 720 720" fill="url(#max-grad)" style={{ color: '#8B7CF5' }}>
                  <defs>
                    <linearGradient id="max-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#5B6EF5"/>
                      <stop offset="100%" stopColor="#A855F7"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#max-grad)" d="M350.4,9.6C141.8,20.5,4.1,184.1,12.8,390.4c3.8,90.3,40.1,168,48.7,253.7,2.2,22.2-4.2,49.6,21.4,59.3,31.5,11.9,79.8-8.1,106.2-26.4,9-6.1,17.6-13.2,24.2-22,27.3,18.1,53.2,35.6,85.7,43.4,143.1,34.3,299.9-44.2,369.6-170.3C799.6,291.2,622.5-4.6,350.4,9.6h0ZM269.4,504c-11.3,8.8-22.2,20.8-34.7,27.7-18.1,9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9,16.8-72.5,72.9-136.3,150-143.1,78-6.9,150.4,32.7,183.1,104.2,72.4,159.1-112.9,316.2-256.4,218.6h0Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border-neutral flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Qwik.Pro. Все права защищены.
          </p>

          {/* Legal links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="#/oferta"
              className="text-xs text-text-tertiary hover:text-ivory transition-colors underline-offset-2 hover:underline"
            >
              Публичная оферта
            </a>
            <a
              href="#/privacy"
              className="text-xs text-text-tertiary hover:text-ivory transition-colors underline-offset-2 hover:underline"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#/consent"
              className="text-xs text-text-tertiary hover:text-ivory transition-colors underline-offset-2 hover:underline"
            >
              Согласие на обработку данных
            </a>
          </div>

          <p className="text-xs text-text-tertiary sm:shrink-0">
            Работаем по всей России
          </p>
        </div>
      </div>
    </footer>
  )
}
