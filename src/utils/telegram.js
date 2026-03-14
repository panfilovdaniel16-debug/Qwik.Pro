const BOT_TOKEN = '8639535241:AAGJlFLtv4F3F-q2OV2iYsgB-o2go2OL204'
const CHAT_ID = '684311692'

export async function sendToTelegram(message) {
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })
    const data = await res.json()
    return { ok: data.ok }
  } catch {
    return { ok: false }
  }
}
