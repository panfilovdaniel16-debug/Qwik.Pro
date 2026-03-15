import { useState, useEffect } from 'react'
import { sendToTelegram } from '../utils/telegram'
import { reachGoal } from '../utils/metrika'

export default function ConsultPopup() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const timer = setTimeout(() => setVisible(true), 70000) // 70 seconds
    return () => clearTimeout(timer)
  }, [dismissed])

  // Also trigger on scroll to ~40% of page
  useEffect(() => {
    if (dismissed) return
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      if (scrollPercent > 0.35) {
        setVisible(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  useEffect(() => {
    if (visible && !dismissed) {
      reachGoal('popup_consult')
    }
  }, [visible, dismissed])

  const close = () => {
    setVisible(false)
    setDismissed(true)
  }

  if (!visible || dismissed) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={close}>
      <div
        className="bg-emerald-deep border border-border-accent rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={close} className="absolute top-4 right-4 text-text-tertiary hover:text-ivory cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
        </button>

        <div className="text-center mb-6">
          <div className="mx-auto w-14 h-14 rounded-full bg-ivory/10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-ivory">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-semibold text-ivory">
            Подберём систему под&nbsp;ваше заведение
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            Бесплатная консультация за 5 минут. Расскажем про аренду от&nbsp;190&nbsp;&#8381;/мес и тест-драйв.
          </p>
        </div>

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (___) ___-__-__"
          className="w-full rounded-lg border border-border-accent bg-emerald-dark/60 px-4 py-3.5 text-ivory placeholder-text-tertiary outline-none transition-colors focus:border-ivory/40 text-sm"
        />

        <button
          onClick={async () => {
            setLoading(true)
            const msg = `☎️ <b>Запрос консультации</b>\n\n📱 Телефон: ${phone}`
            const { ok } = await sendToTelegram(msg)
            setLoading(false)
            if (ok) {
              reachGoal('form_consult')
              close()
              alert('Спасибо! Перезвоним за 5 минут.')
            } else {
              alert('Не удалось отправить заявку. Позвоните нам: +7 (906) 496-88-02')
            }
          }}
          disabled={loading}
          className="mt-3 w-full rounded-lg bg-ivory px-5 py-3.5 text-sm font-bold text-emerald-deep transition-colors hover:bg-ivory-hover cursor-pointer disabled:opacity-60"
        >
          {loading ? 'Отправляем...' : 'Получить консультацию\u2002→'}
        </button>

        <p className="mt-3 text-center text-[11px] text-text-tertiary">
          Перезвоним в рабочее время. Без спама и обязательств.
        </p>
      </div>
    </div>
  )
}
