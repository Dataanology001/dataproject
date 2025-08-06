"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  BarChart3,
  Database,
  Brain,
  Shield,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function SliderPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const heroSlides = [
    {
      title: "AI-Powered Analytics Revolution",
      subtitle: "Transform your business with cutting-edge artificial intelligence and machine learning solutions",
      cta: "Explore AI Solutions",
      gradient: "from-cyan-400 via-teal-500 to-blue-600",
      bgPattern:
        "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
      icon: <Brain className="h-16 w-16" />,
      stats: { value: "99.7%", label: "Accuracy Rate" },
    },
    {
      title: "Real-Time Data Intelligence",
      subtitle: "Monitor, analyze, and act on your data in real-time with our advanced streaming analytics platform",
      cta: "See Live Demo",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      bgPattern:
        "radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.4) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
      icon: <Zap className="h-16 w-16" />,
      stats: { value: "<1ms", label: "Response Time" },
    },
    {
      title: "Enterprise Data Security",
      subtitle: "Protect your most valuable asset with military-grade security and compliance frameworks",
      cta: "Learn Security",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      bgPattern:
        "radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
      icon: <Shield className="h-16 w-16" />,
      stats: { value: "100%", label: "Compliance" },
    },
    {
      title: "Predictive Business Intelligence",
      subtitle: "Forecast trends, predict outcomes, and make data-driven decisions with advanced predictive models",
      cta: "Start Predicting",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      bgPattern:
        "radial-gradient(circle at 25% 75%, rgba(251, 146, 60, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)",
      icon: <TrendingUp className="h-16 w-16" />,
      stats: { value: "95%", label: "Prediction Rate" },
    },
  ]

  const featureSlides = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description:
        "Unlock deep insights with our sophisticated analytics engine powered by machine learning algorithms.",
      gradient: "from-cyan-500 to-blue-600",
      delay: "0ms",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Integration",
      description: "Seamlessly connect and unify data from 500+ sources with our intelligent integration platform.",
      gradient: "from-purple-500 to-pink-600",
      delay: "100ms",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Deploy production-ready ML models with automated training, validation, and monitoring.",
      gradient: "from-emerald-500 to-teal-600",
      delay: "200ms",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, audit trails, and compliance certifications.",
      gradient: "from-orange-500 to-red-600",
      delay: "300ms",
    },
  ]

  // Auto-play functionality with smooth transitions
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
          setIsTransitioning(false)
        }, 300)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay, heroSlides.length])

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-600/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-8 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2 animate-spin-slow" />
            Interactive Data Experience
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent animate-fade-in-up">
            Experience The Future
            <br />
            <span className="text-4xl md:text-5xl font-light opacity-80">of Data Analytics</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">
            Immerse yourself in cutting-edge data solutions that transform how businesses understand and leverage their
            information
          </p>
        </div>

        {/* Advanced Hero Slider */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0 scale-100"
                    : index < currentSlide
                      ? "opacity-0 -translate-x-full scale-95"
                      : "opacity-0 translate-x-full scale-95"
                } ${isTransitioning ? "blur-sm" : ""}`}
              >
                <div
                  className={`h-full bg-gradient-to-br ${slide.gradient} relative overflow-hidden`}
                  style={{ background: slide.bgPattern }}
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        animation: "float 20s ease-in-out infinite",
                      }}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-between px-16 text-white">
                    <div className="flex-1 max-w-2xl">
                      <div className="mb-8 transform transition-all duration-700 delay-300">{slide.icon}</div>
                      <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight transform transition-all duration-700 delay-500">
                        {slide.title}
                      </h2>
                      <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed transform transition-all duration-700 delay-700">
                        {slide.subtitle}
                      </p>
                      <Button
                        size="lg"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 delay-900"
                      >
                        {slide.cta}
                        <ArrowRight className="ml-3 h-5 w-5" />
                      </Button>
                    </div>

                    {/* Stats Card */}
                    <div className="hidden lg:block transform transition-all duration-700 delay-1000">
                      <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                        <CardContent className="p-8 text-center">
                          <div className="text-4xl font-black text-white mb-2">{slide.stats.value}</div>
                          <div className="text-white/80 font-medium">{slide.stats.label}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stylish Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-8">
            <Button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full p-4 shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-8">
            <Button
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full p-4 shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Auto-play Control */}
          <div className="absolute bottom-8 left-8">
            <Button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full p-3 shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              {isAutoPlay ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
          </div>

          {/* Modern Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                  index === currentSlide ? "w-12 h-3 bg-white shadow-lg" : "w-3 h-3 bg-white/50 hover:bg-white/70"
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-500 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Feature Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Cutting-Edge{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advanced features that set our platform apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureSlides.map((feature, index) => (
              <Card
                key={index}
                className="group border-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden"
                style={{ animationDelay: feature.delay }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div
                    className={`bg-gradient-to-r ${feature.gradient} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Interactive{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Demonstrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our platform firsthand with these interactive demos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Real-time Dashboard Demo */}
            <Card className="border-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl overflow-hidden group hover:shadow-cyan-500/20 transition-all duration-500">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-600 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                    <BarChart3 className="h-6 w-6 mr-3" />
                    Live Analytics Dashboard
                  </h3>
                  <p className="text-cyan-100">Real-time data visualization and monitoring</p>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <TrendingUp className="h-5 w-5 text-cyan-400" />
                        <span className="text-green-400 text-sm font-bold">+15.3%</span>
                      </div>
                      <div className="text-2xl font-bold text-white">$2.4M</div>
                      <div className="text-sm text-gray-400">Revenue</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <Users className="h-5 w-5 text-purple-400" />
                        <span className="text-green-400 text-sm font-bold">+8.7%</span>
                      </div>
                      <div className="text-2xl font-bold text-white">12.8K</div>
                      <div className="text-sm text-gray-400">Active Users</div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold rounded-xl py-3 transform hover:scale-105 transition-all duration-300">
                    Launch Interactive Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Prediction Demo */}
            <Card className="border-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl overflow-hidden group hover:shadow-purple-500/20 transition-all duration-500">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                    <Brain className="h-6 w-6 mr-3" />
                    AI Prediction Engine
                  </h3>
                  <p className="text-purple-100">Machine learning powered forecasting</p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                      <span className="text-gray-300">Sales Forecast (Q4)</span>
                      <span className="text-green-400 font-bold flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +23.5%
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                      <span className="text-gray-300">Customer Retention</span>
                      <span className="text-blue-400 font-bold">94.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                      <span className="text-gray-300">Market Trend</span>
                      <span className="text-purple-400 font-bold">Bullish 📈</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl py-3 transform hover:scale-105 transition-all duration-300">
                    Try AI Predictions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-teal-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Experience the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">Future</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of forward-thinking companies already transforming their business with our cutting-edge data
            platform
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white px-12 py-6 text-xl font-black rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border border-cyan-400/30"
          >
            Start Your Journey
            <Sparkles className="ml-3 h-6 w-6 animate-spin-slow" />
          </Button>
          <p className="text-gray-400 mt-6 text-sm">
            ✨ Free trial • No credit card required • Enterprise support included
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
