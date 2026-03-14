
import { Link } from "react-router-dom"
// import heroBg from "../assets/hero2.jpeg"
import { useEffect, useState } from "react"


interface HeroData {
  title: string
  description: string
  phone: string
  imageUrl: string
}
export default function Hero() {
  const [hero, setHero] = useState<HeroData | null>(null)

  useEffect(() => {
    fetch("https://coaching-backend.onrender.com/api/hero")
      .then(res => res.json())
      .then(data => setHero(data))
  }, [])

  if (!hero) return null
  return (
    <section
      id="home"
      className="relative text-white px-6 py-24 w-full min-h-[80vh] flex items-center bg-cover bg-[70%_center] md:bg-center bg-no-repeat md:px-16"
      style={{ backgroundImage: `url(${hero.imageUrl})` }}
    >
      {/*overlay */}
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

        {/* RIGHT SIDE EMPTY (keeps spacing) */}
        <div></div>

      </div>

    </section>
  )
}