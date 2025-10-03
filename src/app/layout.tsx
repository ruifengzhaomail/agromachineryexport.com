import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.agromachineryexport.com'),
  title: {
    default: 'Agricultural Machinery Export from China | Tractors, Planters & Farm Equipment',
    template: '%s | Agro Machinery Export'
  },
  description: 'Leading agricultural machinery exporter from China. Factory-direct tractors, planters, sprayers with OEM customization. 20+ years experience serving 30+ countries in Africa, Latin America & Southeast Asia.',
  keywords: ['agricultural machinery export', 'farm equipment China', 'tractor manufacturer', 'precision planter', 'crop sprayer', 'OEM farm machinery', 'agricultural equipment supplier'],
  authors: [{ name: 'Shanghai Huanyu Zongheng Trading Co., Ltd.' }],
  creator: 'Shanghai Huanyu Zongheng Trading Co., Ltd.',
  publisher: 'Shanghai Huanyu Zongheng Trading Co., Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.agromachineryexport.com',
    siteName: 'Agro Machinery Export',
    title: 'Agricultural Machinery Export from China',
    description: 'Leading agricultural machinery exporter with 20+ years experience. Factory-direct prices, OEM customization available.',
    images: [
      {
        url: '/images/hero/slide1.jpg',
        width: 1200,
        height: 630,
        alt: 'Agricultural Machinery Export',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agricultural Machinery Export from China',
    description: 'Leading agricultural machinery exporter with 20+ years experience',
    images: ['/images/hero/slide1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shanghai Huanyu Zongheng Trading Co., Ltd.",
              "alternateName": "Agro Machinery Export",
              "url": "https://www.agromachineryexport.com",
              "logo": "https://www.agromachineryexport.com/images/hero/slide1.jpg",
              "description": "Professional agricultural machinery exporter from China specializing in tractors, planters, and sprayers",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Shanghai",
                "addressCountry": "CN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+86-187-0096-0103",
                "contactType": "Sales",
                "email": "info@agromachineryexport.com",
                "availableLanguage": ["English", "Chinese"]
              },
              "areaServed": [
                {"@type": "Place", "name": "Africa"},
                {"@type": "Place", "name": "Latin America"},
                {"@type": "Place", "name": "Southeast Asia"}
              ],
              "foundingDate": "2003",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "50"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
