import { Brain, Globe, Search, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <Brain className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Supermind
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Your AI-powered personal knowledge management system. Capture web content in any language and search it in your own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Multi-Language Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Capture content in any language and access it seamlessly. Our AI automatically translates and indexes everything for you.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Smart Search
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Find what you need with powerful semantic search. Search in your language, find content in any language.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Instant Capture
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Save articles, images, and highlights with one click using our browser extension. Your knowledge, instantly organized.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Install Browser Extension
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Add our extension to your browser and start capturing content from any website.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Capture and Save
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Highlight text, save articles, or capture images. Everything is automatically translated and indexed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Search and Discover
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Use natural language to find exactly what you need, in any language you prefer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
