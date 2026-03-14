const stats = [
  { value: 'до 5 лет', label: 'Гарантия', desc: 'Самая длинная на рынке' },
  { value: '< 0.3 сек', label: 'Доставка вызова', desc: 'Мгновенная реакция' },
  { value: '24/7', label: 'Техподдержка', desc: 'Решение в день обращения' },
  { value: '100%', label: 'Покрытие сигнала', desc: 'Даже через бетон' },
]

export default function Hero() {
  return (
    <section className="relative bg-emerald-deep overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,230,211,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-20 sm:px-8 lg:pt-36 lg:pb-28">
        {/* Tagline */}
        <p className="mb-5 text-sm tracking-[0.2em] uppercase text-text-secondary font-medium">
          Рестораны&ensp;&middot;&ensp;Кальянные&ensp;&middot;&ensp;Компьютерные клубы&ensp;&middot;&ensp;Отели
        </p>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight max-w-4xl">
          Система вызова персонала, которая{' '}
          <span className="text-ivory">окупается за&nbsp;14&nbsp;дней</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-text-secondary">
          Брендированные кнопки под ваш интерьер. Стабильный сигнал без мёртвых зон.
          Аренда&nbsp;&mdash; от&nbsp;190&nbsp;&#8381;/мес,
          тест-драйв&nbsp;&mdash; 7&nbsp;дней бесплатно.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-lg bg-ivory px-7 py-4 text-base font-semibold text-emerald-deep transition-colors hover:bg-ivory-hover"
          >
            Рассчитать окупаемость&ensp;&rarr;
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg border border-border-accent px-7 py-4 text-base font-semibold text-ivory transition-colors hover:bg-white/5"
          >
            Попробовать 7 дней бесплатно
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-border-accent overflow-hidden bg-border-accent">
          {stats.map((s) => (
            <div key={s.label} className="bg-emerald-deep px-6 py-7 text-center">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-ivory">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-ivory/90 uppercase tracking-wider">{s.label}</p>
              <p className="mt-1 text-xs text-text-tertiary">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
