import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BarChart3,
  Database,
  Brain,
  Shield,
  Users,
  TrendingUp,
  Zap,
  CheckCircle,
  Network,
  Code,
  Search,
  Smartphone,
  Monitor,
  PieChart,
  LineChart,
  Target,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Organic Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-10 w-96 h-64 bg-gradient-to-l from-lime-400 via-green-400 to-emerald-500 rounded-full opacity-20 blur-3xl transform rotate-12 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-80 h-56 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full opacity-20 blur-3xl transform -rotate-12 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-lime-300/10 to-teal-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
        </div>

        {/* Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1500"></div>
          <svg className="absolute inset-0 w-full h-full">
            <line x1="25%" y1="25%" x2="66%" y2="33%" stroke="rgba(132, 204, 22, 0.2)" strokeWidth="1" />
            <line x1="66%" y1="33%" x2="33%" y2="75%" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="1" />
            <line x1="33%" y1="75%" x2="75%" y2="66%" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-gradient-to-r from-lime-500/20 to-teal-500/20 backdrop-blur-sm border border-lime-400/30 text-lime-300 px-4 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8">
            <Network className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            Connected Data Intelligence
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-lime-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              DATA FLOWS
            </span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-normal opacity-90">THROUGH EVERYTHING</span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            CONNECT • ANALYZE • TRANSFORM YOUR BUSINESS WITH ORGANIC DATA INTELLIGENCE
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-lime-500 via-green-500 to-teal-600 hover:from-lime-600 hover:via-green-600 hover:to-teal-700 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all border border-lime-400/30"
          >
            DISCOVER THE FLOW
            <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-lime-400 animate-bounce">
          <div className="w-4 h-8 md:w-6 md:h-10 border-2 border-lime-400 rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-gradient-to-b from-lime-400 to-teal-400 rounded-full mt-1 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Categories Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-lime-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                Core Solutions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions organized by expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Website Development */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-white group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-r from-lime-500 to-green-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Code className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">🌐 Website Development</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  Complete web solutions from design to deployment
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
                    CMS Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Mobile Applications
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white font-bold rounded-full py-2 md:py-3 text-sm md:text-base">
                  Explore Web Solutions
                </Button>
              </CardContent>
            </Card>

            {/* Data Analytics */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-white group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">📊 Data Analytics</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  Transform raw data into actionable business insights
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
                <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold rounded-full py-2 md:py-3 text-sm md:text-base">
                  Explore Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Research */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-white group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Search className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">🔬 Research</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  Deep market research and competitive analysis
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
                <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-full py-2 md:py-3 text-sm md:text-base">
                  Explore Research
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Web Development Services */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-lime-50 to-green-50 group">
              <CardContent className="p-4 md:p-6 text-center">
                <Monitor className="h-8 w-8 md:h-10 md:w-10 text-lime-600 mx-auto mb-3 md:mb-4" />
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">Web Development</h4>
                <p className="text-xs md:text-sm text-gray-600">Custom websites & web applications</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-teal-50 group">
              <CardContent className="p-4 md:p-6 text-center">
                <Smartphone className="h-8 w-8 md:h-10 md:w-10 text-green-600 mx-auto mb-3 md:mb-4" />
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">Mobile Apps</h4>
                <p className="text-xs md:text-sm text-gray-600">iOS & Android applications</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-teal-50 to-cyan-50 group">
              <CardContent className="p-4 md:p-6 text-center">
                <PieChart className="h-8 w-8 md:h-10 md:w-10 text-teal-600 mx-auto mb-3 md:mb-4" />
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">Data Visualization</h4>
                <p className="text-xs md:text-sm text-gray-600">Interactive charts & dashboards</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-cyan-50 to-blue-50 group">
              <CardContent className="p-4 md:p-6 text-center">
                <Brain className="h-8 w-8 md:h-10 md:w-10 text-cyan-600 mx-auto mb-3 md:mb-4" />
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">AI & ML</h4>
                <p className="text-xs md:text-sm text-gray-600">Machine learning solutions</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-purple-50 group">
              <CardContent className="p-4 md:p-6 text-center">
                <Database className="h-8 w-8 md:h-10 md:w-10 text-blue-600 mx-auto mb-3 md:mb-4" />
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">Database Design</h4>
                <p className="text-xs md:text-sm text-gray-600">Scalable data architecture</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50 group">
              <CardContent className="p-4 md:p-6 text-center">
                <Shield className="h-8 w-8 md:h-10 md:w-10 text-purple-600 mx-auto mb-3 md:mb-4" />
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">Security</h4>
                <p className="text-xs md:text-sm text-gray-600">Cybersecurity & data protection</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-red-50 group">
              <CardContent className="p-4 md:p-6 text-center">
                <LineChart className="h-8 w-8 md:h-10 md:w-10 text-pink-600 mx-auto mb-3 md:mb-4" />
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">Analytics</h4>
                <p className="text-xs md:text-sm text-gray-600">Business intelligence & reporting</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-red-50 to-orange-50 group">
              <CardContent className="p-4 md:p-6 text-center">
                <Target className="h-8 w-8 md:h-10 md:w-10 text-red-600 mx-auto mb-3 md:mb-4" />
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">Strategy</h4>
                <p className="text-xs md:text-sm text-gray-600">Digital transformation consulting</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-lime-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 md:mb-8">
                Transform Your Business With
                <span className="bg-gradient-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                  {" "}
                  Organic Data Intelligence
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Like nature's interconnected ecosystems, your data flows through every aspect of your business. We help
                organizations create organic connections between their data sources, enabling natural insights and
                intelligent automation.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-lime-400 to-green-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">Organic Data Flow Architecture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">Real-time Connected Analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">Intelligent Network Learning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">Adaptive Security Ecosystem</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl border border-lime-500/20">
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-gradient-to-r from-lime-500 to-green-500 rounded-xl p-3 md:p-4 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full -mr-6 md:-mr-8 -mt-6 md:-mt-8"></div>
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 mb-2 relative z-10" />
                    <div className="text-lg md:text-2xl font-bold relative z-10">+340%</div>
                    <div className="text-xs md:text-sm opacity-90 relative z-10">Data Velocity</div>
                  </div>
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-3 md:p-4 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full -mr-6 md:-mr-8 -mt-6 md:-mt-8"></div>
                    <Users className="h-6 w-6 md:h-8 md:w-8 mb-2 relative z-10" />
                    <div className="text-lg md:text-2xl font-bold relative z-10">25K+</div>
                    <div className="text-xs md:text-sm opacity-90 relative z-10">Connected Nodes</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-3 md:p-4 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full -mr-6 md:-mr-8 -mt-6 md:-mt-8"></div>
                    <Zap className="h-6 w-6 md:h-8 md:w-8 mb-2 relative z-10" />
                    <div className="text-lg md:text-2xl font-bold relative z-10">99.9%</div>
                    <div className="text-xs md:text-sm opacity-90 relative z-10">Flow Uptime</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-3 md:p-4 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full -mr-6 md:-mr-8 -mt-6 md:-mt-8"></div>
                    <BarChart3 className="h-6 w-6 md:h-8 md:w-8 mb-2 relative z-10" />
                    <div className="text-lg md:text-2xl font-bold relative z-10">1B+</div>
                    <div className="text-xs md:text-sm opacity-90 relative z-10">Data Connections</div>
                  </div>
                </div>
                <div className="text-center text-gray-300 font-medium text-sm md:text-base">
                  Organic Data Flow Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Industries We{" "}
              <span className="bg-gradient-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Creating organic data ecosystems across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Healthcare",
                icon: "🏥",
                desc: "Patient data flows and medical network insights",
                gradient: "from-lime-400 to-green-500",
              },
              {
                name: "Finance",
                icon: "💰",
                desc: "Risk networks and fraud detection ecosystems",
                gradient: "from-green-400 to-teal-500",
              },
              {
                name: "Retail",
                icon: "🛍️",
                desc: "Customer journey flows and inventory networks",
                gradient: "from-teal-400 to-cyan-500",
              },
              {
                name: "Manufacturing",
                icon: "🏭",
                desc: "Supply chain flows and operational networks",
                gradient: "from-cyan-400 to-blue-500",
              },
              {
                name: "Technology",
                icon: "💻",
                desc: "Performance networks and user flow analytics",
                gradient: "from-blue-400 to-purple-500",
              },
              {
                name: "Education",
                icon: "🎓",
                desc: "Learning networks and student outcome flows",
                gradient: "from-purple-400 to-pink-500",
              },
            ].map((industry, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-white group overflow-hidden"
              >
                <CardContent className="p-6 md:p-8 text-center relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4 relative z-10">{industry.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 relative z-10">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 relative z-10 text-sm md:text-base">{industry.desc}</p>
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  ></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lime-600 via-green-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Trusted by Data Ecosystems Worldwide</h2>
            <p className="text-lg md:text-xl opacity-90">Numbers that flow through our network</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-3xl md:text-5xl font-black mb-2">750+</div>
              <div className="text-sm md:text-lg opacity-90">Connected Enterprises</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-3xl md:text-5xl font-black mb-2">5B+</div>
              <div className="text-sm md:text-lg opacity-90">Data Flows Processed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-3xl md:text-5xl font-black mb-2">99.99%</div>
              <div className="text-sm md:text-lg opacity-90">Network Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-3xl md:text-5xl font-black mb-2">24/7</div>
              <div className="text-sm md:text-lg opacity-90">Ecosystem Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-64 bg-gradient-to-l from-lime-400/10 via-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-56 bg-gradient-to-r from-teal-400/10 via-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
            Ready to Join the Data Ecosystem?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
            Connect your business to the organic flow of intelligent data and watch your insights grow naturally.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-lime-500 via-green-500 to-teal-600 hover:from-lime-600 hover:via-green-600 hover:to-teal-700 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all border border-lime-400/30"
          >
            START YOUR DATA FLOW
            <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
