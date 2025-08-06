import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart3,
  Database,
  Brain,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  Network,
  Code,
  Search,
  Smartphone,
  Monitor,
  PieChart,
  LineChart,
  Target,
  Lightbulb,
  Globe,
  Users,
} from "lucide-react"

export default function ServicesPage() {
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
            <Network className="h-3 w-3 md:h-4 md:w-4 mr-2" />🎯 Our Complete Solutions
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-lime-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
              Solutions That'll
            </span>
            <br />
            <span className="text-gray-800">Transform Your Business! 🚀</span>
          </h1>

          <p className="text-base md:text-lg lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            🌱 We don't just offer solutions - we cultivate <strong>complete digital ecosystems</strong> that'll make
            your competitors wonder what organic magic you're using! ✨
          </p>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Website Development Category */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 bg-gradient-to-br from-lime-50 to-green-50 overflow-hidden group">
              <CardContent className="p-6 md:p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime-400/20 to-green-400/20 rounded-full blur-2xl"></div>
                <div className="relative text-center">
                  <div className="bg-gradient-to-r from-lime-500 to-green-500 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Code className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-3 md:mb-4">🌐 Website Development</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                    🎨 Complete web solutions from stunning designs to powerful functionality that grows with your
                    business ecosystem!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6 text-left">
                    <div className="bg-white/50 rounded-lg p-3 border border-lime-200">
                      <div className="flex items-center mb-2">
                        <Monitor className="h-4 w-4 text-lime-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">Responsive Design</span>
                      </div>
                      <p className="text-xs text-gray-600">Mobile-first, adaptive layouts</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-center mb-2">
                        <Globe className="h-4 w-4 text-green-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">E-commerce</span>
                      </div>
                      <p className="text-xs text-gray-600">Online stores & payment systems</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 border border-teal-200">
                      <div className="flex items-center mb-2">
                        <Database className="h-4 w-4 text-teal-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">CMS Development</span>
                      </div>
                      <p className="text-xs text-gray-600">Content management systems</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 border border-cyan-200">
                      <div className="flex items-center mb-2">
                        <Smartphone className="h-4 w-4 text-cyan-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">Mobile Apps</span>
                      </div>
                      <p className="text-xs text-gray-600">iOS & Android applications</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white font-bold rounded-full py-2 md:py-3 shadow-lg transform hover:scale-105 transition-all text-sm md:text-base">
                    🚀 Explore Web Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Data Analytics Category */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 bg-gradient-to-br from-green-50 to-teal-50 overflow-hidden group">
              <CardContent className="p-6 md:p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-2xl"></div>
                <div className="relative text-center">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <BarChart3 className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-3 md:mb-4">📊 Data Analytics</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                    🔍 Transform raw data into actionable insights with advanced analytics that reveal hidden patterns
                    and opportunities!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6 text-left">
                    <div className="bg-white/50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-center mb-2">
                        <PieChart className="h-4 w-4 text-green-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">Business Intelligence</span>
                      </div>
                      <p className="text-xs text-gray-600">Strategic insights & reporting</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 border border-teal-200">
                      <div className="flex items-center mb-2">
                        <LineChart className="h-4 w-4 text-teal-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">Data Visualization</span>
                      </div>
                      <p className="text-xs text-gray-600">Interactive charts & dashboards</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 border border-cyan-200">
                      <div className="flex items-center mb-2">
                        <Brain className="h-4 w-4 text-cyan-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">Predictive Analytics</span>
                      </div>
                      <p className="text-xs text-gray-600">Future trend forecasting</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 border border-blue-200">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">Real-time Dashboards</span>
                      </div>
                      <p className="text-xs text-gray-600">Live data monitoring</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold rounded-full py-2 md:py-3 shadow-lg transform hover:scale-105 transition-all text-sm md:text-base">
                    🎯 Explore Analytics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Research Category */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 bg-gradient-to-br from-teal-50 to-cyan-50 overflow-hidden group">
              <CardContent className="p-6 md:p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
                <div className="relative text-center">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Search className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-3 md:mb-4">🔬 Research</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                    🎯 Deep market research and competitive analysis that uncovers opportunities and guides strategic
                    decisions!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6 text-left">
                    <div className="bg-white/50 rounded-lg p-3 border border-teal-200">
                      <div className="flex items-center mb-2">
                        <Target className="h-4 w-4 text-teal-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">Market Research</span>
                      </div>
                      <p className="text-xs text-gray-600">Industry analysis & trends</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 border border-cyan-200">
                      <div className="flex items-center mb-2">
                        <Lightbulb className="h-4 w-4 text-cyan-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">Competitive Analysis</span>
                      </div>
                      <p className="text-xs text-gray-600">Competitor insights & positioning</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 border border-blue-200">
                      <div className="flex items-center mb-2">
                        <Users className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">User Research</span>
                      </div>
                      <p className="text-xs text-gray-600">Customer behavior studies</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 border border-purple-200">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="h-4 w-4 text-purple-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-sm">Trend Analysis</span>
                      </div>
                      <p className="text-xs text-gray-600">Future market predictions</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-full py-2 md:py-3 shadow-lg transform hover:scale-105 transition-all text-sm md:text-base">
                    🔍 Explore Research
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Complete{" "}
              <span className="bg-gradient-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in the digital ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Monitor, name: "Web Development", desc: "Custom websites & applications", color: "lime" },
              { icon: Smartphone, name: "Mobile Apps", desc: "iOS & Android development", color: "green" },
              { icon: Globe, name: "E-commerce", desc: "Online stores & marketplaces", color: "teal" },
              { icon: Database, name: "Database Design", desc: "Scalable data architecture", color: "cyan" },
              { icon: BarChart3, name: "Analytics", desc: "Business intelligence & BI", color: "blue" },
              { icon: PieChart, name: "Data Visualization", desc: "Interactive charts & graphs", color: "purple" },
              { icon: Brain, name: "AI & ML", desc: "Machine learning solutions", color: "pink" },
              { icon: Shield, name: "Security", desc: "Cybersecurity & protection", color: "red" },
              { icon: Search, name: "SEO & Marketing", desc: "Digital marketing strategies", color: "orange" },
              { icon: Target, name: "Strategy", desc: "Digital transformation", color: "yellow" },
              { icon: Users, name: "User Research", desc: "UX/UI design & testing", color: "emerald" },
              { icon: Zap, name: "Performance", desc: "Speed & optimization", color: "indigo" },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-white group"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <service.icon className={`h-8 w-8 md:h-10 md:w-10 text-${service.color}-600 mx-auto mb-3 md:mb-4`} />
                  <h4 className="text-sm md:text-base font-bold text-gray-800 mb-2">{service.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-lime-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                Proven Process
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              How we transform your ideas into digital reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your business goals and requirements",
                icon: Search,
                color: "lime",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Creating a comprehensive plan and roadmap",
                icon: Target,
                color: "green",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building your solution with cutting-edge technology",
                icon: Code,
                color: "teal",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Deploying and optimizing for maximum impact",
                icon: Zap,
                color: "cyan",
              },
            ].map((process, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white relative overflow-hidden group">
                <CardContent className="p-6 md:p-8 text-center relative z-10">
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${process.color}-400 to-${process.color}-600`}
                  ></div>
                  <div className="text-4xl md:text-6xl font-black text-gray-100 mb-4">{process.step}</div>
                  <div
                    className={`bg-gradient-to-r from-${process.color}-500 to-${process.color}-600 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg -mt-8 md:-mt-12`}
                  >
                    <process.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{process.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lime-600 via-green-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl organic-shape-1"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl organic-shape-2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-6">
            🌱 Ready to Transform Your Digital Ecosystem? 🚀
          </h2>
          <p className="text-base md:text-lg lg:text-2xl mb-6 md:mb-8 leading-relaxed">
            🚀 Don't let your business stay in the digital stone age! Let's cultivate your ideas into thriving digital
            solutions that grow organically! 💪
          </p>
          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 md:px-12 py-4 md:py-6 text-base md:text-xl font-black rounded-full shadow-2xl transform hover:scale-105 transition-all"
          >
            🎯 Start My Digital Journey
            <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Button>
          <p className="text-white/80 mt-4 text-xs md:text-sm">
            ✨ Free consultation • No boring sales pitches • Just pure digital magic!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
