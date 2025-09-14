import ContactSection from '@/components/ContactSection'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 187 0096 0103'],
      description: 'Available 24/7 for international customers'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@agromachineryexport.com', 'sales@agromachineryexport.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Shanghai, China'],
      description: 'Factory direct shipping worldwide'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM (CST)', 'Sat: 9:00 AM - 5:00 PM (CST)'],
      description: 'Emergency support available 24/7'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Get in touch with our agricultural machinery experts. We&apos;re here to help you find the perfect equipment for your farming needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to contact us. Our team is ready to assist you with all your agricultural machinery needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mb-6">
                  <method.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {method.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-gray-900 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What is your minimum order quantity?
                </h3>
                <p className="text-gray-600">
                  Our minimum order quantity varies by product. For most agricultural machinery, we accept orders starting from 1 unit. Contact us for specific MOQ requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you provide warranty and after-sales service?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive warranty coverage and after-sales support. Warranty periods vary by product type, typically ranging from 12 to 24 months.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can you customize products according to our requirements?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We offer OEM and customization services to meet specific requirements. Our engineering team can modify existing products or develop new solutions.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What are your payment terms?
                </h3>
                <p className="text-gray-600">
                  We accept various payment methods including T/T, L/C, and other secure payment options. Payment terms are typically 30% deposit with balance before shipment.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long is the delivery time?
                </h3>
                <p className="text-gray-600">
                  Delivery time depends on product availability and customization requirements. Standard products typically ship within 15-30 days, while customized orders may take 30-60 days.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you provide technical training?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive technical training and documentation. We can arrange on-site training or remote support to ensure proper operation and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

