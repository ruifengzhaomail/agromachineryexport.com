'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your agricultural machinery needs? Contact us today for competitive quotes and expert consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-500 mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+86 187 0096 0103</p>
                  <p className="text-sm text-gray-500">Available 24/7 for international customers</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-red-500 mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@agromachineryexport.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-500 mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">Shanghai, China</p>
                  <p className="text-sm text-gray-500">Factory direct shipping worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Factory direct prices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  OEM & Customization available
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Fast global shipping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Quality guarantee
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Request a Quote
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Please describe your requirements, quantity needed, target market, etc."
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

