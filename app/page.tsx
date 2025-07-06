import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users, Zap, Car, Shield, Phone, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
  className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-emerald-600 bg-cover bg-center"
  style={{ backgroundImage: "url('Home/home.jpg')" }} // Update path as needed
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Foreground content */}
  <div className="relative z-10 container mx-auto px-4 text-center text-white">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      The Sky Turf
      <span className="block text-emerald-300">Salem's Premier Sports Ground</span>
    </h1>
    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
      Experience world-class artificial turf facilities perfect for football and cricket in the heart of Salem.
      Professional-grade surface with modern amenities for the ultimate sporting experience.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8 py-3">
        <Link href="/booking">Book Your Slot</Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="text-white border-white hover:bg-white hover:text-green-900 text-lg px-8 py-3 bg-transparent"
      >
        <Link href="/gallery">View Facilities</Link>
      </Button>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our ground features premium artificial turf and modern amenities designed for optimal performance and
              player safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Premium Artificial Turf</CardTitle>
                <CardDescription>
                  High-quality artificial grass with excellent ball bounce and player safety features, suitable for both
                  football and cricket
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>LED Floodlights</CardTitle>
                <CardDescription>
                  Professional-grade LED lighting system for evening matches and training sessions, ensuring clear
                  visibility
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Spectator Seating</CardTitle>
                <CardDescription>
                  Comfortable seating arrangements for spectators with clear views of the entire ground
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Parking Facility</CardTitle>
                <CardDescription>
                  Secure parking space for cars and two-wheelers with easy access to the ground
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Extended Hours</CardTitle>
                <CardDescription>
                  Open 7 days a week with extended hours to accommodate all schedules and preferences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Prime Location</CardTitle>
                <CardDescription>
                  Conveniently located in Ponnammapet, Salem with easy access from all parts of the city
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-center mb-8">Ground Specifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-700">Football Configuration</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Dimensions:</strong> Full-size football ground (100m x 64m)
                  </li>
                  <li>
                    <strong>Surface:</strong> Premium artificial turf with excellent grip
                  </li>
                  <li>
                    <strong>Goals:</strong> Standard football goals with quality nets
                  </li>
                  <li>
                    <strong>Markings:</strong> Permanent white line markings as per regulations
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-700">Cricket Configuration</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Pitch:</strong> 22-yard artificial cricket pitch
                  </li>
                  <li>
                    <strong>Boundary:</strong> Proper boundary markings and rope
                  </li>
                  <li>
                    <strong>Wickets:</strong> Quality stumps and bails available
                  </li>
                  <li>
                    <strong>Practice Area:</strong> Dedicated practice nets facility
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your slot today and experience Salem's finest artificial turf facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/booking">Book Your Slot</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-4 text-emerald-400" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 99437 99969</p>
            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-4 text-emerald-400" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">aurafitness@email.com</p>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-4 text-emerald-400" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">
                Arthanari Bakkiam Complex
                <br />
                39/7 Vasagasalai St, Ponnammapet
                <br />
                Salem, Tamil Nadu 636001
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
