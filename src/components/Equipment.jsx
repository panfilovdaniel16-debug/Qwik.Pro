import { useState, useRef, useEffect } from 'react'
import { sendToTelegram } from '../utils/telegram'
import { reachGoal } from '../utils/metrika'

const categories = [
  {
    id: 'buttons',
    label: 'Кнопки вызова',
    description: 'Классические и деревянные кнопки вызова. Брендирование, выбор цвета и материала. Влагозащита IP65.',
    products: [
      { name: 'Кнопка вызова 1 в 1', variant: 'Серая', brand: 'Qwik.Pro', price: '862', oldPrice: '2 975', rental: '218', sub: '1v1', img: 'https://qwik.pro/wp-content/uploads/2025/05/ChatGPT-Image-17-dek.-2025-g.-22_33_33-600x600.png' },
      { name: 'Кнопка вызова 1 в 1', variant: 'Чёрная', brand: 'Qwik.Pro', price: '494', oldPrice: '1 023', rental: '218', sub: '1v1', img: 'https://qwik.pro/wp-content/uploads/2025/11/ChatGPT-Image-18-dek.-2025-g.-22_02_31-600x600.png' },
      { name: 'Кнопка вызова 1 в 1', variant: 'Синяя', brand: 'Qwik.Pro', price: '494', oldPrice: '1 023', rental: '218', sub: '1v1', img: 'https://qwik.pro/wp-content/uploads/2025/05/ChatGPT-Image-17-dek.-2025-g.-22_50_38-600x600.png' },
      { name: 'Кнопка вызова 1 в 1', variant: 'Красная', brand: 'Qwik.Pro', price: '494', oldPrice: '793', rental: '218', sub: '1v1', img: 'https://qwik.pro/wp-content/uploads/2025/05/Knopka-vyzova-personala-Qwik.pro-1-v-1-krasnaya--600x600.png' },
      { name: 'Кнопка вызова с подсветкой', variant: 'Классическая', brand: 'Qwik.Pro', price: '1 139', oldPrice: '1 955', rental: '288', img: 'https://qwik.pro/wp-content/uploads/2023/12/Knopka-vyzova-s-podsvetkoj-1-600x600.png' },
      { name: 'Кнопка вызова 4 в 1', variant: 'Вызов · Счёт · Отмена · Меню', brand: 'Qwik.Pro', price: '633', oldPrice: '1 023', rental: '253', sub: '4v1', img: 'https://qwik.pro/wp-content/uploads/2023/07/ChatGPT-Image-5-yanv.-2026-g.-14_10_38-600x600.png' },
      { name: 'Кнопка вызова 4 в 1', variant: 'Кальян · Вызов · Счёт · Отмена', brand: 'Qwik.Pro', price: '633', oldPrice: '1 023', rental: '253', sub: '4v1', img: 'https://qwik.pro/wp-content/uploads/2023/07/ChatGPT-Image-5-yanv.-2026-g.-14_14_25-600x600.png' },
      { name: 'Кнопка вызова', variant: 'Стандартная', brand: 'Qwik.Pro', price: '402', oldPrice: '1 023', rental: '218', sub: '1v1', img: 'https://qwik.pro/wp-content/uploads/2024/07/Knopka-vyzova--600x600.png' },
      { name: 'Влагостойкая кнопка 1 в 1', variant: 'Чёрная IP65', brand: 'Qwik.Pro', price: '633', oldPrice: '1 023', rental: '253', sub: '1v1', img: 'https://qwik.pro/wp-content/uploads/2023/07/ChatGPT-Image-5-yanv.-2026-g.-13_48_32-600x600.png' },
      { name: 'Влагостойкая кнопка 3 в 1', variant: 'Счёт · Вызов · Отмена', brand: 'Qwik.Pro', price: '633', oldPrice: '1 019', rental: '253', sub: '3v1', img: 'https://qwik.pro/wp-content/uploads/2023/07/ChatGPT-Image-5-yanv.-2026-g.-13_51_03-600x600.png' },
      { name: 'Влагостойкая кнопка 3 в 1', variant: 'Кальян · Вызов · Отмена', brand: 'Qwik.Pro', price: '633', oldPrice: '1 019', rental: '253', sub: '3v1', img: 'https://qwik.pro/wp-content/uploads/2023/07/Vlagostojkaya-knopka-vyzova-ofitsianta-3-v-1-kalyan-vyzov-otmena--600x600.png' },
      { name: 'Сенсорная кнопка', variant: 'С брендированием', brand: 'Qwik.Pro', price: '679', oldPrice: '1 206', rental: '288', img: 'https://qwik.pro/wp-content/uploads/2023/07/265-600x600.png' },
      { name: 'Сенсорная кнопка на подставке', variant: 'С индивидуальным брендированием', brand: 'Qwik.Pro', price: '2 174', rental: '448', img: 'https://qwik.pro/wp-content/uploads/2025/07/ChatGPT-Image-9-yanv.-2026-g.-13_49_50-600x600.png' },
    ],
  },
  {
    id: 'watches',
    label: 'Часы-пейджеры',
    description: 'Наручные часы для официантов с вибрацией и номером стола на экране. Лёгкие, незаметные, с зарядкой на полную смену.',
    products: [
      { name: 'Часы RETEKESS TD 108', variant: 'Наручные', brand: 'Retekess', price: '4 589', oldPrice: '6 670', rental: '564', img: 'https://qwik.pro/wp-content/uploads/2025/02/ChatGPT-Image-17-dek.-2025-g.-22_26_23-600x600.png' },
      { name: 'Часы-пейджер WB-1', variant: 'Наручные', brand: 'Qwik.Pro', price: '5 049', oldPrice: '8 038', rental: '679', img: 'https://qwik.pro/wp-content/uploads/2024/10/ChatGPT-Image-5-yanv.-2026-g.-12_22_19-600x600.png' },
      { name: 'Часы WL-CW6', variant: 'Влагостойкие', brand: 'Qwik.Pro', price: '4 819', oldPrice: '7 233', rental: '690', img: 'https://qwik.pro/wp-content/uploads/2023/07/chasy-600x600.png' },
      { name: 'Часы-пейджер WL-CW7C', variant: 'Чёрные, IP67, гарантия 2 года', brand: 'Qwik.Pro', price: '9 775', oldPrice: '13 041', rental: '862', img: 'https://qwik.pro/wp-content/uploads/2023/10/ChatGPT-Image-5-yanv.-2026-g.-12_28_16.png' },
    ],
  },
  {
    id: 'pagers',
    label: 'Пейджеры',
    description: 'Пейджеры оповещения о готовности заказа. Для фудкортов, кофеен и ресторанов с самообслуживанием.',
    products: [
      { name: 'Пейджеры WL-CQ12', variant: 'Чёрные, комплект', brand: 'Qwik.Pro', price: '13 800', oldPrice: '20 125', img: 'https://qwik.pro/wp-content/uploads/2023/06/1025-600x600.png' },
      { name: 'Пейджеры TD 157', variant: 'Чёрные, комплект', brand: 'Retekess', price: '16 664', img: 'https://qwik.pro/wp-content/uploads/2023/06/650-600x600.png' },
      { name: 'Пейджеры TD 157', variant: 'Белые, комплект', brand: 'Retekess', price: '16 664', img: 'https://qwik.pro/wp-content/uploads/2023/06/595-600x600.png' },
      { name: 'Пейджеры WL-CQ1', variant: 'С вибрацией, чёрные', brand: 'Qwik.Pro', price: '18 745', img: 'https://qwik.pro/wp-content/uploads/2023/10/2190-600x600.png' },
      { name: 'Пейджер TD 157', variant: 'Чёрный, 1 шт.', brand: 'Retekess', price: '1 149', img: 'https://qwik.pro/wp-content/uploads/2023/06/670-600x600.png' },
      { name: 'Пейджер TD 157', variant: 'Белый, 1 шт.', brand: 'Retekess', price: '1 149', img: 'https://qwik.pro/wp-content/uploads/2023/06/645-600x600.png' },
      { name: 'Пейджер WL-CQ12', variant: 'Чёрный, 1 шт.', brand: 'Qwik.Pro', price: '1 369', img: 'https://qwik.pro/wp-content/uploads/2023/06/1055-600x600.png' },
    ],
  },
  {
    id: 'amplifiers',
    label: 'Усилители',
    description: 'Расширяют зону покрытия до 3 000 м². Решают проблему мёртвых зон в цокольных этажах и за бетонными стенами.',
    products: [
      { name: 'Усилитель сигнала', variant: 'Покрытие до 3 000 м²', brand: 'Qwik.Pro', price: '4 013', oldPrice: '8 844', rental: '575', img: 'https://qwik.pro/wp-content/uploads/2023/07/ChatGPT-Image-17-dek.-2025-g.-22_40_46-600x600.png' },
    ],
  },
  {
    id: 'transmitters',
    label: 'Передатчики',
    description: 'Кухонные передатчики для вызова персонала. Совместимы со всеми устройствами Qwik.Pro.',
    products: [
      { name: 'Кухонный передатчик', variant: '999 каналов', brand: 'Qwik.Pro', price: '4 013', oldPrice: '8 740', rental: '690', img: '/images/transmitter.png' },
    ],
  },
  {
    id: 'radios',
    label: 'Рации',
    description: 'Для координации команды в больших заведениях. Связь между залом, кухней и менеджером — без задержек.',
    products: [
      { name: 'Рация SR 610', variant: 'Профессиональная', brand: 'Qwik.Pro', price: '4 096', oldPrice: '6 415', rental: '747', img: 'https://qwik.pro/wp-content/uploads/2024/11/photo_2024-11-24_10-24-56-3.jpg' },
      { name: 'Рация R26', variant: 'Компактная', brand: 'Qwik.Pro', price: '3 272', oldPrice: '4 359', rental: '633', img: 'https://qwik.pro/wp-content/uploads/2023/06/520-600x600.png' },
      { name: 'Рация Yanton S8', variant: 'Бюджетная', brand: 'Qwik.Pro', price: '2 205', oldPrice: '3 438', rental: '690', img: 'https://qwik.pro/wp-content/uploads/2023/10/2160-600x600.png' },
      { name: 'Наушники для рации', variant: 'Проводные', brand: 'Qwik.Pro', price: '288', oldPrice: '448', img: 'https://qwik.pro/wp-content/uploads/2023/06/585-600x600.png' },
      { name: 'Наушники для рации', variant: 'Вакуумные', brand: 'Qwik.Pro', price: '402', oldPrice: '564', img: 'https://qwik.pro/wp-content/uploads/2023/06/945-600x600.png' },
    ],
  },
  {
    id: 'organizers',
    label: 'Органайзеры',
    description: 'Настольные органайзеры с местом под кнопку вызова. Удобство для гостей и порядок на столе.',
    products: [
      { name: 'Органайзер', variant: '4 отсека + кнопка', brand: 'Qwik.Pro', price: '1 582', img: '/images/organizer-4-otseka.png' },
      { name: 'Органайзер', variant: '5 отсеков + кнопка', brand: 'Qwik.Pro', price: '1 757', img: '/images/organizer-5-otsekov.png' },
      { name: 'Органайзер', variant: 'Премиум с кнопкой', brand: 'Qwik.Pro', price: '2 285', img: '/images/organizer-premium.png' },
    ],
  },
]

