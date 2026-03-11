const cards = [
  {
    title: 'Ваш логотип на каждой кнопке',
    text: 'Лазерная гравировка или UV-печать. Гости видят ваш бренд, а не «no name» устройство на столе. Кнопка работает на имидж заведения, а не против него.',
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

export default function Branding() {
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

        {/* Branding gallery — real branded equipment photos */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { src: 'https://qwik.pro/wp-content/uploads/2025/02/photo_2025-01-29_11-52-50-600x600.jpg', alt: 'Брендированная кнопка Qwik.Pro', cover: true },
            { src: 'https://qwik.pro/wp-content/uploads/2025/02/photo_2024-05-27_12-43-13-600x450.jpg', alt: 'Брендированное оборудование', cover: true },
            { src: 'https://qwik.pro/wp-content/uploads/2025/02/photo_2024-05-27_12-43-22-600x450.jpg', alt: 'Кнопки с логотипом заведения', cover: true },
            { src: 'https://qwik.pro/wp-content/uploads/2025/02/photo_2024-05-27_12-43-25-600x450.jpg', alt: 'Примеры брендирования', cover: true },
            { src: 'https://qwik.pro/wp-content/uploads/2023/07/265-600x600.png', alt: 'Сенсорная кнопка с брендированием' },
            { src: 'https://qwik.pro/wp-content/uploads/2025/07/ChatGPT-Image-9-yanv.-2026-g.-13_49_50-600x600.png', alt: 'Кнопка на подставке с логотипом' },
            { src: 'https://qwik.pro/wp-content/uploads/2023/07/Knopka-vyzova-s-individualnym-brendirovaniem-3-600x800.png', alt: 'Индивидуальное брендирование' },
            { src: 'https://qwik.pro/wp-content/uploads/2023/12/2023-12-12-13-02-03-scaled-600x338.jpg', alt: 'Брендированные кнопки на столе', cover: true },
          ].map((img) => (
            <div key={img.src} className="rounded-2xl overflow-hidden border border-border-neutral bg-emerald-dark/40 aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className={`h-full w-full ${img.cover ? 'object-cover' : 'object-contain p-4'}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Cards */}
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
      </div>
    </section>
  )
}
