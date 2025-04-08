'use client';

import { ChatBubbleLeftIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import SEO from './components/SEO';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      });
      
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error:', error);
      setAnswer('Sorry, something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <SEO
        title="AI Dating Chat Assistant - Expert Dating Advice for Shy Guys"
        description="Get personalized dating advice, conversation tips, and relationship guidance from our AI assistant. Perfect for shy guys looking to improve their dating life and build confidence."
        keywords={[
          'dating advice',
          'AI chat',
          'relationship tips',
          'dating assistant',
          'conversation tips',
          'dating help',
          'shy guys dating',
          'dating confidence',
          'first date tips',
          'dating conversation starters'
        ]}
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20" aria-labelledby="hero-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="hero-heading" className="sr-only">AI Dating Assistant Chat Interface</h2>
              <div className="bg-white rounded-lg p-4 max-w-2xl mx-auto">
                <div className="flex gap-2">
                  <label className="sr-only" htmlFor="question-input">
                    Ask your dating question
                  </label>
                  <input
                    id="question-input"
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask your dating question..."
                    className="flex-1 px-4 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-primary border border-gray-200"
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={loading ? 'Generating response...' : 'Generate response'}
                  >
                    <SparklesIcon className="w-5 h-5" aria-hidden="true" />
                    {loading ? 'Generating...' : 'Generate'}
                  </button>
                </div>
                {answer && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg text-left" role="region" aria-label="AI Response">
                    <p className="text-gray-700 whitespace-pre-wrap">{answer}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <h2 id="features-heading" className="text-3xl font-bold text-center mb-12">Why Choose Our AI Dating Assistant?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="text-center p-6">
                <ChatBubbleLeftIcon className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">Smart Conversation Tips</h3>
                <p className="text-gray-600">
                  Get personalized advice on how to start and maintain engaging conversations with potential partners.
                </p>
              </article>
              <article className="text-center p-6">
                <SparklesIcon className="w-12 h-12 text-secondary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">
                  Leverage advanced AI technology to receive context-aware dating advice and conversation starters.
                </p>
              </article>
              <article className="text-center p-6">
                <UserGroupIcon className="w-12 h-12 text-accent mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-gray-600">
                  Join a community of like-minded individuals and share experiences while learning from others.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Sample Questions Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="questions-heading">
          <div className="container mx-auto px-4">
            <h2 id="questions-heading" className="text-3xl font-bold text-center mb-12">Popular Dating Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">First Date Tips</h3>
                <p className="text-gray-600">
                  How to plan and execute a successful first date that leads to a second date.
                </p>
              </article>
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Conversation Starters</h3>
                <p className="text-gray-600">
                  Engaging ways to start meaningful conversations and keep them flowing naturally.
                </p>
              </article>
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Building Confidence</h3>
                <p className="text-gray-600">
                  Tips and techniques to build self-confidence and overcome social anxiety.
                </p>
              </article>
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Reading Signals</h3>
                <p className="text-gray-600">
                  Understanding body language and social cues to better navigate dating situations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl font-bold mb-6">Ready to Improve Your Dating Life?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our AI dating assistant and receive personalized advice for your dating journey.
            </p>
            <button 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              aria-label="Start using AI Dating Assistant"
            >
              Start Now
            </button>
          </div>
        </section>
      </SEO>
    </main>
  );
} 