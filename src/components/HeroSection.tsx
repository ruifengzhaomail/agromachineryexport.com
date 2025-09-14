'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Professional Agricultural Machinery Export',
    subtitle: 'Quality Tractors, Seeders & Farm Equipment from China',
    description: '20+ years experience serving customers in Africa, Latin America, and Southeast Asia with factory-direct prices and reliable quality.',
    gradient: 'from-green-600 via-blue-600 to-purple-600'
  },
  {
    title: 'Advanced Farming Solutions',
    subtitle: 'Precision Seeders & Planting Equipment',
    description: 'State-of-the-art agricultural machinery designed to maximize efficiency and crop yields for modern farming operations.',
    gradient: 'from-blue-600 via-indigo-600 to-green-600'
  },
  {
    title: 'Global Agricultural Partnership',
    subtitle: 'Reliable Equipment for Every Farm',
    description: 'From small family farms to large commercial operations, we provide the right machinery solutions for your agricultural needs.',
    gradient: 'from-purple-600 via-green-600 to-blue-600'
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 渐变背景替代图片 */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      ))}

      {/* 装饰性图案 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white bg-opacity-10 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium">AgroMachinery Export</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Products
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-red-400 transition-colors duration-300 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-red-400 transition-colors duration-300 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* 底部波浪效果 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-gray-50" fill="currentColor" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0,20 C150,100 350,0 500,20 C650,40 850,100 1000,20 L1000,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
}
