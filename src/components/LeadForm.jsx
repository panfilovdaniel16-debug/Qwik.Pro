import { useState } from 'react'

const venueTypes = [
  'Ресторан / Кафе',
  'Кальянная',
  'Клуб / Бар',
  'Отель / Гостиница',
  'Другое',
]

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', phone: '', venue: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    alert('Спасибо! Мы перезвоним в течение 30 минут.')
  }

  return (
    <section id="lead-form" className="bg-emerald-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-tertiary mb-4">
            Начать
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Получите расчёт окупаемости для&nbsp;вашего заведения
          </h2>

          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            Подберём комплект под ваши задачи, рассчитаем стоимость и покажем, как система
            окупается за первые 2–3 месяца работы.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-lg rounded-2xl border border-border-accent bg-emerald-deep/60 p-8"
        >
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-ivory mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Как к вам обращаться?"
              className="w-full rounded-lg border border-border-accent bg-emerald-dark/60 px-4 py-3 text-ivory placeholder-text-tertiary outline-none transition-colors focus:border-ivory/40"
            />
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label htmlFor="phone" className="block text-sm font-medium text-ivory mb-2">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+7 (___) ___-__-__"
              className="w-full rounded-lg border border-border-accent bg-emerald-dark/60 px-4 py-3 text-ivory placeholder-text-tertiary outline-none transition-colors focus:border-ivory/40"
            />
          </div>

          {/* Venue Type */}
          <div className="mb-8">
            <label htmlFor="venue" className="block text-sm font-medium text-ivory mb-2">
              Тип заведения
            </label>
            <select
              id="venue"
              required
              value={form.venue}
              onChange={(e) => setForm({ ...form, venue: e.target.value })}
              className="w-full rounded-lg border border-border-accent bg-emerald-dark/60 px-4 py-3 text-ivory outline-none transition-colors focus:border-ivory/40 appearance-none"
            >
              <option value="" disabled>
                Выберите тип заведения
              </option>
              {venueTypes.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-ivory px-7 py-4 text-base font-semibold text-emerald-deep transition-colors hover:bg-ivory-hover cursor-pointer"
          >
            Получить расчёт бесплатно&ensp;&rarr;
          </button>

          <p className="mt-4 text-center text-xs text-text-tertiary leading-relaxed">
            Перезвоним в течение 30 минут в рабочее время.
            <br />
            Консультация бесплатна и ни к чему не обязывает.
          </p>
        </form>
      </div>
    </section>
  )
}
