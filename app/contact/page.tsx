"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Network } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert(
      "🎉 Amazing! Your message just flowed into our ecosystem! We'll connect back to you faster than data through fiber optics! ✨",
    )
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
          <div className="inline-flex items-center bg-gradient-to-r from-lime-500/20 to-teal-500/20 backdrop-blur-sm border border-lime-400/30 text-lime-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Network className="h-4 w-4 mr-2" />💬 Let's Connect!
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-lime-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
              Say Hello &
            </span>
            <br />
            <span className="text-gray-800">Let's Grow Together! 🌱</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            🚀 Got questions? Ideas? Just want to chat about data ecosystems? We're all ears! Drop us a line and let's
            start your <strong>organic data journey</strong>! 🌿
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-lime-50/30">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">🎯 Send Us Your Message!</h2>
                <p className="text-gray-600 mb-6">
                  We promise to reply faster than data flows through our networks! ⚡
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      🙋‍♀️ What's your name? *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-2 border-lime-200 focus:border-lime-500 rounded-xl px-4 py-3"
                      placeholder="Your awesome name here!"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      📧 Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-lime-200 focus:border-lime-500 rounded-xl px-4 py-3"
                      placeholder="your.email@awesome-company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                      🏢 Company (Optional)
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border-2 border-lime-200 focus:border-lime-500 rounded-xl px-4 py-3"
                      placeholder="Your amazing company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                      💭 Tell us your ecosystem story! *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border-2 border-lime-200 focus:border-lime-500 rounded-xl px-4 py-3"
                      placeholder="What data challenges are keeping you up at night? How can we help your data ecosystem flourish? 🌱"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-lime-600 to-teal-600 hover:from-lime-700 hover:to-teal-700 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all"
                    size="lg"
                  >
                    🚀 Send My Message to the Ecosystem!
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-teal-50/30">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-6">📞 Let's Connect Our Networks!</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-lime-500 to-green-500 rounded-xl p-3 shadow-lg">
                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">📧 Email Our Ecosystem</h4>
                        <p className="text-gray-600">flow@dataanology.com</p>
                        <p className="text-gray-600">support@dataanology.com</p>
                        <p className="text-sm text-lime-600 mt-1">We reply within 2 hours! ⚡</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-3 shadow-lg">
                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">📱 Call Our Network</h4>
                        <p className="text-gray-600">+1 (555) DATA-FLOW</p>
                        <p className="text-gray-600">+1 (555) 328-2356</p>
                        <p className="text-sm text-green-600 mt-1">Available 24/7! 🌟</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-3 shadow-lg">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">🏢 Visit Our Ecosystem</h4>
                        <p className="text-gray-600">123 Data Flow Street</p>
                        <p className="text-gray-600">Silicon Valley, CA 94105</p>
                        <p className="text-sm text-teal-600 mt-1">Organic coffee always brewing! ☕</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-3 shadow-lg">
                        <Clock className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">⏰ When Our Ecosystem Flows</h4>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM PST</p>
                        <p className="text-gray-600">Weekend: We're probably still growing! 🌱</p>
                        <p className="text-sm text-cyan-600 mt-1">Emergency support: Always flowing! 🚨</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-r from-lime-600 via-green-600 to-teal-600 text-white overflow-hidden">
                <CardContent className="p-6 md:p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl organic-shape-1"></div>
                  <div className="relative">
                    <h3 className="text-xl md:text-2xl font-black mb-4">🚨 Need Super Fast Ecosystem Help?</h3>
                    <p className="mb-6 opacity-90 leading-relaxed">
                      Got a data emergency? Our ecosystem guardians are standing by with organic solutions and fresh
                      insights, ready to save your day! 🦸‍♀️
                    </p>
                    <Button className="bg-white text-green-600 hover:bg-gray-100 font-bold rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg transform hover:scale-105 transition-all">
                      🚀 Get Instant Help
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lime-600 via-green-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl organic-shape-1"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl organic-shape-2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">🤔 Questions Everyone Grows!</h2>
            <p className="text-lg md:text-xl opacity-90">Quick answers to help your ecosystem flourish faster! 🌱</p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  🚀 How fast can I start my data ecosystem transformation?
                </h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  Faster than seeds sprouting in spring! Most customers see their ecosystems growing within 24 hours.
                  Our onboarding is so smooth, it's like morning dew on fresh leaves! 🌿
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3">🔌 Can you connect to my ancient, legacy system?</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  If it has data, we can make it flow! We've connected to systems older than redwood trees. Our
                  integration gardeners love nurturing old roots into new growth! 🌳
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3">💰 Will this drain my budget ecosystem?</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  Nope! We have plans for every budget, from "startup seedling" to "enterprise forest". Plus, the ROI
                  grows so well, it practically pays for itself! 🌱💎
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3">🤝 What if I need help at 3 AM?</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  We've got night owls in our ecosystem! Our 24/7 support means someone's always awake, probably tending
                  to data gardens and ready to help you nurture your ecosystem challenges! 🦉☕
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
