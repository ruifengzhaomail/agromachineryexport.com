'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IMAGES } from '@/config/images'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Professional Agricultural Machinery Export",
      subtitle: "Quality Tractors, Seeders & Farm Equipment from China",
      description: "20+ years experience serving customers in Africa, Latin America, and Southeast Asia with factory-direct prices and reliable quality.",
      image: IMAGES.hero.slide1,
      cta: "View Products"
    },
    {
      id: 2,
      title: "Precision Planting Solutions",
      subtitle: "Advanced Seeders & Planters for Modern Farming",
      description: "Multifunctional precision planters designed for efficient seeding with customizable configurations to meet your farming needs.",
      image: IMAGES.hero.slide2,
      cta: "Learn More"
    },
    {
      id: 3,
      title: "OEM & Customization Services",
      subtitle: "Tailored Agricultural Equipment Solutions",
      description: "We provide OEM manufacturing and customization services to meet specific requirements for agricultural machinery worldwide.",
      image: IMAGES.hero.slide3,
      cta: "Get Quote"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-200 mb-6">
                  {slide.subtitle}
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors duration-200">
                    {slide.cta}
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
