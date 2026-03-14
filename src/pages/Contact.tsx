

import { Phone, Mail, MapPin } from "lucide-react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Contact(){

  return (
    <>
    <Navbar />
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">

      {/* Heading */}
      <div className="text-center mb-12 px-4">

        <h1 className="text-4xl font-bold text-blue-900 mb-3">
          Get in Touch With Us
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions about admissions, courses, or demo lectures?  
          Our team is here to help you achieve your academic goals.
        </p>

      </div>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">


        {/* Contact Information */}
        <div className="space-y-8">

          <h2 className="text-2xl font-semibold text-blue-900">
            Contact Information
          </h2>

          <p className="text-gray-600">
            Reach out to us for course details, admissions, and demo classes.
            Our counselors will guide you in choosing the right program.
          </p>


          {/* Phone */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">

            <div className="bg-blue-100 p-3 rounded-full">
              <Phone className="text-blue-700"/>
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

          </div>


          {/* Email */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">

            <div className="bg-green-100 p-3 rounded-full">
              <Mail className="text-green-700"/>
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">info@coachingclasses.com</p>
            </div>

          </div>


          {/* Address */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">

            <div className="bg-orange-100 p-3 rounded-full">
              <MapPin className="text-orange-600"/>
            </div>

            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">
                ABC Coaching Classes,  
                MG Road, Pune, Maharashtra, India
              </p>
            </div>

          </div>

        </div>


        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">

          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
    <Footer />
    </>
  )
}