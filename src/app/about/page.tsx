import { Award, Users, Globe, Target } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '20+' },
    { label: 'Countries Served', value: '30+' },
    { label: 'Products Delivered', value: '10,000+' },
    { label: 'Happy Customers', value: '500+' },
  ]

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We ensure the highest quality standards in all our agricultural machinery products.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do, providing personalized service and support.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving farmers and distributors worldwide with reliable shipping and logistics.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously improving our products and services to meet evolving market needs.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Shanghai Huanyu Zongheng Trading Co., Ltd.
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Leading exporter of agricultural machinery with 20+ years of experience serving farmers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded over two decades ago, Shanghai Huanyu Zongheng Trading Co., Ltd. has grown from a small local business to a leading international exporter of agricultural machinery. Our journey began with a simple mission: to provide high-quality, affordable farming equipment to farmers around the world.
                </p>
                <p>
                  Today, we serve customers in over 30 countries across Africa, Latin America, and Southeast Asia. Our success is built on three pillars: superior product quality, competitive factory-direct pricing, and exceptional customer service.
                </p>
                <p>
                  We specialize in tractors, seeders, planters, sprayers, and other essential farm equipment. Our team of experienced engineers and agricultural experts work closely with manufacturers to ensure every product meets international quality standards.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-500 h-96 rounded-lg shadow-lg">
              {/* Placeholder for company image */}
              <div className="h-full flex items-center justify-center text-white text-2xl font-semibold">
                Company Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver exceptional value to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower farmers worldwide with high-quality, affordable agricultural machinery that increases productivity, reduces labor costs, and contributes to global food security. We are committed to building long-term partnerships with our customers through exceptional service and continuous innovation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted global partner for agricultural machinery export, recognized for our quality products, competitive pricing, and outstanding customer service. We envision a world where farmers have access to the best tools and technology to feed the growing global population.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