/* ── Quick-order / KP modal ──────────────────────────── */
function QuickOrderModal({ product, onClose, mode }) {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const isKP = mode === 'kp'

  const handleOrder = async () => {
    setLoading(true)
    const emoji = isKP ? '📄' : '🛒'
    const title = isKP ? 'Запрос КП' : 'Новый заказ'
    const msg = `${emoji} <b>${title}</b>\n\n📦 Товар: ${product.name} (${product.variant})\n💰 Цена: ${product.price} ₽\n👤 Имя: ${form.name}\n📱 Телефон: ${form.phone}`
    const { ok } = await sendToTelegram(msg)
    setLoading(false)
    if (ok) {
      reachGoal(isKP ? 'form_kp' : 'form_order', { product: product.name, variant: product.variant })
      onClose()
      alert('Спасибо! Перезвоним в течение 5 минут.')
    } else {
      alert('Не удалось отправить заявку. Позвоните нам: +7 (906) 496-88-02')
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="shrink-0 h-20 w-20 rounded-xl overflow-hidden bg-[#f5f5f5] p-2">
            <img src={product.img} alt={product.name} className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 text-base leading-tight">{product.name}</p>
            <p className="text-xs text-gray-400 mt-0.5">{product.variant}</p>
            <p className="text-lg font-bold text-gray-900 mt-1">{product.price} &#8381;</p>
          </div>
          <button onClick={onClose} className="shrink-0 ml-auto text-gray-400 hover:text-gray-600 cursor-pointer p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {isKP ? 'Получить коммерческое предложение' : 'Оформить заказ'}
        </h3>
        <p className="text-sm text-gray-500 mb-5">
          {isKP ? 'Подготовим КП с ценами, условиями аренды и сроками доставки.' : 'Оставьте контакты — перезвоним за 5 минут.'}
        </p>

        <div className="space-y-3">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Ваше имя"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep/20 text-sm"
          />
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+7 (___) ___-__-__"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep/20 text-sm"
          />
        </div>

        <button
          onClick={handleOrder}
          disabled={loading}
          className="mt-4 w-full rounded-xl bg-emerald-deep px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-dark cursor-pointer disabled:opacity-60"
        >
          {loading ? 'Отправляем...' : isKP ? 'Получить КП' : 'Заказать сейчас'}&ensp;&rarr;
        </button>
      </div>
    </div>
  )
}

/* ── Main section ────────────────────────────────────── */
const subCategories = [
  { id: 'all', label: 'Все' },
  { id: '1v1', label: '1 в 1' },
  { id: '3v1', label: '3 в 1' },
  { id: '4v1', label: '4 в 1' },
]

export default function Equipment() {
  const [active, setActive] = useState('buttons')
  const [subFilter, setSubFilter] = useState('all')
  const [orderProduct, setOrderProduct] = useState(null)
  const [orderMode, setOrderMode] = useState('order')
  const [showFloatingNav, setShowFloatingNav] = useState(false)
  const current = categories.find((c) => c.id === active)
  const tabsRef = useRef(null)
  const gridRef = useRef(null)

  const setCategory = (id) => {
    setActive(id)
    setSubFilter('all')
  }

  const scrollToTabs = () => {
    tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Show floating "Other categories" button when tabs are out of viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!tabsRef.current || !gridRef.current) return
      const tabsRect = tabsRef.current.getBoundingClientRect()
      const gridRect = gridRef.current.getBoundingClientRect()
      // Show when tabs are above viewport AND grid is still visible
      const tabsHidden = tabsRect.bottom < 0
      const gridVisible = gridRect.bottom > 100
      setShowFloatingNav(tabsHidden && gridVisible && window.innerWidth < 768)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredProducts = active === 'buttons' && subFilter !== 'all'
    ? current.products.filter((p) => p.sub === subFilter)
    : current.products

  const openModal = (product, mode) => {
    setOrderProduct(product)
    setOrderMode(mode)
  }

  return (
    <section id="catalog" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* ── Section header ── */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-deep/60 mb-4">
          Каталог
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl text-gray-900">
          Всё для системы вызова&nbsp;&mdash; в&nbsp;одном месте
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-gray-500 leading-relaxed">
          Подберём комплект под ваше заведение — от&nbsp;одной кнопки на&nbsp;стойку до&nbsp;полной
          системы на&nbsp;100+ столов. Сейчас скидки почти на&nbsp;весь ассортимент.
        </p>

        {/* ── Advantages strip ── */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            { icon: '₽', text: 'Аренда от 218 ₽/мес · покупка от 402 ₽' },
            { icon: '↻', text: 'Трейд-ин старого оборудования' },
            { icon: '✦', text: 'Тест-драйв 7 дней бесплатно' },
            { icon: '∞', text: 'Техподдержка без ограничений' },
          ].map((a) => (
            <span key={a.text} className="inline-flex items-center gap-2 rounded-full bg-emerald-deep/5 border border-emerald-deep/10 px-4 py-2 text-xs font-semibold text-emerald-deep">
              <span className="opacity-60">{a.icon}</span>
              {a.text}
            </span>
          ))}
        </div>

        {/* ── Category tabs ── */}
        <div ref={tabsRef} className="mt-10 grid grid-cols-2 gap-2 md:flex md:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all cursor-pointer text-center ${
                active === cat.id
                  ? 'bg-emerald-deep text-white shadow-lg shadow-emerald-deep/20'
                  : 'border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-60">{cat.products.length}</span>
            </button>
          ))}
        </div>

        {/* ── Sub-category filters (buttons only) ── */}
        {active === 'buttons' && (
          <div className="mt-3 flex gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {subCategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSubFilter(sub.id)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  subFilter === sub.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* ── Category description ── */}
        <p className="mt-5 text-sm text-gray-400 max-w-xl">
          {current.description}
        </p>

        {/* ── Product grid ── */}
        <div ref={gridRef} className="mt-8 grid gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((p, i) => (
            <div
              key={`${current.id}-${subFilter}-${i}`}
              className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/60 hover:border-gray-300"
            >
              {/* Sale badge */}
              {p.oldPrice && (
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 rounded-full bg-emerald-deep px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
                  Акция
                </div>
              )}

              {/* Image area */}
              <div className="relative flex items-center justify-center p-2 sm:p-4 aspect-square bg-white">
                <img
                  src={p.img}
                  alt={p.name}
                  width={300}
                  height={300}
                  decoding="async"
                  loading="lazy"
                  fetchPriority="low"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-3 sm:p-5 border-t border-gray-100">
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight line-clamp-2">
                  {p.name}
                </h3>
                <p className="mt-0.5 text-xs text-gray-400 hidden sm:block">{p.brand}</p>

                {/* Variant */}
                <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-gray-500 line-clamp-1">{p.variant}</p>

                {/* Price block */}
                <div className="mt-2 sm:mt-3 flex items-baseline gap-1 sm:gap-2">
                  <span className="text-base sm:text-xl font-bold text-gray-900">{p.price} &#8381;</span>
                  {p.oldPrice && (
                    <span className="text-[10px] sm:text-xs text-gray-400 line-through">{p.oldPrice} &#8381;</span>
                  )}
                </div>
                {p.rental && (
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-gray-400">
                    Аренда от <span className="text-emerald-deep font-semibold">{p.rental} &#8381;/мес</span>
                  </p>
                )}

                {/* CTAs */}
                <div className="mt-2.5 sm:mt-4 flex flex-col gap-1.5 sm:gap-2">
                  <button
                    onClick={() => openModal(p, 'order')}
                    className="w-full rounded-xl bg-emerald-deep px-2 py-1.5 sm:px-4 sm:py-2.5 text-[11px] sm:text-xs font-bold text-white transition-colors hover:bg-emerald-dark cursor-pointer"
                  >
                    Заказать сейчас
                  </button>
                  <button
                    onClick={() => openModal(p, 'kp')}
                    className="w-full rounded-xl border border-gray-200 px-2 py-1.5 sm:px-4 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50 hover:border-gray-300 cursor-pointer"
                  >
                    Получить КП
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Back to categories (mobile) ── */}
        <button
          onClick={scrollToTabs}
          className="mt-6 w-full rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700 cursor-pointer md:hidden"
        >
          &uarr; Другие категории
        </button>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center">
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-full bg-emerald-deep px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-emerald-dark shadow-lg shadow-emerald-deep/20"
          >
            Получить подбор оборудования&ensp;&rarr;
          </a>
        </div>
      </div>

      {/* ── Floating "Other categories" button (mobile) ── */}
      {showFloatingNav && (
        <button
          onClick={scrollToTabs}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-white cursor-pointer md:hidden"
        >
          &uarr; Другие категории
        </button>
      )}

      {/* Quick order modal */}
      {orderProduct && (
        <QuickOrderModal product={orderProduct} mode={orderMode} onClose={() => setOrderProduct(null)} />
      )}
    </section>
  )
}
