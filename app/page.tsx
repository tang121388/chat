import { ChatBubbleLeftIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Dating Chat Assistant
            </h1>
            <p className="text-xl mb-8">
              Get expert dating advice and conversation tips for shy guys
            </p>
            <div className="bg-white rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask your dating question..."
                  className="flex-1 px-4 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-primary border border-gray-200"
                />
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5" />
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Dating Assistant?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <ChatBubbleLeftIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Conversation Tips</h3>
              <p className="text-gray-600">
                Get personalized advice on how to start and maintain engaging conversations with potential partners.
              </p>
            </div>
            <div className="text-center p-6">
              <SparklesIcon className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Leverage advanced AI technology to receive context-aware dating advice and conversation starters.
              </p>
            </div>
            <div className="text-center p-6">
              <UserGroupIcon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join a community of like-minded individuals and share experiences while learning from others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Questions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Dating Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">First Date Tips</h3>
              <p className="text-gray-600">
                How to plan and execute a successful first date that leads to a second date.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Conversation Starters</h3>
              <p className="text-gray-600">
                Engaging ways to start meaningful conversations and keep them flowing naturally.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Building Confidence</h3>
              <p className="text-gray-600">
                Tips and techniques to build self-confidence and overcome social anxiety.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Reading Signals</h3>
              <p className="text-gray-600">
                Understanding body language and social cues to better navigate dating situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Dating Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our AI dating assistant and receive personalized advice for your dating journey.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Now
          </button>
        </div>
      </section>
    </main>
  );
} 