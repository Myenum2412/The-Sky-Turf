import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  const galleryItems = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Aerial view of The Sky Turf football ground",
      title: "Football Ground Overview",
      category: "Football",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Cricket pitch and practice nets at The Sky Turf",
      title: "Cricket Facilities",
      category: "Cricket",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "LED floodlighting system during evening",
      title: "Evening Lighting",
      category: "Facilities",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Spectator seating area at The Sky Turf",
      title: "Spectator Seating",
      category: "Facilities",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Players enjoying football match",
      title: "Football Action",
      category: "Football",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Cricket match in progress at The Sky Turf",
      title: "Cricket Match",
      category: "Cricket",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Changing rooms and facilities",
      title: "Changing Facilities",
      category: "Facilities",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Parking area and main entrance",
      title: "Parking & Entrance",
      category: "Facilities",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Close-up view of premium artificial turf",
      title: "Premium Turf Quality",
      category: "Turf",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Facility Gallery</h1>
          <p className="text-xl max-w-2xl">
            Explore The Sky Turf's world-class artificial turf facilities through our photo gallery
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-black/70 text-white">{item.category}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Virtual Tour</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Virtual facility tour video</p>
                    <p className="text-sm text-gray-500 mt-2">Experience The Sky Turf virtually</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
