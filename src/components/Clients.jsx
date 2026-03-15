import { useState, useRef, useEffect } from 'react'

const logos = [
  { src: 'https://qwik.pro/wp-content/uploads/2025/10/6b9cbace-4eff-47cd-923b-f389b04dd9cb-768x691.jpg', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/10/L_height.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/10/OIP.jpeg', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/10/dns-shop.png', alt: 'DNS' },
  { src: 'https://qwik.pro/wp-content/uploads/2023/06/0da43b15-2495-422b-a.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2023/06/c7696af6-ac78-4aa1-a.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2023/06/7fe059a5-461a-421b-b.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2023/06/b37cca0d-eea2-4124-8.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/10/dixy-logo-png_seeklogo-475513.png', alt: 'Дикси' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/10/1.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2023/06/d5311de2-8832-414c-b.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2023/06/16a3ae1d-63d6-401d-a.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2023/06/397cf8af-650f-4f4e-9.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2023/06/d0bbe8fc-74f6-4e8d-b.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2023/06/ab99f95b-4a6e-448f-b.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/10/i-2.webp', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/10/Component-651-768x696.png', alt: 'Клиент Qwik.Pro' },
  { src: 'https://qwik.pro/wp-content/uploads/2025/10/24268-768x461.jpg', alt: 'Клиент Qwik.Pro' },
]

function LogoItem({ logo, visible }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="flex-shrink-0 mx-4 flex items-center justify-center w-28 h-20 sm:w-36 sm:h-24 rounded-xl border border-border-neutral bg-white/5 p-3 hover:bg-white/10 transition-colors">
      {visible ? (
        <img
          src={logo.src}
          alt={logo.alt}
          width={144}
          height={96}
          decoding="async"
          loading="lazy"
          fetchPriority="low"
          onLoad={() => setLoaded(true)}
          className={`max-w-full max-h-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="w-16 h-10 rounded bg-white/5" />
      )}
    </div>
  )
}

export default function Clients() {
  const doubled = [...logos, ...logos]
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-emerald-dark py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-tertiary mb-4">
          Наши клиенты
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-xl">
            Нам доверяют более&nbsp;500&nbsp;заведений
          </h2>
          <p className="text-text-secondary text-base max-w-sm leading-relaxed">
            Рестораны, кафе, кальянные, компьютерные клубы, отели, банки, магазины — по всей России
          </p>
        </div>
      </div>

      {/* Marquee — один ряд */}
      <div className="relative">
        {/* Fade left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to right, var(--color-emerald-dark), transparent)' }} />
        {/* Fade right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to left, var(--color-emerald-dark), transparent)' }} />
        <div
          className="flex"
          style={{
            animation: visible ? 'marquee-left 45s linear infinite' : 'none',
            width: 'max-content',
          }}
        >
          {doubled.map((logo, i) => (
            <LogoItem key={i} logo={logo} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
