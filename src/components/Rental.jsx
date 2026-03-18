export default function Rental() {
  return (
    <section id="pricing" className="bg-emerald-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-tertiary mb-4">
          Условия
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl">
          Без крупных вложений: попробуйте, потом решите
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-text-secondary leading-relaxed">
          Не уверены, что система окупится? Возьмите в аренду или протестируйте бесплатно
          7&nbsp;дней. Убедитесь в росте среднего чека и лояльности гостей&nbsp;&mdash;
          потом решайте.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Test-Drive */}
          <div className="rounded-2xl border border-border-accent bg-emerald-deep/60 p-8 flex flex-col">
            <h3 className="font-serif text-2xl font-semibold text-ivory">Тест-драйв</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-ivory">0 &#8381;</span>
              <span className="text-text-secondary text-sm">/ 7 дней бесплатно</span>
            </div>

            <ul className="mt-8 space-y-4 flex-1">
              {[
                'Полный комплект оборудования на ваше заведение',
                'Настройка, установка и обучение персонала',
                'Без обязательств — верните, если не подошло',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mt-0.5 w-4 h-4 shrink-0 text-ivory/60">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#lead-form"
              className="mt-8 inline-flex items-center justify-center rounded-lg border border-border-accent px-7 py-4 text-base font-semibold text-ivory transition-colors hover:bg-white/5 w-full"
            >
              Попробовать бесплатно
            </a>
          </div>

          {/* Rental */}
          <div className="relative rounded-2xl border-2 border-ivory/30 bg-emerald-deep/60 p-8 flex flex-col">
            <span className="absolute -top-3.5 left-6 rounded-full bg-ivory px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-deep">
              Популярное
            </span>
            <h3 className="font-serif text-2xl font-semibold text-ivory">Аренда</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-ivory">от 218 &#8381;</span>
              <span className="text-text-secondary text-sm">/мес за единицу</span>
            </div>

            <ul className="mt-8 space-y-4 flex-1">
              {[
                'Замена оборудования при поломке — бесплатно',
                'Техподдержка на весь срок аренды — бесплатно',
                'Переход на выкуп в любой момент, аренда засчитывается',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mt-0.5 w-4 h-4 shrink-0 text-ivory/60">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#lead-form"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-ivory px-7 py-4 text-base font-semibold text-emerald-deep transition-colors hover:bg-ivory-hover w-full"
            >
              Рассчитать стоимость аренды
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-sm text-text-tertiary">
          Все цены&nbsp;&mdash; финальные. Без скрытых платежей, доплат за «установку» и сюрпризов в договоре.
        </p>
      </div>
    </section>
  )
}
