import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Network, Lightbulb, Globe, Users, Award, CheckCircle, Code, BarChart3, Search } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-lime-50/20 to-teal-50/20">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse organic-shape-1"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000 organic-shape-2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-lime-500/20 to-teal-500/20 backdrop-blur-sm border border-lime-400/30 text-lime-700 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Network className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            Our Digital Ecosystem Story
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-lime-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
              We're Your Complete
            </span>
            <br />
            <span className="text-gray-800">Digital Partner! 🌟</span>
          </h1>

          <p className="text-base md:text-lg lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            🚀 We're not just another agency - we're your complete digital ecosystem partners covering Website
            Development, Data Analytics, and Research! 🌿
          </p>
        </div>
      </section>

      {/* Our Expertise Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-50/30 to-teal-50/30"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4">
              🎯 Our Three Pillars of{" "}
              <span className="bg-gradient-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Complete digital solutions organized by our core expertise areas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Website Development */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-lime-50 to-green-50 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-r from-lime-500 to-green-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Code className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">🌐 Website Development</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                  From stunning designs to powerful functionality - we build digital experiences that grow with your
                  business!
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-4 md:mb-6 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Responsive Web Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Mobile Applications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    CMS Development
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Analytics */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-teal-50 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">📊 Data Analytics</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                  Transform raw data into actionable insights that drive smart business decisions and growth!
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-4 md:mb-6 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Business Intelligence
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Data Visualization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time Dashboards
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Research */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-teal-50 to-cyan-50 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Search className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">🔬 Research</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                  Deep market insights and competitive analysis that guide strategic decisions and uncover
                  opportunities!
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-4 md:mb-6 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Market Research
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Competitive Analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    User Research
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Trend Analysis
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-6">
                🌱 Our Journey: From Idea to Digital Ecosystem
              </h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  📅 <strong>2020:</strong> Three passionate developers were sitting in a garage (yes, the classic
                  story! ☕), frustrated with fragmented digital services and thinking:
                  <em>"Why can't one team handle websites, data, AND research?"</em>
                </p>
                <p>
                  💡 <strong>The Breakthrough Moment:</strong> What if we could be the complete digital partner
                  businesses need? What if one team could handle beautiful websites, powerful analytics, AND deep
                  research? What if Monday meetings could actually be... productive? 🌳
                </p>
                <p>
                  🚀 <strong>Today:</strong> We've helped over 750+ companies transform their entire digital presence!
                  From tiny startups to Fortune 500 giants, everyone's getting complete digital solutions from one
                  trusted partner! 🌿💨
                </p>
                <p>
                  🎯 <strong>Our Mission:</strong> To be your complete digital ecosystem partner! Because when your
                  website, data, and research work together, your business grows exponentially! 🌍
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-lime-500 via-green-500 to-teal-500 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-6 md:p-8 text-center">
                  <Globe className="h-16 md:h-24 w-16 md:w-24 mx-auto mb-4 text-lime-600" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">🌍 Complete Digital Solutions</h3>
                  <p className="text-gray-600 mb-4">One team, three expertise areas, infinite possibilities!</p>
                  <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                    <div className="bg-lime-50 rounded-xl p-2 md:p-3">
                      <div className="text-lg md:text-2xl font-bold text-lime-600">500+</div>
                      <div className="text-xs md:text-sm text-gray-600">Websites Built</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-2 md:p-3">
                      <div className="text-lg md:text-2xl font-bold text-green-600">1B+</div>
                      <div className="text-xs md:text-sm text-gray-600">Data Points</div>
                    </div>
                    <div className="bg-teal-50 rounded-xl p-2 md:p-3">
                      <div className="text-lg md:text-2xl font-bold text-teal-600">200+</div>
                      <div className="text-xs md:text-sm text-gray-600">Research Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4">
              🎯 What Makes Our{" "}
              <span className="bg-gradient-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">Approach</span>{" "}
              Special?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              🌟 These aren't just values - they're the principles that drive our complete digital solutions!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-lime-50 to-green-50 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-r from-lime-500 to-green-500 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">💚 Complete Solutions</h3>
                <p className="text-sm md:text-base text-gray-600">
                  We don't just build websites - we create complete digital ecosystems!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-teal-50 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">💡 Data-Driven Innovation</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Every decision backed by research, every solution powered by data!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-teal-50 to-cyan-50 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">🏆 Excellence Across All Areas</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Whether it's code, charts, or research - we aim for perfection!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-cyan-50 to-blue-50 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Network className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">🤝 Integrated Approach</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Your website, data, and research work together seamlessly!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lime-600 via-green-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl organic-shape-1"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl organic-shape-2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">🌱 Meet Our Complete Digital Team! 🌟</h2>
            <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto">
              The amazing humans behind your complete digital transformation! We're not just colleagues, we're a
              comprehensive digital family! 👨‍👩‍👧‍👦
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-0 shadow-2xl text-center bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-6 md:p-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-lime-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl md:text-3xl font-bold">🌐</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Alex "The Builder" Chen</h3>
                <p className="text-lime-300 mb-3 font-medium">CEO & Chief Digital Architect</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Former Google wizard who decided businesses need complete digital solutions! ✨ Coffee addict, code
                  lover, and firm believer that every website should tell a complete story! 🌐
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl text-center bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-6 md:p-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl md:text-3xl font-bold">📊</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Sarah "Data Queen" Rodriguez</h3>
                <p className="text-lime-300 mb-3 font-medium">CTO & Data Analytics Lead</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  She makes data dance and sing beautiful stories! 📈 MIT graduate who thinks boring charts are a
                  personal insult. Yoga enthusiast & analytics ninja! 🧘‍♀️
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl text-center bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-6 md:p-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl md:text-3xl font-bold">🔬</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Mike "The Detective" Johnson</h3>
                <p className="text-lime-300 mb-3 font-medium">Head of Research & Strategy</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Turns market mysteries into actionable insights! 🔍 Research perfectionist who believes every question
                  has a data-driven answer. Mystery novel lover & weekend market analyst! 📚
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
