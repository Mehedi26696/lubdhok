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
    "fixed bottom-6 right-6 z-50 bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 text-white rounded-full shadow-2xl shadow-slate-900/40 w-16 h-16 flex items-center justify-center text-3xl transition-all duration-300 border-2 border-slate-700 hover:border-orange-500/50 ring-4 ring-slate-900/20 hover:scale-105"

  // Chat window style
  const chatStyle =
    "fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100%-3rem)] bg-slate-900/80 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-800 flex flex-col animate-fade-in"

  return (
    <>
      {/* Floating open button */}
      {!open && (
        <button
          className={buttonStyle}
          aria-label="Open chatbot"
          onClick={() => setOpen(true)}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L12 15 6.75 9.75" />
            <path stroke="currentColor" strokeWidth="2" d="M12 15V4" />
            <path stroke="currentColor" strokeWidth="2" d="M19.5 15v4.5a1.5 1.5 0 01-1.5 1.5h-12a1.5 1.5 0 01-1.5-1.5V15" />
          </svg>
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className={chatStyle} style={{ height: 'clamp(400px, 70vh, 600px)' }}>
          {/* Header with close button */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/50 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-base">Lubdhok AI Assistant</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded-md border border-slate-700 hover:border-orange-500/50 transition-colors"
                onClick={() => setShowApiKeyInput(!showApiKeyInput)}
              >
                🔑
              </button>
              <button
                className="text-slate-400 hover:text-white text-xl font-bold"
                aria-label="Close chatbot"
                onClick={() => setOpen(false)}
              >
                &times;
              </button>
            </div>
          </div>
          
          {/* API Key Input Section */}
          {showApiKeyInput && (
            <div className="px-4 py-3 bg-slate-950/50 border-b border-slate-800">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Gemini API Key:
              </label>
              <input
                type="password"
                className="w-full text-sm bg-slate-800 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-white placeholder:text-slate-500"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key..."
              />
              <p className="text-xs text-slate-500 mt-2">
                Get your key from{" "}
                <a 
                  href="https://makersuite.google.com/app/apikey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline"
                >
                  Google AI Studio
                </a>
                .
              </p>
            </div>
          )}
          
          {/* Messages */}
          <div ref={messagesEndRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800/50">
            {messages.length === 0 && (
              <div className="text-slate-500 text-center mt-8 px-4">
                <div className="text-lg mb-2">Ask me anything about Lubdhok batch events, projects, notes, and more!</div>
                {!apiKey && (
                  <div className="text-sm text-orange-500/80">
                    💡 Please set your Gemini API key to begin.
                  </div>
                )}
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                    <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L12 15 6.75 9.75" /><path stroke="currentColor" strokeWidth="2" d="M12 15V4" /><path stroke="currentColor" strokeWidth="2" d="M19.5 15v4.5a1.5 1.5 0 01-1.5 1.5h-12a1.5 1.5 0 01-1.5-1.5V15" /></svg>
                  </div>
                )}
                <div className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                  msg.sender === "user" 
                    ? "bg-orange-600 text-white rounded-br-none" 
                    : "bg-slate-800 text-slate-300 rounded-bl-none border border-slate-700/50"
                }`}>
                  <div className="prose prose-sm prose-invert max-w-none">
                    {renderTextWithLinks(msg.text)}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-end gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L12 15 6.75 9.75" /><path stroke="currentColor" strokeWidth="2" d="M12 15V4" /><path stroke="currentColor" strokeWidth="2" d="M19.5 15v4.5a1.5 1.5 0 01-1.5 1.5h-12a1.5 1.5 0 01-1.5-1.5V15" /></svg>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-slate-800 text-slate-300 rounded-bl-none border border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input form */}
          <div className="p-4 border-t border-slate-800 bg-slate-900/50 rounded-b-2xl">
            <form onSubmit={sendMessage} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-4 pr-12 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-orange-600 hover:bg-orange-700 disabled:bg-slate-600 text-white transition-colors"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7" /><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>
              </button>
            </form>
            {messages.some(m => m.text.includes('Sorry, something went wrong')) && (
              <button 
                onClick={retryLastQuery} 
                className="text-xs text-orange-400 hover:underline mt-2 w-full text-center"
              >
                Retry last query
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
