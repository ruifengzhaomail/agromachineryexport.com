import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IMAGES } from '@/config/images'

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "900 Knapsack Power Sprayer",
      category: "Sprayers",
      description: "Professional 4-stroke gasoline knapsack sprayer with 900 model designation. High-pressure system for efficient crop protection and pest control applications.",
      image: IMAGES.products.knapsackSprayer,
      features: ["4-Stroke Engine", "High Pressure System", "Ergonomic Design", "Large Tank Capacity"],
      link: "/products/knapsack-sprayer"
    },
    {
      id: 2,
      name: "Hydroponic Tower Garden System",
      category: "Modern Agriculture",
      description: "Advanced vertical hydroponic growing system for efficient space utilization and high-yield crop production in controlled environments.",
      image: IMAGES.products.hydroponicSystem,
      features: ["Vertical Growing", "Water Efficient", "High Yield", "Space Saving"],
      link: "/products/hydroponic-system"
    },
    {
      id: 3,
      name: "GIL Multisem Precision Seeder",
      category: "Seeders & Planters",
      description: "Professional precision seeding equipment with GPS navigation and variable rate technology for optimal field performance and crop establishment.",
      image: IMAGES.products.seedingEquipment,
      features: ["GPS Navigation", "Variable Rate Seeding", "Multi-crop Compatible", "Precision Depth Control"],
      link: "/products/precision-seeder"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality agricultural machinery designed to improve farming efficiency and productivity.
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Product Image */}
                <div className="h-64 lg:h-80 relative overflow-hidden bg-gray-100">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200 flex-1 sm:flex-none">
                      Request Quote
                    </button>
                    <Link
                      href={product.link}
                      className="inline-flex items-center justify-center text-red-500 hover:text-red-600 font-semibold px-6 py-3 border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors duration-200 inline-flex items-center"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
