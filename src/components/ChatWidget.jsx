import { useEffect } from 'react'

export default function ChatWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://twin24.ai/app/chat-client/widget.js'
    script.charset = 'utf-8'
    script.async = true

    script.onload = () => {
      if (typeof window.appChatClient === 'function') {
        window.appChatClient(
          {
            chatId: 'db543262-dca1-448b-b34f-f016ec3072c0',
          },
          {
            host: document.getElementById('chat-client'),
            injectStyles: `
              [data-id=chat-host] {
                bottom: 8px;
                left: 8px;
                right: auto;
                align-items: start;
              }
            `,
          }
        )
      }
    }

    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return <div id="chat-client" style={{ zIndex: 1000000 }} />
}
