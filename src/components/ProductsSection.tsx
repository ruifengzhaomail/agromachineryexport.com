import Image from 'next/image';

const featuredProducts = [
  {
    id: 1,
    category: "Seeders & Planters",
    name: "Multifunctional Precision Planter",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&crop=center",
    price: "$12,000 - $18,000",
    description: "Advanced precision planting technology for efficient seeding with customizable row spacing and seed depth control.",
    features: ["GPS Navigation", "Variable Rate Seeding", "Auto Depth Control", "+1 more"]
  },
  {
    id: 2,
    category: "Tractors", 
    name: "Agricultural Tractor 85HP",
    image: "https://images.unsplash.com/photo-1574859888790-a48dde04d2f6?w=600&h=400&fit=crop&crop=center",
    price: "$15,000 - $22,000",
    description: "Reliable and powerful tractor designed for various farming operations with excellent fuel efficiency.",
    features: ["85HP Engine", "4WD", "Hydraulic Lift", "+1 more"]
  },
  {
    id: 3,
    category: "Sprayers",
    name: "900 Knapsack Power Sprayer", 
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&crop=center",
    price: "$800 - $1,200",
    description: "Professional 4-stroke gasoline knapsack sprayer with 900 model designation. High-pressure system for efficient crop protection.",
    features: ["4-Stroke Engine", "High Pressure System", "Ergonomic Design", "Large Tank Capacity"]
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
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-64 group overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
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

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Interested in our complete product catalog?
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
