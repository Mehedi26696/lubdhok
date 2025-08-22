import { NextRequest, NextResponse } from 'next/server'
import { searchKnowledgeBase, knowledgeBase } from '@/data/knowledgeBase'

export async function POST(req: NextRequest) {
  const { query, context } = await req.json()

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

  const apiKey = process.env.GEMINI_API_KEY
  const geminiRes = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + apiKey, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  })
  const geminiData = await geminiRes.json()
  const answer = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not find an answer.'

  return NextResponse.json({ answer, relevantItems })
}
