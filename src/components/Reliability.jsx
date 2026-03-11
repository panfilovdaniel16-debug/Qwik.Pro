const cards = [
  {
    title: 'Усилители сигнала',
    text: 'Покрытие до 3 000 м². Пробиваем цокольные этажи, бетонные перегородки и VIP-комнаты за толстыми стенами. Больше никаких «у нас кнопка не сработала».',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
      </svg>
    ),
  },
  {
    title: 'Доставка вызова < 0.3 сек',
    text: 'От нажатия кнопки до вибрации пейджера — менее трети секунды. Гость не успевает подумать «не работает», а официант уже в пути.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: 'Батарея на 18 месяцев',
    text: 'Никаких еженедельных замен батареек и расходов на них. Одна зарядка — полтора года стабильной работы.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
      </svg>
    ),
  },
  {
    title: 'Антивандальный корпус',
    text: 'Ударопрочный, влагозащищённый. Система не выйдет из строя, если на кнопку уронят поднос или прольют коктейль.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
]

export default function Reliability() {
  return (
    <section className="bg-emerald-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-tertiary mb-4">
          Надёжность
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl">
          Связь без «мёртвых зон»: ловит там, где&nbsp;другие сдаются
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-text-secondary leading-relaxed">
          Усилители сигнала покрывают любые площади&nbsp;&mdash; от подвальных кальянных до
          многозальных ресторанов с VIP-комнатами за бетонными стенами. Ни&nbsp;один вызов
          не&nbsp;потеряется.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border-accent bg-emerald-dark/60 p-7 transition-colors hover:border-ivory/25"
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
