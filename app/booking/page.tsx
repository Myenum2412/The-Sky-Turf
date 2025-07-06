import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Booking Information</h1>
          <p className="text-xl max-w-2xl">
            Reserve your time slot and enjoy Salem's finest artificial turf facilities
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 text-black">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Hourly Rate
              </CardTitle>
              <CardDescription>Perfect for casual games and practice sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Full ground access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Basic equipment available
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Changing room access
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-green-200 bg-green-50 text-black">
            <Badge className="absolute top-4 right-4 bg-black text-white">Most Popular</Badge>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Half Day Package
              </CardTitle>
              <CardDescription>Ideal for tournaments and team events</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-black" />
                  4-hour continuous booking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-black" />
                  Priority time slots
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-black" />
                  Event coordination support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-black" />
                  Refreshment area access
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Full Day Package
              </CardTitle>
              <CardDescription>Complete facility access for major events</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  8-hour exclusive access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Dedicated staff support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Catering arrangements
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Event management support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Booking Policies */}
        <Card className="mb-16 text-white">
          <CardHeader>
            <CardTitle>Booking Policies & Guidelines</CardTitle>
            <CardDescription>Please review our terms and conditions before making a booking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Booking Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advance booking required (minimum 2 hours notice)</li>
                <li>• Valid ID proof and contact details mandatory</li>
                <li>• 50% advance payment required to confirm booking</li>
                <li>• Maximum booking duration: 8 hours per day</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Cancellation Policy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Free cancellation up to 24 hours before booking</li>
                <li>• 50% refund for cancellations 12-24 hours prior</li>
                <li>• No refund for cancellations within 12 hours</li>
                <li>• Rain-related cancellations fully refundable</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Ground Rules</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Appropriate sports footwear required (no metal studs)</li>
                <li>• No smoking, alcohol, or gutka on premises</li>
                <li>• Maximum 22 players on ground at any time</li>
                <li>• Facility closes at 10 PM (8 PM on Sundays)</li>
                <li>• Players responsible for personal belongings</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Available Time Slots</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Monday to Saturday</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Morning: 6:00 AM - 12:00 PM</li>
                    <li>Afternoon: 12:00 PM - 6:00 PM</li>
                    <li>Evening: 6:00 PM - 10:00 PM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Sunday</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Morning: 7:00 AM - 1:00 PM</li>
                    <li>Afternoon: 1:00 PM - 5:00 PM</li>
                    <li>Evening: 5:00 PM - 8:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Booking */}
        <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
            <p className="text-xl mb-6">Contact us to check availability and secure your preferred time slot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="tel:+919943799969">Call: +91 99437 99969</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Link href="mailto:aurafitness@email.com">Email Booking</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-90">Our booking team is available during operating hours</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
