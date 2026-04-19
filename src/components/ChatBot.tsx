'use client'

import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { KeyRound, MessageCircle, RefreshCw, Send, X } from 'lucide-react'

interface Message {
  sender: 'user' | 'bot'
  text: string
}

const renderTextWithLinks = (text: string) => {
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const processedText = text.replace(markdownLinkRegex, (_match, linkText, url) => {
    return `__MARKDOWN_LINK__${linkText}__SEPARATOR__${url}__END__`
  })

  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = processedText.split(/(https?:\/\/[^\s]+|__MARKDOWN_LINK__.*?__END__)/)

  return parts.map((part, index) => {
    if (part.startsWith('__MARKDOWN_LINK__')) {
      const [, linkText, url] = part.match(/__MARKDOWN_LINK__(.*?)__SEPARATOR__(.*?)__END__/) || []
      if (linkText && url) {
        return (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: 'var(--accent)' }}>
            {linkText}
          </a>
        )
      }
    } else if (urlRegex.test(part)) {
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="break-all font-bold underline" style={{ color: 'var(--accent)' }}>
          {part}
        </a>
      )
    }
    return part
  })
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)
  const [lastQuery, setLastQuery] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const submitQuery = async (queryToSend: string, appendUserMessage = true) => {
    if (!queryToSend.trim()) return
    if (!apiKey.trim()) {
      setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Please enter your Gemini API key first.' }])
      return
    }

    if (appendUserMessage) {
      setMessages((msgs) => [...msgs, { sender: 'user', text: queryToSend }])
      setInput('')
    }

    setLastQuery(queryToSend)
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: queryToSend, context: [], apiKey }),
      })
      const data = await res.json()

      if (res.status === 429) {
        setMessages((msgs) => [...msgs, { sender: 'bot', text: `${data.answer}\n\nYou can try again in a few seconds.` }])
      } else {
        setMessages((msgs) => [...msgs, { sender: 'bot', text: data.answer }])
      }
    } catch {
      setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Sorry, something went wrong. Please check your API key and internet connection.' }])
    }
    setLoading(false)
  }

  const sendMessage = (event: FormEvent) => {
    event.preventDefault()
    void submitQuery(input)
  }

  const retryLastQuery = () => {
    if (lastQuery) {
      void submitQuery(lastQuery, false)
    }
  }

  if (!open) {
    return (
      <button className="icon-button fixed bottom-6 right-6 z-50 h-14 w-14 shadow-[var(--shadow)]" aria-label="Open chatbot" onClick={() => setOpen(true)}>
        <MessageCircle className="h-6 w-6" />
      </button>
    )
  }

  return (
    <div className="raw-panel fixed bottom-6 right-6 z-50 flex max-h-[min(620px,calc(100vh-3rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <div className="flex min-w-0 items-center gap-3">
          <MessageCircle className="h-5 w-5 shrink-0" style={{ color: 'var(--accent)' }} />
          <span className="truncate font-black" style={{ color: 'var(--foreground)' }}>Lubdhok Assistant</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="icon-button h-8 w-8" onClick={() => setShowApiKeyInput((value) => !value)} aria-label="Set API key">
            <KeyRound className="h-4 w-4" />
          </button>
          <button className="icon-button h-8 w-8" aria-label="Close chatbot" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {showApiKeyInput && (
        <div className="border-b px-4 py-3" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
          <label className="mono-label mb-2 block">Gemini API Key</label>
          <input
            type="password"
            className="form-field text-sm"
            value={apiKey}
            onChange={(event) => setApiKey(event.target.value)}
            placeholder="Enter your Gemini API key"
          />
          <p className="mt-2 text-xs" style={{ color: 'var(--muted)' }}>
            Get a key from{' '}
            <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: 'var(--accent)' }}>
              Google AI Studio
            </a>
            .
          </p>
        </div>
      )}

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4" style={{ background: 'var(--surface)' }}>
        {messages.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Ask about Lubdhok events, projects, notes, and batch resources.
            </p>
            {!apiKey && <p className="mt-3 text-sm font-bold" style={{ color: 'var(--accent)' }}>Set your Gemini API key to begin.</p>}
          </div>
        )}

        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="max-w-[85%] rounded-md border px-3 py-2 text-sm leading-relaxed"
              style={{
                borderColor: message.sender === 'user' ? 'var(--accent)' : 'var(--line)',
                background: message.sender === 'user' ? 'var(--accent)' : 'var(--surface-muted)',
                color: message.sender === 'user' ? 'var(--accent-contrast)' : 'var(--foreground)',
              }}
            >
              {renderTextWithLinks(message.text)}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="rounded-md border px-3 py-2 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', color: 'var(--muted)' }}>
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <form onSubmit={sendMessage} className="relative">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type your message..."
            className="form-field pr-12 text-sm"
            disabled={loading}
          />
          <button type="submit" className="icon-button absolute right-1.5 top-1/2 h-9 w-9 -translate-y-1/2" disabled={loading || !input.trim()} aria-label="Send message">
            <Send className="h-4 w-4" />
          </button>
        </form>
        {messages.some((message) => message.text.includes('Sorry, something went wrong')) && (
          <button onClick={retryLastQuery} className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm font-bold" style={{ color: 'var(--accent)' }}>
            <RefreshCw className="h-4 w-4" />
            Retry last query
          </button>
        )}
      </div>
    </div>
  )
}
