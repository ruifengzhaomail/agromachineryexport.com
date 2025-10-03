import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProductsSection from '@/components/ProductsSection'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Agricultural Machinery Export from China | Tractors, Planters & Farm Equipment Supplier',
  description: 'Leading agricultural machinery exporter from China with 20+ years experience. Factory-direct tractors (85-120HP), precision planters, sprayers. Serving 30+ countries in Africa, Latin America & Southeast Asia. OEM customization available. Get quote now!',
  keywords: ['agricultural machinery export', 'farm equipment supplier China', 'tractor manufacturer', 'precision planter exporter', 'crop sprayer supplier', 'OEM farm machinery', 'agricultural equipment Africa', 'farm machinery Latin America'],
  openGraph: {
    title: 'Agricultural Machinery Export from China',
    description: 'Leading agricultural machinery exporter with 20+ years experience',
    url: 'https://www.agromachineryexport.com',
    siteName: 'Agro Machinery Export',
    images: [
      {
        url: '/images/hero/slide1.jpg',
        width: 1200,
        height: 630,
        alt: 'Agricultural Machinery Export from China',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Agro Machinery Export",
            "url": "https://www.agromachineryexport.com",
            "description": "Leading agricultural machinery exporter from China",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.agromachineryexport.com/products?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <ContactSection />
    </main>
  )
}
