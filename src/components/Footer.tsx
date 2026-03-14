
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <>
      {/* Upper Footer Section */}
      <section id="footer" className="bg-sky-100 text-gray-800 py-12 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">

          {/* Course Offerings */}
          <div>
            <h3 className="font-bold mb-4">COURSE OFFERINGS</h3>
            <ul className="space-y-2 text-sm">
              <li>LIVE Online Classes</li>
              <li>Mentored Learning Program</li>
              <li>Recorded Video Courses</li>
              <li>CBSE</li>
              <li>Microcourses</li>
              <li>Crashcourses</li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="font-bold mb-4">CLASSES</h3>
            <ul className="space-y-2 text-sm">
              <li>Class 8</li>
              <li>Class 9</li>
              <li>Class 10</li>
              <li>Class 11</li>
              <li>Class 12</li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="font-bold mb-4">SUBJECTS</h3>
            <ul className="space-y-2 text-sm">
              <li>Physics</li>
              <li>Math</li>
              <li>Chemistry</li>
              <li>Biology</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold mb-4">INFO</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Free Class</li>
              <li>Parents Orientation</li>
            </ul>
          </div>

          {/* Contact + Address */}
          <div>
            <h3 className="font-bold mb-4">CONTACT US</h3>

            <div className="space-y-2 text-sm">

              <p className="flex items-center gap-2">
                <Phone size={14} /> +91 96001 00090
              </p>

              <p className="flex items-center gap-2">
                <Phone size={14} /> +91 96001 00020
              </p>

              <p className="flex items-center gap-2">
                <Mail size={14} /> study@ahaguru.com
              </p>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">

              <Facebook size={20} className="cursor-pointer hover:text-blue-600"/>
              <Instagram size={20} className="cursor-pointer hover:text-pink-600"/>
              <Linkedin size={20} className="cursor-pointer hover:text-blue-700"/>
              <Youtube size={20} className="cursor-pointer hover:text-red-600"/>

            </div>

            {/* Address */}
            <div className="mt-4 text-sm">
              <p className="font-semibold mb-1">ADDRESS</p>
              <p>
                3, Bhim Sena Building Flat 3B, 1st Floor,
                Murrays Gate Rd, Alwarpet,
                Chennai, Tamil Nadu 600018.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Black Footer (your original one) */}
      <footer className="bg-stone-950 text-white w-full px-6 py-6 text-center">
        <p>© 2026 Coaching Classes | All Rights Reserved</p>
      </footer>
    </>
  )
}