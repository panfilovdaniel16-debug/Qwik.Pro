const cards = [
  {
    title: 'Подменный фонд',
    text: 'На время ремонта выдаём замену. Ноль простоя для вашего заведения. Не нужно ждать курьера неделями и терять деньги.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: 'Ответ в день обращения',
    text: 'Безлимитная техподдержка. Не «оставьте заявку, мы перезвоним», а реальное решение вашего вопроса в тот же день.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: 'Работает «из коробки»',
    text: 'Привозим, настраиваем, обучаем ваш персонал. Никакой «спецпрошивки», сложных инструкций и мучений с совместимостью.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  {
    title: 'Бесплатные обновления',
    text: 'Новые функции, улучшения стабильности, обновления прошивок — бесплатно на весь срок гарантии. Система становится лучше с каждым месяцем.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
]

export default function Service() {
  return (
    <section id="service" className="bg-emerald-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-tertiary mb-4">
          Сервис
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl">
          Гарантия 5&nbsp;лет&nbsp;&mdash; самая длинная на&nbsp;рынке
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-text-secondary leading-relaxed">
          Сломалась кнопка? Заменим в течение суток. Ваш бизнес не&nbsp;простаивает ни минуты,
          пока мы решаем вопрос.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border-accent bg-emerald-dark/40 p-7 transition-colors hover:border-ivory/25"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-ivory/10 text-ivory">
                {c.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-ivory">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
