import { useState, useRef, useEffect } from 'react'

const stats = [
  { value: 'до 5 лет', label: 'Гарантия', desc: 'Самая длинная на рынке' },
  { value: '< 0.3 сек', label: 'Доставка вызова', desc: 'Мгновенная реакция' },
  { value: '24/7', label: 'Техподдержка', desc: 'Решение в день обращения' },
  { value: '100%', label: 'Покрытие сигнала', desc: 'Даже через бетон' },
]

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)
  const modalVideoRef = useRef(null)

  const openVideo = () => {
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeVideo = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
    if (modalVideoRef.current) modalVideoRef.current.pause()
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && modalOpen) closeVideo()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [modalOpen])

  return (
    <section className="relative bg-emerald-deep overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,230,211,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-20 sm:px-8 lg:pt-32 lg:pb-24">

        {/* ── Desktop: two columns ── */}
        <div className="lg:flex lg:items-start lg:gap-10 xl:gap-14">

          {/* ── Left: text ── */}
          <div className="lg:flex-1 lg:min-w-0">
            <p className="mb-4 text-sm tracking-[0.2em] uppercase text-text-secondary font-medium">
              Рестораны&ensp;&middot;&ensp;Кальянные&ensp;&middot;&ensp;Компьютерные клубы&ensp;&middot;&ensp;Отели
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-semibold leading-[1.1] tracking-tight">
              Система вызова персонала, которая{' '}
              <span className="text-ivory">окупается за&nbsp;14&nbsp;дней</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg xl:text-xl leading-relaxed text-text-secondary lg:max-w-md xl:max-w-lg">
              Брендированные кнопки под ваш интерьер. Стабильный сигнал без мёртвых зон.
              Аренда&nbsp;&mdash; от&nbsp;190&nbsp;&#8381;/мес,
              тест-драйв&nbsp;&mdash; 7&nbsp;дней бесплатно.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-lg bg-ivory px-6 py-3.5 text-base font-semibold text-emerald-deep transition-colors hover:bg-ivory-hover"
              >
                Рассчитать окупаемость&ensp;&rarr;
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg border border-border-accent px-6 py-3.5 text-base font-semibold text-ivory transition-colors hover:bg-white/5"
              >
                Попробовать 7 дней бесплатно
              </a>
            </div>
          </div>

          {/* ── Right: video ── */}
          <div className="mt-12 lg:mt-8 lg:w-[500px] xl:w-[560px] lg:shrink-0">
            <button
              onClick={openVideo}
              className="group relative w-full rounded-2xl overflow-hidden border border-ivory/15 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory/40 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
              aria-label="Смотреть видео о Qwik.Pro"
            >
              <video
                src="/video/hero.mp4"
                muted
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10 group-hover:via-black/10 group-hover:to-transparent transition-all duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-ivory/95 group-hover:bg-ivory group-hover:scale-110 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-deep ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                <p className="text-sm font-medium text-white/90">
                  Смотреть видео о системе
                </p>
                <p className="text-xs text-white/50 mt-0.5">0:50</p>
              </div>
            </button>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-border-accent overflow-hidden bg-border-accent">
          {stats.map((s) => (
            <div key={s.label} className="bg-emerald-deep px-5 py-6 text-center">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-ivory">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-ivory/90 uppercase tracking-wider">{s.label}</p>
              <p className="mt-1 text-xs text-text-tertiary">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Video Modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Закрыть"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div
            className="w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src="/video/hero.mp4"
              controls
              autoPlay
              playsInline
              className="w-full aspect-video bg-black"
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
      `}</style>
    </section>
  )
}
