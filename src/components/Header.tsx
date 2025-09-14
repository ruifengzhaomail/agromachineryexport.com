'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-1"></div>
      
      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded"></div>
              <span className="text-xl font-bold text-gray-900">AgroMachinery Export</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-red-500 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-red-500 transition-colors font-medium">
                About
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-red-500 transition-colors font-medium">
                Products
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-red-500 transition-colors font-medium">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-red-500 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* CTA Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="hidden md:block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Get Quote
              </Link>
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <svg 
                  className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <nav className="py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-red-500 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-red-500 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/products" 
                  className="text-gray-600 hover:text-red-500 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  href="/projects" 
                  className="text-gray-600 hover:text-red-500 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-red-500 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
