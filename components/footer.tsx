"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/Logos/Logos.png" // Make sure to place your logo in the /public directory
                alt="The Sky Turf Logo"
                width={100}
                height={100}
                className="rounded-full"
              />
              <span className="text-xl font-bold">The Sky Turf</span>
            </div>
            <p className="text-gray-300 mb-4">
              Salem's premier artificial turf facility offering world-class football and cricket experiences in the
              heart of Tamil Nadu.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white transition-colors">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Football Ground Booking</li>
              <li>Cricket Pitch Rental</li>
              <li>Tournament Hosting</li>
              <li>Training Sessions</li>
              <li>Event Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Arthanari Bakkiam Complex</p>
                  <p>39/7 Vasagasalai Street</p>
                  <p>Ponnammapet, Salem</p>
                  <p>Tamil Nadu 636001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <Link href="tel:+919943799969" className="text-gray-300 hover:text-white transition-colors">
                  +91 99437 99969
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <Link href="mailto:aurafitness@email.com" className="text-gray-300 hover:text-white transition-colors">
                  aurafitness@email.com
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon-Sat: 6 AM - 10 PM</p>
                  <p>Sunday: 7 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 The Sky Turf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
