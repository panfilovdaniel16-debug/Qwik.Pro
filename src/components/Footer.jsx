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

          {/* Contacts & Social */}
          <div>
            <h4 className="text-sm font-semibold text-ivory mb-4">Связаться</h4>
            <div className="space-y-3">
              <a href="tel:+74991000000" className="flex items-center gap-2 text-sm text-text-secondary hover:text-ivory transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                +7 (499) 100-00-00
              </a>
              <a href="mailto:info@qwik.pro" className="flex items-center gap-2 text-sm text-text-secondary hover:text-ivory transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                info@qwik.pro
              </a>
            </div>

            {/* Social links */}
            <div className="mt-5 flex gap-3">
              <a href="https://t.me/qwikpro" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-ivory/8 border border-border-neutral text-text-secondary hover:text-ivory hover:border-border-accent transition-colors" aria-label="Telegram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.49 7.87l-1.95 9.19c-.15.67-.54.83-1.1.52l-3.03-2.23-1.46 1.41c-.16.16-.3.3-.61.3l.22-3.06 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.93c-.64-.2-.66-.64.14-.95l11.58-4.46c.53-.2 1-.05.85.93z" />
                </svg>
              </a>
              <a href="https://wa.me/74991000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-ivory/8 border border-border-neutral text-text-secondary hover:text-ivory hover:border-border-accent transition-colors" aria-label="WhatsApp">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.96c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.11-1.84-.12-.42-.14-.96-.33-1.66-.65-2.92-1.33-4.83-4.28-4.98-4.48-.14-.2-1.18-1.57-1.18-3 0-1.43.75-2.14 1.01-2.43.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.57.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.28.47-.14.17-.3.37-.42.5-.14.14-.29.3-.12.58.17.29.74 1.22 1.58 1.97 1.09.97 2.01 1.27 2.29 1.41.29.14.45.12.62-.07.17-.2.71-.83.9-1.12.19-.29.38-.24.64-.14.26.1 1.63.77 1.91.91.29.14.48.22.55.33.07.12.07.67-.17 1.35z" />
                </svg>
              </a>
              <a href="https://vk.com/qwikpro" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-ivory/8 border border-border-neutral text-text-secondary hover:text-ivory hover:border-border-accent transition-colors" aria-label="ВКонтакте">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.785 16.241s.288-.032.436-.192c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.367 1.259 2.182 1.815.616.42 1.084.328 1.084.328l2.175-.03s1.138-.07.598-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.248.998-1.33 1.398-2.143 1.273-2.49-.119-.332-.852-.244-.852-.244l-2.45.015s-.182-.025-.316.056c-.131.079-.216.263-.216.263s-.388 1.032-.905 1.91c-1.091 1.855-1.527 1.953-1.705 1.838-.415-.268-.311-1.076-.311-1.649 0-1.793.272-2.54-.529-2.735-.266-.065-.461-.107-1.14-.114-.87-.009-1.606.003-2.023.208-.278.136-.492.44-.361.457.161.021.527.099.72.363.25.341.24 1.108.24 1.108s.143 2.11-.334 2.372c-.327.18-.776-.187-1.739-1.866-.493-.86-.866-1.81-.866-1.81s-.072-.176-.2-.27c-.155-.116-.372-.152-.372-.152l-2.327.015s-.35.01-.478.162c-.114.135-.009.415-.009.415s1.823 4.267 3.886 6.415c1.89 1.97 4.039 1.839 4.039 1.839z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border-neutral flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Qwik.Pro. Все права защищены.
          </p>
          <p className="text-xs text-text-tertiary">
            Работаем по всей России
          </p>
        </div>
      </div>
    </footer>
  )
}
