import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    // Log the API key presence (not the actual key)
    console.log('API Key present:', !!process.env.OPENROUTER_API_KEY);
    
    const requestBody = {
      model: 'google/gemini-pro',
      messages: [
        {
          role: 'system',
          content: 'You are an expert dating and relationship advisor. Your role is to provide helpful, respectful, and practical advice to users seeking guidance in their dating life. Keep your responses concise, actionable, and empathetic. Focus on providing specific, practical tips that users can implement immediately. Always maintain a positive and encouraging tone. Respond in the same language as the user\'s message.'
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    };

    // Log request configuration
    console.log('Request Configuration:', {
      url: 'https://api.openrouter.ai/api/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://www.lovechatai.org',
        'X-Title': 'AI Dating Chat Assistant'
      },
      body: requestBody
    });

    const response = await fetch('https://api.openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://www.lovechatai.org',
        'X-Title': 'AI Dating Chat Assistant',
        'OR-SITE-URL': 'https://www.lovechatai.org'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
        headers: Object.fromEntries(response.headers.entries())
      });
      
      throw new Error(`API request failed with status ${response.status}: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    console.log('API Response:', data);

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected API response format:', data);
      throw new Error('Invalid response format from API');
    }

    const answer = data.choices[0].message.content;
    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Full error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again later.' },
      { status: 500 }
    );
  }
} 