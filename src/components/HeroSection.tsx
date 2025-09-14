'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Professional Agricultural Machinery Export',
    subtitle: 'Quality Tractors, Seeders & Farm Equipment from China',
    description: '20+ years experience serving customers in Africa, Latin America, and Southeast Asia with factory-direct prices and reliable quality.'
  },
  {
    title: 'Advanced Farming Solutions', 
    subtitle: 'Precision Seeders & Planting Equipment',
    description: 'State-of-the-art agricultural machinery designed to maximize efficiency and crop yields for modern farming operations.'
  },
  {
    title: 'Global Agricultural Partnership',
    subtitle: 'Reliable Equipment for Every Farm', 
    description: 'From small family farms to large commercial operations, we provide the right machinery solutions for your agricultural needs.'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              View Products
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
