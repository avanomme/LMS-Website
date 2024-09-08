"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"
import { SignUpForm } from '@/components/SignUpForm'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

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
        {/* Header content (unchanged) */}
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-50"></div>
          <div className="relative z-20 text-center px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white">Linkletter Music School</h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Inspiring musical excellence since 1987</p>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Sign Up for Lessons
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <SignUpForm onClose={() => setIsFormOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* Other sections (unchanged) */}
      </main>

      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">&copy; 2023 Linkletter Music School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}