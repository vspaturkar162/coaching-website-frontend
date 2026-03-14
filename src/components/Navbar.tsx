

import { useState } from "react"
import { Link } from "react-router-dom"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-gradient-to-r from-blue-100 via-blue-200 to-cyan-200 shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="text-blue-900 font-bold text-xl">
              🎓Coaching Classes
            </h1>
          </div>
          
          
          <ul className="hidden md:flex gap-8 text-black font-medium">

  <li>
    <Link to="/" className="hover:text-purple-500">
      Home
    </Link>
  </li>

  <li>
    <Link to="/pages/results" className="hover:text-purple-500">
      Results
    </Link>
  </li>

  <li>
    <Link to="/pages/enroll" className="hover:text-purple-500">
      Courses
    </Link>
  </li>

  <li>
    <Link to="/pages/demo-lectures" className="hover:text-purple-500">
      Demo Lectures
    </Link>
  </li>

  <li>
    <Link to="/pages/testimonials" className="hover:text-purple-500">
      Testimonials
    </Link>
  </li>

  <li>
    <Link to="/pages/contact" className="hover:text-purple-500">
      Contact
    </Link>
  </li>

</ul>
          {/* Enroll Button */}
          <Link to="/pages/enroll" className="hidden md:block bg-gradient-to-r from-green-800 via-teal-500 to-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow-md transition">
            Enroll Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="md:hidden bg-blue-800 text-white px-6 py-4">
    <ul className="flex flex-col gap-4">

      <li>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
      </li>

      <li>
        <Link to="/pages/results" onClick={() => setMenuOpen(false)}>Results</Link>
      </li>

      <li>
        <Link to="/pages/enroll" onClick={() => setMenuOpen(false)}>Courses</Link>
      </li>

      <li>
        <Link to="/pages/demo-lectures" onClick={() => setMenuOpen(false)}>Demo Lectures</Link>
      </li>

      <li>
        <Link to="/pages/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
      </li>

      <li>
        <Link to="/pages/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </li>

      <Link
        to="/pages/enroll"
        onClick={() => setMenuOpen(false)}
        className="bg-red-900 py-2 text-center rounded-lg mt-2"
      >
        Enroll Now
      </Link>

    </ul>
  </div>
)}

    </nav>
  )
}