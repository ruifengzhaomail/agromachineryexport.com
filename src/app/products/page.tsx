import Link from 'next/link'
import { ArrowRight, Filter } from 'lucide-react'

export default function ProductsPage() {
  const categories = [
    { name: 'All Products', count: 24, active: true },
    { name: 'Tractors', count: 8 },
    { name: 'Seeders & Planters', count: 6 },
    { name: 'Sprayers', count: 5 },
    { name: 'Harvesters', count: 3 },
    { name: 'Other Equipment', count: 2 },
  ]

  const products = [
    {
      id: 1,
      name: "Multifunctional Precision Planter",
      category: "Seeders & Planters",
      price: "$12,000 - $18,000",
      description: "Advanced precision planting technology for efficient seeding with customizable row spacing and seed depth control.",
      image: "/api/placeholder/400/300",
      features: ["GPS Navigation", "Variable Rate Seeding", "Auto Depth Control", "Multi-crop Compatible"],
      inStock: true
    },
    {
      id: 2,
      name: "Agricultural Tractor 85HP",
      category: "Tractors",
      price: "$15,000 - $22,000",
      description: "Reliable and powerful tractor designed for various farming operations with excellent fuel efficiency.",
      image: "/api/placeholder/400/300",
      features: ["85HP Engine", "4WD", "Hydraulic Lift", "Air Conditioning"],
      inStock: true
    },
    {
      id: 3,
      name: "Gasoline Knapsack Sprayer GX35",
      category: "Sprayers",
      price: "$280 - $350",
      description: "High-pressure 4-stroke gasoline knapsack sprayer for efficient crop protection and pest control.",
      image: "/api/placeholder/400/300",
      features: ["4-Stroke Engine", "High Pressure", "Ergonomic Design", "Low Fuel Consumption"],
      inStock: true
    },
    {
      id: 4,
      name: "Corn Seeder Machine",
      category: "Seeders & Planters",
      price: "$8,500 - $12,000",
      description: "Specialized corn seeding machine with precise seed placement and fertilizer application.",
      image: "/api/placeholder/400/300",
      features: ["Precise Seeding", "Fertilizer System", "Adjustable Spacing", "Heavy Duty Build"],
      inStock: true
    },
    {
      id: 5,
      name: "Mini Combine Harvester",
      category: "Harvesters",
      price: "$25,000 - $35,000",
      description: "Compact combine harvester perfect for small to medium-sized farms with multiple crop capability.",
      image: "/api/placeholder/400/300",
      features: ["Multi-crop", "Compact Design", "Easy Operation", "Low Maintenance"],
      inStock: false
    },
    {
      id: 6,
      name: "Farm Utility Tractor 45HP",
      category: "Tractors",
      price: "$8,000 - $12,000",
      description: "Versatile utility tractor ideal for small farms and agricultural operations.",
      image: "/api/placeholder/400/300",
      features: ["45HP Engine", "Compact Size", "Multi-purpose", "Fuel Efficient"],
      inStock: true
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality agricultural machinery designed to improve farming efficiency and productivity.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
              </div>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex justify-between items-center ${
                        category.active
                          ? 'bg-red-500 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Contact our experts for product recommendations and custom quotes.
              </p>
              <Link
                href="/contact"
                className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition-colors duration-200 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                All Products ({products.length})
              </h2>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-600">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Product Image */}
                  <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {product.category}
                      </span>
                    </div>
                    {!product.inStock && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-red-500 font-bold text-lg mb-3">
                      {product.price}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="text-gray-500 text-sm">
                          +{product.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        className={`flex-1 px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
                          product.inStock
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? 'Get Quote' : 'Out of Stock'}
                      </button>
                      <Link
                        href={`/products/${product.id}`}
                        className="inline-flex items-center text-red-500 hover:text-red-600 font-semibold"
                      >
                        Details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-3 py-2 bg-red-500 text-white rounded-md">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  3
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

