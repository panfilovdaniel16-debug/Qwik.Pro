const solutions = [
  {
    title: 'Логирование каждого вызова',
    text: 'Кто нажал, кто принял, за сколько секунд. Прозрачная статистика для владельца.',
  },
  {
    title: 'Защита от отключения',
    text: 'Система фиксирует выключенный пейджер и сразу уведомляет менеджера.',
  },
  {
    title: 'Эскалация вызова',
    text: 'Если официант не принял вызов за 30 секунд, уведомление автоматически уходит менеджеру смены.',
  },
  {
    title: 'Фильтр «баловства»',
    text: 'Алгоритм распознаёт ложные нажатия, чтобы персонал реагировал только на реальные вызовы.',
  },
]

export default function StaffControl() {
  return (
    <section className="bg-emerald-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-tertiary mb-4">
          Контроль персонала
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-4xl">
          Больше никаких «забытых» вызовов и&nbsp;выключенных пейджеров
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-text-secondary leading-relaxed">
          Конкуренты продают «железо». Мы продаём дисциплину. Система фиксирует каждый вызов,
          время реакции и факт игнорирования. Саботаж становится невозможным.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Problem Block */}
          <div className="rounded-2xl border border-red-500/20 bg-red-950/20 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-red-300">Проблема</h3>
            </div>

            <blockquote className="border-l-2 border-red-500/30 pl-5 mb-5">
              <p className="text-lg italic text-ivory/80 leading-relaxed">
                «Официант выключил пейджер и говорит, что кнопка не сработала»
              </p>
            </blockquote>

            <p className="text-sm text-text-secondary leading-relaxed">
              Знакомо? Это боль №1 владельцев заведений. Без контроля любая система вызова
              превращается в дорогую игрушку, которую персонал игнорирует на&nbsp;второй день.
            </p>
          </div>

          {/* Solution Block */}
          <div className="rounded-2xl border border-border-accent bg-emerald-deep/60 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-ivory">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-ivory">Решение Qwik.Pro</h3>
            </div>

            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s.title} className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mt-0.5 w-4 h-4 shrink-0 text-ivory/60">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-ivory text-sm">{s.title}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
