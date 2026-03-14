import { useState, useEffect, useCallback } from 'react'
import { sendToTelegram } from '../utils/telegram'

/* ─── Gallery images ─── */
const galleryImages = [
  { src: 'https://qwik.pro/wp-content/uploads/2024/06/photo_2024-05-27_12-44-20.jpg', alt: 'Коллекция брендированных кнопок Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2024/06/photo_2024-06-06_12-52-27.jpg', alt: 'Art Core — кнопка вызова с брендированием' },
  { src: 'https://qwik.pro/wp-content/uploads/2024/06/photo_2024-04-12_23-20-16.jpg', alt: 'Кнопка вызова в кибер-клубе с неоном' },
  { src: 'https://qwik.pro/wp-content/uploads/2024/06/photo_2024-06-06_12-52-10.jpg', alt: 'Ресторан Лес — брендированная кнопка' },
  { src: 'https://qwik.pro/wp-content/uploads/2024/06/photo_2024-06-06_12-47-45.jpg', alt: 'Nexus Cyber Arena — кнопка вызова сотрудника' },
  { src: 'https://qwik.pro/wp-content/uploads/2024/06/photo_2024-04-12_23-27-42.jpg', alt: 'Colizeum — кнопка с кальянной тематикой' },
  { src: 'https://qwik.pro/wp-content/uploads/2024/06/photo_2024-05-16_23-33-26.jpg', alt: 'WLOSK — брендированная кнопка вызова' },
  { src: 'https://qwik.pro/wp-content/uploads/2024/06/photo_2024-06-04_17-54-28.jpg', alt: 'МЯСОТЕКА — брендированные пейджеры' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/02/photo_2025-01-29_11-52-50-600x600.jpg', alt: 'Брендированная сенсорная кнопка Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/02/photo_2024-05-27_12-43-13-600x450.jpg', alt: 'Кнопки вызова с нанесением логотипа' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/02/photo_2024-05-27_12-43-22-600x450.jpg', alt: 'Примеры нанесения на кнопки' },
  { src: 'https://qwik.pro/wp-content/uploads/2023/12/2023-12-12-13-02-03-scaled-600x338.jpg', alt: 'Брендированные кнопки на столе в заведении' },
  { src: '/images/branding/organizer-branding.jpg', alt: 'Деревянный органайзер с логотипом и кнопкой' },
  { src: '/images/branding/poker-table.jpg', alt: 'Кнопки вызова на покерном столе' },
  { src: '/images/branding/poker-close.jpg', alt: 'Покер-клуб — кнопки вызова крупным планом' },
  { src: '/images/branding/rave-buster.jpg', alt: 'RAVE by Buster — брендированная кнопка вызова' },
  { src: '/images/branding/potter-bar.png', alt: 'У Поттера — кнопка вызова в бар-музее' },
]

/* ─── Feature cards ─── */
const cards = [
  {
    title: 'Ваш логотип на каждой кнопке',
    text: 'Лазерная гравировка или UV-печать. Гости видят ваш бренд, а не безымянное устройство на столе. Кнопка работает на имидж заведения, а не против него.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Материалы под интерьер',
    text: 'Металл, натуральное дерево, soft-touch пластик. Подбираем фактуру и оттенок так, чтобы кнопка стала частью дизайна стола.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'IP65: кофе, вода, антисептик',
    text: 'Влагозащита по стандарту IP65. Пролитый латте, мохито или антисептик — не повод для ремонта. Протёрли, работает дальше.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
]

/* ─── Lightbox component ─── */
function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index)

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, goPrev, goNext])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev() }}
        className="absolute left-3 sm:left-6 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Image */}
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext() }}
        className="absolute right-3 sm:right-6 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
        {current + 1} / {images.length}
      </div>
    </div>
  )
}

