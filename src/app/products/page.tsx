import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agricultural Machinery Products | Tractors, Planters & Farm Equipment Catalog',
  description: 'Browse our complete range of agricultural machinery: tractors (45-120HP), precision planters, power sprayers, harvesters. Factory-direct prices, OEM customization available. Free shipping quotes to Africa, Latin America, Southeast Asia.',
  keywords: ['agricultural tractors', 'farm equipment catalog', 'precision planters', 'crop sprayers', 'harvesting machinery', 'tractor prices', 'farm machinery China'],
  openGraph: {
    title: 'Agricultural Machinery Products Catalog',
    description: 'Complete range of tractors, planters, and farm equipment',
    url: 'https://www.agromachineryexport.com/products',
    images: [{
      url: '/images/products/tractor.jpg',
      width: 1200,
      height: 630,
    }],
  },
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Agricultural Machinery Products",
            "description": "Complete catalog of agricultural machinery including tractors, planters, and sprayers",
            "url": "https://www.agromachineryexport.com/products"
          })
        }}
      />

      <h1 className="text-4xl font-bold mb-4">Our Products</h1>
      <p className="text-xl text-gray-600 mb-12">
        High-quality agricultural machinery for modern farming
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <img 
            src="/images/products/tractor.jpg" 
            alt="Agricultural Tractor 85HP"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Agricultural Tractor 85HP</h2>
          <p className="text-green-600 text-xl font-bold mb-3">$15,000 - $22,000</p>
          <p className="text-gray-700 mb-4">
            Reliable and powerful 85HP tractor designed for various farming operations with excellent fuel efficiency.
          </p>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>✓ Powerful 85HP diesel engine</li>
            <li>✓ Four-wheel drive capability</li>
            <li>✓ Air-conditioned cabin</li>
            <li>✓ Low fuel consumption</li>
          </ul>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Request Quote
          </button>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <img 
            src="/images/products/seeder.jpg" 
            alt="Multifunctional Precision Planter"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Precision Planter</h2>
          <p className="text-green-600 text-xl font-bold mb-3">$12,000 - $18,000</p>
          <p className="text-gray-700 mb-4">
            Advanced precision planting technology for efficient seeding with customizable row spacing and seed depth control.
          </p>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>✓ Precision seed placement</li>
            <li>✓ Adjustable row spacing</li>
            <li>✓ Variable seeding rate</li>
            <li>✓ Works with multiple crop types</li>
          </ul>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Request Quote
          </button>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <img 
            src="/images/products/knapsack-sprayer.png" 
            alt="900 Knapsack Power Sprayer"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">900 Power Sprayer</h2>
          <p className="text-green-600 text-xl font-bold mb-3">$800 - $1,200</p>
          <p className="text-gray-700 mb-4">
            Professional 4-stroke gasoline knapsack sprayer. High-pressure system for efficient crop protection.
          </p>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>✓ 4-stroke gasoline engine</li>
            <li>✓ High-pressure spraying</li>
            <li>✓ Large capacity tank</li>
            <li>✓ Adjustable nozzle</li>
          </ul>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Request Quote
          </button>
        </div>
      </div>

      <div className="mt-16 bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-gray-700 mb-4">
          We offer OEM and customization services to meet your specific agricultural equipment requirements. Contact our team for personalized consultation.
        </p>
        <div className="flex gap-4">
          <a href="tel:+8618700960103" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Call: +86 187 0096 0103
          </a>
          <a href="mailto:info@agromachineryexport.com" className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-50">
            Email Us
          </a>
        </div>
      </div>
    </div>
  )
}
