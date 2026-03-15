import { useState, useRef, useEffect } from 'react'

const stats = [
  { value: 'до 5 лет', label: 'Гарантия', desc: 'Самая длинная на рынке' },
  { value: '< 0.3 сек', label: 'Доставка вызова', desc: 'Мгновенная реакция' },
  { value: '24/7', label: 'Техподдержка', desc: 'Решение в день обращения' },
  { value: '100%', label: 'Покрытие сигнала', desc: 'Даже через бетон' },
]

export default function Hero() {
  const [playing, setPlaying] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const videoRef = useRef(null)
  const modalVideoRef = useRef(null)

  /* Open modal with video */
  const openVideo = () => {
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  /* Close modal */
  const closeVideo = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
  }

  /* Close on Escape */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && modalOpen) closeVideo()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [modalOpen])

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

        {/* ── Video Preview ── */}
        <div className="mt-14">
          <button
            onClick={openVideo}
            className="group relative w-full max-w-3xl rounded-2xl overflow-hidden border border-ivory/10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory/40"
            aria-label="Смотреть видео о Qwik.Pro"
          >
            {/* Video as poster/preview — muted, no controls */}
            <video
              ref={videoRef}
              src="/video/hero.mp4"
              muted
              playsInline
              preload="metadata"
              className="w-full aspect-video object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-ivory/90 group-hover:bg-ivory group-hover:scale-110 transition-all duration-300 shadow-2xl">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-deep ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              </div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-sm sm:text-base font-medium text-white/90">
                Смотреть видео о системе Qwik.Pro
              </p>
              <p className="text-xs text-white/60 mt-0.5">0:50</p>
            </div>
          </button>
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

      {/* ── Video Modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
          onClick={closeVideo}
        >
          {/* Close button */}
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Закрыть"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Video container */}
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
