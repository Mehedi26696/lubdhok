"use client"
import React, { useState, useRef, useEffect } from "react"

interface Message {
  sender: "user" | "bot"
  text: string
}

// Function to convert URLs and markdown links in text to clickable links
const renderTextWithLinks = (text: string) => {
  // First handle markdown-style links [text](url)
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const processedText = text.replace(markdownLinkRegex, (match, linkText, url) => {
    return `__MARKDOWN_LINK__${linkText}__SEPARATOR__${url}__END__`
  })
  
  // Then handle plain URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = processedText.split(/(https?:\/\/[^\s]+|__MARKDOWN_LINK__.*?__END__)/)
  
  return parts.map((part, index) => {
    if (part.startsWith('__MARKDOWN_LINK__')) {
      const [, linkText, url] = part.match(/__MARKDOWN_LINK__(.*?)__SEPARATOR__(.*?)__END__/) || []
      if (linkText && url) {
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {linkText}
          </a>
        )
      }
    } else if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline break-all"
        >
          {part}
        </a>
      )
    }
    return part
  })
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [apiKey, setApiKey] = useState("")
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)
  const [lastQuery, setLastQuery] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  const sendMessage = async (e: React.FormEvent, retryQuery?: string) => {
    e.preventDefault()
    const queryToSend = retryQuery || input
    if (!queryToSend.trim()) return
    if (!apiKey.trim()) {
      setMessages(msgs => [...msgs, { sender: "bot", text: "Please enter your Gemini API key first." }])
      return
    }
    
    if (!retryQuery) {
      const userMsg = { sender: "user" as const, text: queryToSend }
      setMessages(msgs => [...msgs, userMsg])
      setInput("")
    }
    
    setLastQuery(queryToSend)
    setLoading(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: queryToSend, context: [], apiKey })
      })
      const data = await res.json()
      
      if (res.status === 429) {
        setMessages(msgs => [...msgs, { 
          sender: "bot", 
          text: data.answer + "\n\n⏳ You can try again in a few seconds." 
        }])
      } else {
        setMessages(msgs => [...msgs, { sender: "bot", text: data.answer }])
      }
    } catch {
      setMessages(msgs => [...msgs, { sender: "bot", text: "Sorry, something went wrong. Please check your API key and internet connection." }])
    }
    setLoading(false)
  }

  const retryLastQuery = (e: React.FormEvent) => {
    if (lastQuery) {
      sendMessage(e, lastQuery)
    }
  }

  // Floating button style
  const buttonStyle =
    "fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl transition-all duration-200 border-4 border-white"

  // Chat window style
  const chatStyle =
    "fixed bottom-6 right-6 z-50 w-80 max-w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl border border-blue-200 flex flex-col animate-fade-in backdrop-blur-lg"

  return (
    <>
      {/* Floating open button */}
      {!open && (
        <button
          className={buttonStyle}
          aria-label="Open chatbot"
          onClick={() => setOpen(true)}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 20v-2m0-4v-4m0-4V4m8 8h-2m-4 0H4"/></svg>
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className={chatStyle} style={{ minHeight: 420 }}>
          {/* Header with close button */}
          <div className="flex items-center justify-between px-4 py-2 border-b bg-blue-600 rounded-t-2xl shadow-sm">
            <span className="text-white font-bold text-lg">Ask Lubdhok Bot</span>
            <div className="flex items-center gap-2">
              <button
                className="text-white hover:text-blue-200 text-sm px-2 py-1 rounded border border-blue-400"
                onClick={() => setShowApiKeyInput(!showApiKeyInput)}
              >
                🔑 API Key
              </button>
              <button
                className="text-white hover:text-blue-200 text-xl font-bold px-2 py-1 rounded"
                aria-label="Close chatbot"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>
          </div>
          
          {/* API Key Input Section */}
          {showApiKeyInput && (
            <div className="px-4 py-3 bg-blue-50 border-b border-blue-200">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gemini API Key:
              </label>
              <input
                type="password"
                className="w-full text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key..."
              />
              <p className="text-xs text-gray-600 mt-1">
                Get your API key from{" "}
                <a 
                  href="https://makersuite.google.com/app/apikey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google AI Studio
                </a>
                <br />
                <span className="text-orange-600">⚠️ Free tier has rate limits</span>
              </p>
            </div>
          )}
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-2 p-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50" style={{ maxHeight: showApiKeyInput ? 220 : 320 }}>
            {messages.length === 0 && (
              <div className="text-gray-400 text-center mt-8">
                <div className="mb-2">Ask me anything about Lubdhok batch events, projects, notes, and more!</div>
                {!apiKey && (
                  <div className="text-sm text-orange-600">
                    💡 Please set your Gemini API key first
                  </div>
                )}
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex flex-col max-w-[80%] ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                  <span className={`text-xs font-semibold mb-1 ${msg.sender === "user" ? "text-blue-600" : "text-green-600"}`}>
                    {msg.sender === "user" ? "You" : "Bot"}
                  </span>
                  <div className={`px-4 py-2 rounded-lg text-sm whitespace-pre-line ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-green-100 text-gray-800 border border-green-300"}`}>
                    {msg.sender === "bot" ? renderTextWithLinks(msg.text) : msg.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <div className="px-4 pb-4">
            {lastQuery && (
              <div className="mb-2">
                <button
                  onClick={retryLastQuery}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded border flex items-center gap-1"
                  disabled={loading}
                >
                  🔄 Retry last question
                </button>
              </div>
            )}
            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about events, projects, notes..."
                disabled={loading}
                autoFocus
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l14-5-5 14-2.5-6.5L5 12z" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
