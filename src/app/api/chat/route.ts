import { NextRequest, NextResponse } from 'next/server'
import { searchKnowledgeBase, knowledgeBase } from '@/data/knowledgeBase'

export async function POST(req: NextRequest) {
  const { query, context, apiKey } = await req.json()

  // Validate API key
  if (!apiKey || typeof apiKey !== 'string' || !apiKey.trim()) {
    return NextResponse.json({ 
      answer: 'Please provide a valid Gemini API key.' 
    }, { status: 400 })
  }

  let relevantItems = searchKnowledgeBase(query)


  // Fallback: if no results and query is generic, provide all items from that category
  const categoryFallbacks = [
    { category: 'event', queries: ['event', 'events', 'show events', 'list events', 'tell me about events', 'all events'] },
    { category: 'project', queries: ['project', 'projects', 'show projects', 'list projects', 'tell me about projects', 'all projects'] },
    { category: 'achievement', queries: ['achievement', 'achievements', 'show achievements', 'list achievements', 'tell me about achievements', 'all achievements'] },
    { category: 'announcement', queries: ['announcement', 'announcements', 'show announcements', 'list announcements', 'tell me about announcements', 'all announcements'] },
    { category: 'studyMaterial', queries: ['study material', 'study materials', 'notes', 'slides', 'assignments', 'books', 'show study materials', 'list study materials', 'tell me about study materials', 'all study materials'] },
  ]
  const lowerQuery = query.toLowerCase();
  if (relevantItems.length === 0) {
    for (const fallback of categoryFallbacks) {
      if (fallback.queries.some(q => lowerQuery.includes(q))) {
        relevantItems = knowledgeBase.filter(item => item.category === fallback.category)
        break;
      }
    }
  }
  // If still empty, fallback to all knowledgeBase
  if (relevantItems.length === 0) {
    relevantItems = knowledgeBase
  }

  const contextString = relevantItems.map(item => JSON.stringify(item)).join('\n')

  const prompt = `
You are a helpful assistant for a university batch website. 
Answer the user's question using ONLY the following knowledge base (from announcements, achievements, events, projects, and study materials):

${contextString}

User question: ${query}
`

  try {
    const geminiRes = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + apiKey, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    })
    
    if (!geminiRes.ok) {
      let errorMessage = 'Sorry, there was an error with the API request.'
      
      switch (geminiRes.status) {
        case 400:
          errorMessage = 'Invalid API request. Please check your API key and try again.'
          break
        case 401:
          errorMessage = 'Invalid API key. Please check your Gemini API key.'
          break
        case 403:
          errorMessage = 'API access forbidden. Please check your API key permissions.'
          break
        case 429:
          errorMessage = 'Rate limit exceeded. Please wait a moment and try again.'
          break
        case 500:
          errorMessage = 'Gemini API server error. Please try again later.'
          break
        default:
          errorMessage = `API error (${geminiRes.status}). Please try again.`
      }
      
      return NextResponse.json({ 
        answer: errorMessage 
      }, { status: geminiRes.status })
    }
    
    const geminiData = await geminiRes.json()
    const answer = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not find an answer.'

    return NextResponse.json({ answer, relevantItems })
  } catch (error) {
    console.error('Gemini API error:', error)
    return NextResponse.json({ 
      answer: 'Sorry, there was an error connecting to the API. Please check your internet connection and try again.' 
    }, { status: 500 })
  }
}
