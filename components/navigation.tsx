"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-20 h-20 md:w-24 md:h-24 relative">
                <Image
                  src="/images/dataanology-logo-updated.png"
                  alt="DataAnology"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <span
                className={`font-black text-2xl md:text-3xl transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                DATAANOLOGY
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={`font-medium transition-colors hover:text-lime-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className={`font-medium transition-colors hover:text-lime-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              INDUSTRIES
            </Link>
            <Link
              href="/services"
              className={`font-medium transition-colors hover:text-lime-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              SOLUTIONS
            </Link>
            <Link
              href="/blog"
              className={`font-medium transition-colors hover:text-lime-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              CAREERS
            </Link>
            <Link
              href="/blog"
              className={`font-medium transition-colors hover:text-lime-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors hover:text-lime-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors hover:text-lime-500 ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mb-4 mt-2 border border-lime-100/20">
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-lime-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-lime-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                INDUSTRIES
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-lime-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                SOLUTIONS
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-lime-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                CAREERS
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-lime-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-lime-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
