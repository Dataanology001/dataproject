import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Play, BookOpen, Users, Zap, ArrowRight } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            📚 Free Resources
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Free Goodies &
            </span>
            <br />
            <span className="text-gray-800">Learning Treasures! 💎</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            🎁 Everything you need to become a data superhero - completely FREE! Templates, guides, videos, and more
            awesome stuff! 🚀
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Templates & Tools */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Download className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Templates & Tools</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ready-to-use dashboard templates, Excel sheets, and tools that'll make your data work easier than
                  Sunday morning! ☕
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Dashboard templates</li>
                  <li>• Excel calculators</li>
                  <li>• Data audit checklists</li>
                  <li>• KPI tracking sheets</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full">
                  🎯 Browse Templates
                </Button>
              </CardContent>
            </Card>

            {/* Video Tutorials */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Play className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🎬 Video Tutorials</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Learn by watching! Our video library is more entertaining than Netflix and way more useful for your
                  career! 📺
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Getting started guides</li>
                  <li>• Advanced techniques</li>
                  <li>• Live Q&A sessions</li>
                  <li>• Customer success stories</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-bold rounded-full">
                  🎬 Watch Now
                </Button>
              </CardContent>
            </Card>

            {/* Guides & eBooks */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📖 Guides & eBooks</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Deep-dive guides that'll turn you from data zero to data hero! Written by experts who actually know
                  what they're talking about! 🧠
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Complete beginner guides</li>
                  <li>• Advanced strategy eBooks</li>
                  <li>• Industry best practices</li>
                  <li>• Case study collections</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold rounded-full">
                  📚 Download Guides
                </Button>
              </CardContent>
            </Card>

            {/* Webinars */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🎤 Live Webinars</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join our live sessions where you can ask questions, get real-time answers, and network with fellow
                  data enthusiasts! 🤝
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Weekly live sessions</li>
                  <li>• Expert guest speakers</li>
                  <li>• Interactive Q&A</li>
                  <li>• Networking opportunities</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold rounded-full">
                  🎤 Join Webinar
                </Button>
              </CardContent>
            </Card>

            {/* Quick Start Kit */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">⚡ Quick Start Kit</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Everything you need to get started in one convenient package! It's like a data survival kit for
                  beginners! 🎒
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Setup checklist</li>
                  <li>• Sample datasets</li>
                  <li>• Video walkthrough</li>
                  <li>• Email course series</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full">
                  ⚡ Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">👥 Community Hub</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join thousands of data enthusiasts sharing tips, tricks, and probably way too many data memes! 😄
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Discussion forums</li>
                  <li>• Peer support</li>
                  <li>• Monthly challenges</li>
                  <li>• Success celebrations</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full">
                  👥 Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              🔥 Most Popular{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Downloads
              </span>
            </h2>
            <p className="text-xl text-gray-600">The resources everyone's talking about! 🗣️</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 shadow-lg">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">📊 Ultimate Dashboard Template Pack</h3>
                    <p className="text-gray-600 mb-4">
                      50+ professional dashboard templates that'll make your data look like it belongs in a magazine! ✨
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Downloaded 15,000+ times</span>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full px-6 py-2">
                        Download Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-pink-50 to-orange-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl p-3 shadow-lg">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">📖 Data Analytics for Beginners Guide</h3>
                    <p className="text-gray-600 mb-4">
                      A 100-page guide that turns data newbies into analytics ninjas! Written in plain English, no PhD
                      required! 🥷
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Downloaded 25,000+ times</span>
                      <Button className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-bold rounded-full px-6 py-2">
                        Download Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
