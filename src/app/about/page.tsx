import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - 20+ Years Agricultural Machinery Export Experience',
  description: 'Shanghai Huanyu Zongheng Trading Co., Ltd. is a leading agricultural machinery exporter with 20+ years experience. We serve over 30 countries across Africa, Latin America, and Southeast Asia with factory-direct tractors, planters, and sprayers.',
  keywords: ['agricultural machinery exporter', 'farm equipment manufacturer China', 'tractor supplier', 'OEM farm machinery', 'Shanghai trading company'],
  openGraph: {
    title: 'About Agro Machinery Export - 20+ Years Experience',
    description: 'Leading agricultural machinery exporter serving 30+ countries',
    url: 'https://www.agromachineryexport.com/about',
    images: [{
      url: '/images/hero/slide2.jpg',
      width: 1200,
      height: 630,
    }],
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Agro Machinery Export",
            "description": "Information about Shanghai Huanyu Zongheng Trading Co., Ltd., a leading agricultural machinery exporter",
            "mainEntity": {
              "@type": "Organization",
              "name": "Shanghai Huanyu Zongheng Trading Co., Ltd.",
              "foundingDate": "2003",
              "numberOfEmployees": "50+",
              "description": "Professional agricultural machinery exporter with 20+ years experience"
            }
          })
        }}
      />
      
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Company Overview</h2>
        <p className="text-gray-700 mb-4">
          Shanghai Huanyu Zongheng Trading Co., Ltd. is a leading agricultural machinery exporter with over 20 years of experience in international trade. We specialize in providing high-quality tractors, planters, sprayers, and other farm equipment to customers worldwide.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          To empower farmers globally with reliable, efficient, and affordable agricultural machinery that enhances productivity and sustainability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>20+ Years Experience:</strong> Trusted agricultural machinery exporter with proven track record</li>
          <li><strong>Global Reach:</strong> Serving customers in over 30 countries across Africa, Latin America, and Southeast Asia</li>
          <li><strong>Factory Direct:</strong> Direct from manufacturer ensuring competitive prices</li>
          <li><strong>OEM & Customization:</strong> Professional OEM services tailored to your needs</li>
          <li><strong>Quality Assurance:</strong> Comprehensive quality control and testing</li>
          <li><strong>After-Sales Support:</strong> Lifetime technical support and 1-year warranty</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Products</h2>
        <p className="text-gray-700 mb-4">
          We offer a comprehensive range of agricultural machinery including:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Agricultural Tractors (45HP - 120HP)</li>
          <li>Precision Planters and Seeders</li>
          <li>Power Sprayers (Knapsack and Tractor-mounted)</li>
          <li>Harvesters and Combines</li>
          <li>Farm Implements and Attachments</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
        <div className="bg-green-50 p-6 rounded-lg">
          <p className="mb-2"><strong>Company:</strong> Shanghai Huanyu Zongheng Trading Co., Ltd.</p>
          <p className="mb-2"><strong>Phone:</strong> +86 187 0096 0103</p>
          <p className="mb-2"><strong>Email:</strong> info@agromachineryexport.com</p>
          <p className="mb-2"><strong>Location:</strong> Shanghai, China</p>
        </div>
      </div>
    </div>
  )
}
