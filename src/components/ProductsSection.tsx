const featuredProducts = [
  {
    id: 1,
    category: "Seeders & Planters",
    name: "Multifunctional Precision Planter",
    price: "$12,000 - $18,000",
    description: "Advanced precision planting technology for efficient seeding with customizable row spacing and seed depth control.",
    features: ["GPS Navigation", "Variable Rate Seeding", "Auto Depth Control", "+1 more"],
    icon: "🌱",
    gradient: "from-green-400 to-blue-500"
  },
  {
    id: 2,
    category: "Tractors", 
    name: "Agricultural Tractor 85HP",
    price: "$15,000 - $22,000",
    description: "Reliable and powerful tractor designed for various farming operations with excellent fuel efficiency.",
    features: ["85HP Engine", "4WD", "Hydraulic Lift", "+1 more"],
    icon: "🚜",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    id: 3,
    category: "Sprayers",
    name: "900 Knapsack Power Sprayer", 
    price: "$800 - $1,200",
    description: "Professional 4-stroke gasoline knapsack sprayer with 900 model designation. High-pressure system for efficient crop protection.",
    features: ["4-Stroke Engine", "High Pressure System", "Ergonomic Design", "Large Tank Capacity"],
    icon: "💧",
    gradient: "from-purple-400 to-pink-500"
  }
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our range of high-quality agricultural machinery designed to improve 
            farming efficiency and productivity.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`relative h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">{product.icon}</div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                {/* 装饰性图形 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mb-12"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-red-500 text-lg font-bold mb-3">{product.price}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Request Quote
                  </button>
                  <button className="border border-red-500 text-red-500 hover:bg-red-50 py-2 px-4 rounded-lg font-medium transition-colors flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-red-500 mb-2">20+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-500 mb-2">30+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-green-500 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-purple-500 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in our complete product catalog?
          </h3>
          <p className="text-gray-600 mb-6">
            Browse through our extensive collection of agricultural machinery and find the perfect equipment for your farming needs.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
