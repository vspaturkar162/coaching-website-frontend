
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const API = "https://coaching-website-backend-0nk3.onrender.com/api/hero"

interface HeroData {
  title: string
  description: string
  phone: string
  imageUrl: string
}

export default function Hero() {
  const [hero, setHero] = useState<HeroData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(API)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then(data => setHero(data))
      .catch(err => {
        console.error("Error loading hero:", err)
        setError(true)
      })
  }, [])

  // Don't break the page if data fails to load
  if (error) return null
  if (!hero) return null

  return (
    <section
      id="home"
      className="relative text-white px-6 py-24 w-full min-h-[80vh] flex items-center bg-cover bg-[70%_center] md:bg-center bg-no-repeat md:px-16"
      style={{ backgroundImage: `url(${hero.imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-indigo-500/30"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div className="text-left max-w-xl">

          <h1 className="text-4xl text-white md:text-5xl font-bold mb-4 leading-tight">
            {hero.title} <br />
            <span className="text-yellow-600">
              10th & 12th SCIENCE
            </span>
          </h1>

          <p className="mb-8 text-lg text-white md:text-xl">
            {hero.description}
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              to="/pages/enroll"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Enroll Now
            </Link>

            <button className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold shadow-lg transition">
              📞 {hero.phone}
            </button>
          </div>

        </div>

        {/* RIGHT SIDE — keeps spacing */}
        <div></div>

      </div>
    </section>
  )
}