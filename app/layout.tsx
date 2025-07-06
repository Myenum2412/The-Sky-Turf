import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Sky Turf Salem | Premium Football & Cricket Ground | Artificial Turf Facility",
  description:
    "Experience Salem's finest artificial turf facility at The Sky Turf. Premium football and cricket ground with LED lighting, spectator seating, and modern amenities. Located in Ponnammapet, Salem. Book your slot today!",
  keywords:
    "The Sky Turf, Salem turf ground, artificial turf Salem, football ground Salem, cricket pitch Salem, sports facility Salem, Ponnammapet ground, Tamil Nadu sports, turf booking Salem",
  authors: [{ name: "The Sky Turf" }],
  creator: "The Sky Turf",
  publisher: "The Sky Turf",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://theskyturf.com",
    siteName: "The Sky Turf Salem",
    title: "The Sky Turf Salem | Premium Football & Cricket Ground | Artificial Turf Facility",
    description:
      "Experience Salem's finest artificial turf facility at The Sky Turf. Premium football and cricket ground with LED lighting and modern amenities in Ponnammapet, Salem.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Sky Turf Salem - Premium Artificial Turf Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sky Turf Salem | Premium Football & Cricket Ground",
    description:
      "Experience Salem's finest artificial turf facility with premium football and cricket ground, LED lighting and modern amenities.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#059669",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://theskyturf.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "The Sky Turf",
              description: "Premium artificial turf facility for football and cricket in Salem, Tamil Nadu",
              url: "https://theskyturf.com",
              telephone: "+91-99437-99969",
              email: "aurafitness@email.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Arthanari Bakkiam Complex, 39/7 Vasagasalai Street",
                addressLocality: "Ponnammapet",
                addressRegion: "Salem",
                addressRegion: "Tamil Nadu",
                postalCode: "636001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "11.6543210",
                longitude: "78.1234567",
              },
              openingHours: ["Mo-Sa 06:00-22:00", "Su 07:00-20:00"],
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Premium Artificial Turf",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "LED Floodlighting",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Spectator Seating",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Parking Facility",
                },
              ],
              sport: ["Football", "Cricket"],
              priceRange: "₹800-₹5500",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
