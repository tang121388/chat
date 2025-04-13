import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    // OpenRouter API endpoint for DeepSeek model
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'HTTP-Referer': 'https://www.lovechatai.org',
        'X-Title': 'AI Dating Chat Assistant',
        'OpenAI-Organization': 'lovechatai'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-v3-base:free',
        max_tokens: 1000,
        temperature: 0.7,
        top_p: 0.9,
        stream: false,
        messages: [
          {
            role: 'system',
            content: 'You are an expert dating and relationship advisor. Your role is to provide helpful, respectful, and practical advice to users seeking guidance in their dating life. Keep your responses concise, actionable, and empathetic. Focus on providing specific, practical tips that users can implement immediately. Always maintain a positive and encouraging tone.'
          },
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      
      // 添加更详细的错误日志
      console.log('Request details:', {
        model: 'deepseek/deepseek-v3-base:free',
        message: message,
        headers: response.headers,
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
    console.error('Error details:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again later.' },
      { status: 500 }
    );
  }
} 