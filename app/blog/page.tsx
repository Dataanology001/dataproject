import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "🚀 5 Ways Data Analytics Can Transform Your Business Overnight",
      excerpt:
        "Discover the secret sauce that turns boring numbers into business gold! These proven strategies will make your competitors wonder what magic you're using...",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      category: "Analytics",
      readTime: "5 min read",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "🤖 AI vs Human: Who Wins the Data Analysis Battle?",
      excerpt:
        "Spoiler alert: It's not what you think! Learn how AI and humans can team up to create data insights that would make Einstein jealous...",
      author: "Mike Rodriguez",
      date: "Dec 12, 2024",
      category: "AI & Machine Learning",
      readTime: "7 min read",
      gradient: "from-pink-500 to-orange-500",
    },
    {
      id: 3,
      title: "📊 Dashboard Design: Making Data Beautiful (And Actually Useful!)",
      excerpt:
        "Stop creating dashboards that look like they were designed in 1995! Here's how to make data visualizations that people actually want to look at...",
      author: "Lisa Wang",
      date: "Dec 10, 2024",
      category: "Design",
      readTime: "6 min read",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      id: 4,
      title: "🔐 Data Security: Protecting Your Digital Gold",
      excerpt:
        "Your data is more valuable than gold, diamonds, and your grandmother's secret cookie recipe combined! Here's how to keep it safe from digital pirates...",
      author: "Alex Johnson",
      date: "Dec 8, 2024",
      category: "Security",
      readTime: "8 min read",
      gradient: "from-green-500 to-blue-500",
    },
    {
      id: 5,
      title: "🎯 Real-Time Analytics: The Need for Speed",
      excerpt:
        "In the world of data, slow is the new dead! Learn how real-time analytics can give you superpowers and make your business faster than a cheetah on espresso...",
      author: "Emma Davis",
      date: "Dec 5, 2024",
      category: "Real-Time",
      readTime: "4 min read",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      id: 6,
      title: "🌟 Customer Success Story: From Data Chaos to $1M Revenue",
      excerpt:
        "Meet TechStart Inc. - they went from drowning in spreadsheets to swimming in profits! Here's their incredible transformation story...",
      author: "David Kim",
      date: "Dec 3, 2024",
      category: "Case Study",
      readTime: "10 min read",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

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
            📚 Knowledge Hub
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Data Insights &
            </span>
            <br />
            <span className="text-gray-800">Brain Food! 🧠</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            🚀 Fresh insights, hot tips, and data wisdom served daily! Get smarter about data while having fun - it's
            like Netflix for data nerds! 📺
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-gray-800 mb-4">🔥 Featured Article</h2>
          </div>

          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-12 text-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold">Featured Story</h3>
                    <p className="opacity-90">Must-read content!</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Analytics
                    </span>
                    <span className="text-gray-500 text-sm">Dec 15, 2024 • 5 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    🚀 5 Ways Data Analytics Can Transform Your Business Overnight
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover the secret sauce that turns boring numbers into business gold! These proven strategies will
                    make your competitors wonder what magic you're using. From predictive analytics to real-time
                    dashboards...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">SC</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Sarah Chen</div>
                        <div className="text-sm text-gray-600">Data Scientist</div>
                      </div>
                    </div>
                    <Link
                      href="/blog/1"
                      className="text-purple-600 hover:text-purple-700 font-medium flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-gray-800 mb-4">📚 Latest Articles</h2>
            <p className="text-gray-600">Fresh content to feed your data-hungry brain! 🧠</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${post.gradient} h-48 flex items-center justify-center`}>
                    <div className="text-white text-6xl">
                      {post.category === "AI & Machine Learning" && "🤖"}
                      {post.category === "Design" && "🎨"}
                      {post.category === "Security" && "🔐"}
                      {post.category === "Real-Time" && "⚡"}
                      {post.category === "Case Study" && "🌟"}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span
                        className={`bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent font-medium text-sm`}
                      >
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                        <Calendar className="h-4 w-4 ml-3 mr-1" />
                        {post.date}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center"
                      >
                        Read <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">📧 Never Miss the Good Stuff!</h2>
          <p className="text-xl text-white/90 mb-8">
            Get weekly doses of data wisdom delivered straight to your inbox! No spam, just pure data gold! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@awesome.com"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all">
              🚀 Subscribe
            </button>
          </div>
          <p className="text-white/70 mt-4 text-sm">Join 10,000+ data enthusiasts! Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
