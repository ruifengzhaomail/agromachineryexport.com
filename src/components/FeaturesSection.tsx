import { Award, Globe, Settings, Shield } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Trusted agricultural machinery exporter with proven track record in international trade and quality assurance."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers in over 30 countries across Africa, Latin America, and Southeast Asia with reliable delivery."
    },
    {
      icon: Settings,
      title: "OEM & Customization",
      description: "Professional OEM manufacturing and customization services to meet specific agricultural equipment requirements."
    },
    {
      icon: Shield,
      title: "Secure Trade",
      description: "Safe and secure trading with comprehensive quality control, warranty support, and after-sales service."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to providing high-quality agricultural machinery and exceptional service to farmers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mb-6 group-hover:bg-red-600 transition-colors duration-200">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

