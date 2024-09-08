"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Mic, BookOpen, MapPin, Phone, Mail, Menu } from "lucide-react"
import Link from 'next/link'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Linkletter Music School</h1>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">About</a></li>
              <li><a href="#lessons" className="text-gray-300 hover:text-red-500 transition-colors">Lessons</a></li>
              <li><a href="#fees" className="text-gray-300 hover:text-red-500 transition-colors">Fees</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </nav>
          <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden bg-black bg-opacity-90 backdrop-blur-md">
            <ul className="flex flex-col items-center py-4">
              <li className="py-2"><a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">About</a></li>
              <li className="py-2"><a href="#lessons" className="text-gray-300 hover:text-red-500 transition-colors">Lessons</a></li>
              <li className="py-2"><a href="#fees" className="text-gray-300 hover:text-red-500 transition-colors">Fees</a></li>
              <li className="py-2"><a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-50"></div>
          <div className="relative z-20 text-center px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white">Linkletter Music School</h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Inspiring musical excellence since 1987</p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Sign Up for Lessons
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        <section id="about" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">About Linkletter Music School</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-red-600"></div>
                  <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-orange-500"></div>
                  <div className="absolute inset-4 bg-black flex items-center justify-center">
                    <Music className="w-16 h-16 text-yellow-500" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg mb-4 text-gray-300">
                  Founded in 1987, Linkletter Music School has been a cornerstone of musical education in Charlottetown, Prince Edward Island. We offer private lessons in piano, voice, and theory, catering to students of all ages and skill levels.
                </p>
                <p className="text-lg mb-4 text-gray-300">
                  Our mission is to provide high-quality music education in a supportive and inspiring environment. We believe in nurturing each student&apos;s unique musical journey, whether they&apos;re pursuing music for personal enjoyment or professional aspirations.
                </p>
                <p className="text-lg text-gray-300">
                  With our experienced and passionate instructor, Lori, we&apos;re committed to helping our students discover the joy of music and reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="lessons" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Lessons</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Music, title: "Piano Lessons", description: "Learn classical, jazz, or contemporary styles with our experienced piano instructor." },
                { icon: Mic, title: "Voice Lessons", description: "Develop your vocal technique, expand your range, and build confidence in your singing abilities." },
                { icon: BookOpen, title: "Theory Lessons", description: "Gain a deeper understanding of music with lessons in harmony, rhythm, and composition." },
              ].map((lesson, index) => (
                <Card key={index} className="bg-black border border-gray-800 hover:border-red-500 transition-colors">
                  <CardContent className="p-6">
                    <lesson.icon className="w-12 h-12 text-red-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-white">{lesson.title}</h3>
                    <p className="text-gray-300">{lesson.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="fees" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Lesson Fees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "30-Minute Lesson", price: "$30", description: "Ideal for beginners and younger students" },
                { title: "45-Minute Lesson", price: "$45", description: "Perfect for intermediate students" },
                { title: "60-Minute Lesson", price: "$60", description: "Recommended for advanced students" },
              ].map((fee, index) => (
                <Card key={index} className="bg-gray-900 border border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{fee.title}</h3>
                    <p className="text-3xl font-bold text-orange-500 mb-4">{fee.price}</p>
                    <p className="text-gray-300">{fee.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-300">
              Note: Fees are subject to change. Please contact us for the most up-to-date pricing information.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Contact Us</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="flex items-center text-gray-300">
                <MapPin className="mr-2 text-red-500" />
                41 Newland Crescent, Charlottetown, PE
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="mr-2 text-red-500" />
                (902) 393-2939
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="mr-2 text-red-500" />
                linklettermusicschool@gmail.com
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
                Sign Up for Lessons
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">&copy; 2023 Linkletter Music School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}