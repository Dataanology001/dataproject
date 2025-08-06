import { Mail, Phone, MapPin, Network } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-lime-400/5 to-green-500/5 rounded-full blur-3xl organic-shape-1"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-400/5 to-cyan-500/5 rounded-full blur-3xl organic-shape-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 relative">
                <Image
                  src="public/images/Datalogo.png"
                  alt="DataAnology"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className="font-black text-xl md:text-2xl">DATAANOLOGY</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              Creating organic data ecosystems that flow naturally through your business, connecting insights and
              enabling intelligent automation across all touchpoints in your digital environment.
            </p>
            <div className="flex items-center space-x-2 text-lime-400">
              <Network className="h-4 w-4" />
              <span className="text-sm">Connected Data Intelligence</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-lime-400">Flow Solutions</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Industry Ecosystems
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Data Flow Solutions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Network Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-teal-400">Connect With Us</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-lime-400 flex-shrink-0" />
                <span>flow@dataanology.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span>+1 (555) DATA-FLOW</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span>Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-gray-300 text-sm md:text-base">
          <p>&copy; 2024 DataAnology. All rights reserved. • Flowing data, growing insights.</p>
        </div>
      </div>
    </footer>
  )
}
