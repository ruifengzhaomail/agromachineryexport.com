'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Professional Agricultural Machinery Export',
    subtitle: 'Quality Tractors, Seeders & Farm Equipment from China',
    description: '20+ years experience serving customers in Africa, Latin America, and Southeast Asia with factory-direct prices and reliable quality.',
    bgImage: 'https://images.unsplash.com/photo-1574859888790-a48dde04d2f6?w=1920&h=1080&fit=crop&q=80'
  },
  {
    title: 'Advanced Farming Solutions',
    subtitle: 'Precision Seeders & Planting Equipment', 
    description: 'State-of-the-art agricultural machinery designed to maximize efficiency and crop yields for modern farming operations.',
    bgImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop&q=80'
  },
  {
    title: 'Global Agricultural Partnership',
    subtitle: 'Reliable Equipment for Every Farm',
    description: 'From small family farms to large commercial operations, we provide the right machinery solutions for your agricultural needs.',
    bgImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=1080&fit=crop&q=80'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // 预加载图片
  useEffect(() => {
    const preloadImages = () => {
      let loadedCount = 0;
      const totalImages = slides.length;
      
      slides.forEach((slide) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setIsLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setIsLoaded(true); // 即使有错误也继续显示
          }
        };
        img.src = slide.bgImage;
      });
      
      // 超时保护，5秒后强制显示
      setTimeout(() => {
        setIsLoaded(true);
      }, 5000);
    };

    preloadImages();
  }, []);

  // 自动轮播
  useEffect(() => {
    if (!isLoaded) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isLoaded]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Loading状态
  if (!isLoaded) {
    return (
      <section className="relative h-screen bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <p className="text-lg">Loading Agricultural Machinery...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 背景图片幻灯片 */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      {/* 内容区域 */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/products'}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Products
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* 导航箭头 */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-red-400 transition-colors duration-300 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-red-400 transition-colors duration-300 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 指示点 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
