import { Users, Trophy, Star } from "lucide-react"

export default function Stats() {
  return (
    <section className="w-full bg-white py-6 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
          Our Achievements
        </h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-4 text-center">

  {/* Students */}
  <div className="bg-gradient-to-r from-cyan-100 via-blue-50 to-blue-100 rounded-tl-3xl rounded-br-3xl shadow-md p-3 hover:scale-105 transition">

    <div className="flex justify-center mb-1">
      <Users size={24} className="text-blue-600" />
    </div>

    <h3 className="text-xl font-bold text-blue-700">
      5000+
    </h3>

    <p className="text-gray-600 text-xs">
      Students Trained
    </p>

  </div>

  {/* Success */}
  <div className="bg-gradient-to-r from-cyan-100 via-blue-50 to-blue-100 rounded-tr-3xl rounded-bl-3xl shadow-md p-3 hover:scale-105 transition">

    <div className="flex justify-center mb-1">
      <Trophy size={24} className="text-yellow-500" />
    </div>

    <h3 className="text-xl font-bold text-orange-500">
      95%
    </h3>

    <p className="text-gray-600 text-xs">
      Success Rate
    </p>

  </div>

  {/* Experience */}
  <div className="bg-gradient-to-r from-cyan-100 via-blue-50 to-blue-100 rounded-tl-3xl rounded-br-3xl shadow-md p-3 hover:scale-105 transition">

    <div className="flex justify-center mb-1">
      <Star size={24} className="text-green-500" />
    </div>

    <h3 className="text-xl font-bold text-green-600">
      15+ Years
    </h3>

    <p className="text-gray-600 text-xs">
      Teaching Excellence
    </p>

  </div>

</div>

      </div>

    </section>
  )
}
