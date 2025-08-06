import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Zap, Star, Crown } from "lucide-react"

export default function PricingPage() {
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
            <Star className="h-4 w-4 mr-2" />💰 Simple Pricing
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Pricing That
            </span>
            <br />
            <span className="text-gray-800">Won't Break the Bank! 💸</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
            🚀 Choose your adventure! From startup budgets to enterprise dreams - we've got a plan that fits like your
            favorite jeans! 👖
          </p>

          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-medium">
            🎉 <strong className="mx-2">30-day free trial</strong> • No credit card required • Cancel anytime
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">🚀 Starter</h3>
                <p className="text-gray-600 mb-6">Perfect for small teams just starting their data journey!</p>

                <div className="mb-6">
                  <span className="text-5xl font-black text-gray-800">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Up to 5 data sources</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">3 custom dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">5GB data storage</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-full shadow-lg">
                  🎯 Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan - Most Popular */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 bg-gradient-to-br from-pink-50 to-orange-50 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-center py-2 text-sm font-bold">
                🔥 MOST POPULAR 🔥
              </div>
              <CardContent className="p-8 text-center pt-12">
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">⭐ Professional</h3>
                <p className="text-gray-600 mb-6">For growing teams who want to level up their data game!</p>

                <div className="mb-6">
                  <span className="text-5xl font-black text-gray-800">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Unlimited data sources</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Unlimited dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Advanced analytics & AI</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">100GB data storage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Custom integrations</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-bold py-3 rounded-full shadow-lg transform hover:scale-105 transition-all">
                  🚀 Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">👑 Enterprise</h3>
                <p className="text-gray-600 mb-6">For big teams who want to rule the data kingdom!</p>

                <div className="mb-6">
                  <span className="text-3xl font-black text-gray-800">Custom</span>
                  <div className="text-gray-600 text-sm">Let's talk!</div>
                </div>

                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Custom training</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Unlimited storage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">White-label options</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-3 rounded-full shadow-lg">
                  💬 Let's Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              🤔 Pricing{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600">We've got answers that'll make you smile! 😊</p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">💳 Can I change plans anytime?</h3>
                <p className="text-gray-600">
                  Upgrade, downgrade, do the cha-cha - change your plan whenever you want! No penalties, no drama! 💃
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔄 What happens if I cancel?</h3>
                <p className="text-gray-600">
                  We'll be sad, but we'll help you export all your data. No hard feelings - we'll still be friends! 🤝
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">💰 Any hidden fees?</h3>
                <p className="text-gray-600">
                  Nope! What you see is what you get. We hate surprise fees as much as you do! Transparency is our
                  middle name! ✨
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