/* ─── Main component ─── */
export default function Branding() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const msg = `🎨 <b>Заявка на брендирование</b>\n\n👤 Имя: ${form.name}\n📱 Телефон: ${form.phone}`
    const { ok } = await sendToTelegram(msg)
    setLoading(false)
    if (ok) {
      setSubmitted(true)
      setForm({ name: '', phone: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      alert('Не удалось отправить заявку. Позвоните нам: +7 (906) 496-88-02')
    }
  }

  return (
    <section id="branding" className="bg-emerald-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Label */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-tertiary mb-4">
          Брендирование
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl">
          Оборудование, которое дополняет интерьер, а&nbsp;не&nbsp;портит его
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-text-secondary leading-relaxed">
          Забудьте про дешёвый белый пластик из каталога. Нанесём ваш логотип, подберём материалы
          и цвет кнопок под стиль заведения&nbsp;&mdash; от минималистичного металла до натурального
          дерева с гравировкой.
        </p>

        {/* ─── Photo gallery ─── */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className="group relative rounded-2xl overflow-hidden border border-border-neutral bg-emerald-dark/40 aspect-square cursor-pointer focus:outline-none focus:ring-2 focus:ring-ivory/40"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </button>
          ))}

          {/* CTA card — fills the last cell */}
          <div className="rounded-2xl border border-border-accent bg-emerald-deep/60 aspect-square flex flex-col items-center justify-center text-center p-4">
            <span className="text-3xl mb-2">50+</span>
            <p className="text-sm font-semibold text-ivory leading-snug">кейсов</p>
            <p className="mt-2 text-xs text-text-secondary leading-relaxed">Это лишь малая часть — остальные пришлём по&nbsp;запросу</p>
          </div>
        </div>

        {/* ─── Feature cards ─── */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border-accent bg-emerald-deep/60 p-7 transition-colors hover:border-ivory/25"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-ivory/10 text-ivory">
                {c.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-ivory">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{c.text}</p>
            </div>
          ))}
        </div>

        {/* ─── Branding form + Messengers ─── */}
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Left: Form — takes 3 cols */}
          <div className="lg:col-span-3 rounded-2xl border border-border-accent bg-emerald-deep/60 p-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory mb-2">
              Закажите брендирование
            </h3>
            <p className="text-text-secondary text-sm mb-6">
              Оставьте заявку — подготовим макет и расчёт стоимости бесплатно.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="brand-name" className="block text-sm font-medium text-ivory mb-1.5">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="brand-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Как к вам обращаться?"
                    className="w-full rounded-lg border border-border-accent bg-emerald-dark/60 px-4 py-3 text-ivory placeholder-text-tertiary outline-none transition-colors focus:border-ivory/40"
                  />
                </div>
                <div>
                  <label htmlFor="brand-phone" className="block text-sm font-medium text-ivory mb-1.5">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="brand-phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-lg border border-border-accent bg-emerald-dark/60 px-4 py-3 text-ivory placeholder-text-tertiary outline-none transition-colors focus:border-ivory/40"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitted || loading}
                className="w-full rounded-lg bg-ivory px-7 py-4 text-base font-semibold text-emerald-deep transition-colors hover:bg-ivory-hover cursor-pointer disabled:opacity-60"
              >
                {loading ? 'Отправляем...' : submitted ? 'Заявка отправлена! ✓' : 'Отправить заявку на брендирование →'}
              </button>
            </form>

            <p className="mt-3 text-center text-xs text-text-tertiary leading-relaxed">
              Перезвоним в течение 30 минут. Консультация бесплатна.
            </p>
          </div>

          {/* Right: Messengers — takes 2 cols */}
          <div className="lg:col-span-2 rounded-2xl border border-border-accent bg-emerald-deep/60 p-8 flex flex-col">
            <h3 className="font-serif text-2xl font-semibold text-ivory mb-2">
              Или напишите нам
            </h3>
            <p className="text-text-secondary text-sm mb-5">
              Обсудим задачу в удобном мессенджере — ответим за 5 минут.
            </p>

            {/* 2-column grid for messengers */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/79064968802?text=Здравствуйте"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 px-3 py-4 text-white transition-all hover:bg-[#25D366]/20 hover:border-[#25D366]/40 hover:scale-[1.02]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.96c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.11-1.84-.12-.42-.14-.96-.33-1.66-.65-2.92-1.33-4.83-4.28-4.98-4.48-.14-.2-1.18-1.57-1.18-3 0-1.43.75-2.14 1.01-2.43.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.57.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.28.47-.14.17-.3.37-.42.5-.14.14-.29.3-.12.58.17.29.74 1.22 1.58 1.97 1.09.97 2.01 1.27 2.29 1.41.29.14.45.12.62-.07.17-.2.71-.83.9-1.12.19-.29.38-.24.64-.14.26.1 1.63.77 1.91.91.29.14.48.22.55.33.07.12.07.67-.17 1.35z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm text-center">WhatsApp</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/+79064968802"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl bg-[#229ED9]/10 border border-[#229ED9]/20 px-3 py-4 text-white transition-all hover:bg-[#229ED9]/20 hover:border-[#229ED9]/40 hover:scale-[1.02]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#229ED9]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.49 7.87l-1.95 9.19c-.15.67-.54.83-1.1.52l-3.03-2.23-1.46 1.41c-.16.16-.3.3-.61.3l.22-3.06 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.93c-.64-.2-.66-.64.14-.95l11.58-4.46c.53-.2 1-.05.85.93z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm text-center">Telegram</span>
              </a>

              {/* VKontakte */}
              <a
                href="https://vk.com/public211244635"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl bg-[#0077FF]/10 border border-[#0077FF]/20 px-3 py-4 text-white transition-all hover:bg-[#0077FF]/20 hover:border-[#0077FF]/40 hover:scale-[1.02]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0077FF]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm2.18 13.86h-1.61c-.61 0-.8-.49-1.9-1.61-,.96-,.93-1.51-,.93-.59 0-.75.17-.75.99v1.47c0 .28-.09.45-.83.45-1.22 0-2.58-.74-3.53-2.12-1.43-2.04-1.82-3.57-1.82-3.88 0-.18.07-.34.36-.34h1.61c.27 0 .37.13.47.43.52 1.5 1.38 2.81 1.74 2.81.13 0 .19-.06.19-.4v-1.56c-.04-.7-.41-.76-.41-.99 0-.16.13-.33.35-.33h2.53c.21 0 .29.11.29.36v2.1c0 .21.09.28.16.28.13 0 .24-.07.48-.31.74-.83 1.27-2.1 1.27-2.1.07-.15.2-.3.47-.3h1.61c.48 0 .59.25.48.58-.2.93-2.12 3.63-2.12 3.63-.17.28-.23.4 0 .71.17.23.72.71 1.09 1.14.68.77 1.2 1.41 1.34 1.86.15.44-.08.67-.54.67z"/>
                  </svg>
                </div>
                <span className="font-semibold text-sm text-center">ВКонтакте</span>
              </a>

              {/* MAX Messenger */}
              <a
                href="https://max.ru/u/f9LHodD0cOK7_-1M0o-5bG427whLGMTsJK1hHkGEjHMxCZw00WraU8Ok93Y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl bg-[#5B6EF5]/10 border border-[#5B6EF5]/20 px-3 py-4 text-white transition-all hover:bg-[#5B6EF5]/20 hover:border-[#5B6EF5]/40 hover:scale-[1.02]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{background: 'linear-gradient(135deg, #5B6EF5, #A855F7)'}}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 9l-2 4-2-4-4 2 2-4-2-4 4 2 2-4 2 4 4-2-2 4 2 4-4-2z"/>
                  </svg>
                </div>
                <span className="font-semibold text-sm text-center">MAX</span>
              </a>
            </div>

            {/* Phone — full width */}
            <a
              href="tel:+79064968802"
              className="flex items-center gap-4 rounded-xl bg-ivory/5 border border-ivory/10 px-5 py-3.5 text-white transition-all hover:bg-ivory/10 hover:border-ivory/20 hover:scale-[1.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory text-emerald-deep">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <span className="block font-semibold text-sm">+7 (906) 496-88-02</span>
                <span className="text-text-secondary text-xs">Позвонить — обсудить голосом</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-auto text-text-tertiary shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ─── Lightbox overlay ─── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  )
}
