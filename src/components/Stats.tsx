// import { Users, Trophy, Star } from "lucide-react"
// import { useEffect, useState } from "react"
// interface StatsData {
//   students: string
//   selections: string
//   experience: string
//   successRate: string
//   courses: string
//   batches: string
//   faculty: string
// }
// export default function Stats() {
//   const [stats, setStats] = useState<StatsData | null>(null)
//   useEffect(() => {

//   fetch("https://coaching-backend.onrender.com/api/stats")
//     .then(res => res.json())
//     .then(data => setStats(data))
//     .catch(err => console.error(err))

// }, [])
//   return (
//     <section className="w-full bg-white py-6 px-6">

//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
//           Our Achievements
//         </h2>

//         {/* Stats Grid */}
//         <div className="grid md:grid-cols-3 gap-4 text-center">

//   {/* Students */}
//   <div className="bg-gradient-to-r from-cyan-100 via-blue-50 to-blue-100 rounded-tl-3xl rounded-br-3xl shadow-md p-3 hover:scale-105 transition">

//     <div className="flex justify-center mb-1">
//       <Users size={24} className="text-blue-600" />
//     </div>

//     <h3 className="text-xl font-bold text-blue-700">
//       {stats?.students || "0"}+
//     </h3>

//     <p className="text-gray-600 text-xs">
//       Students Trained
//     </p>

//   </div>

//   {/* Success */}
//   <div className="bg-gradient-to-r from-cyan-100 via-blue-50 to-blue-100 rounded-tr-3xl rounded-bl-3xl shadow-md p-3 hover:scale-105 transition">

//     <div className="flex justify-center mb-1">
//       <Trophy size={24} className="text-yellow-500" />
//     </div>

//     <h3 className="text-xl font-bold text-orange-500">
//       {stats?.successRate || "0"}%
//     </h3>

//     <p className="text-gray-600 text-xs">
//       Success Rate
//     </p>

//   </div>

//   {/* Experience */}
//   <div className="bg-gradient-to-r from-cyan-100 via-blue-50 to-blue-100 rounded-tl-3xl rounded-br-3xl shadow-md p-3 hover:scale-105 transition">

//     <div className="flex justify-center mb-1">
//       <Star size={24} className="text-green-500" />
//     </div>

//     <h3 className="text-xl font-bold text-green-600">
//       {stats?.experience || "0"}+ Years
//     </h3>

//     <p className="text-gray-600 text-xs">
//       Teaching Excellence
//     </p>

//   </div>

// </div>

//       </div>

//     </section>
//   )
// }




import { Users, Trophy, Star } from "lucide-react"
import { useEffect, useState } from "react"

const API = "https://coaching-website-backend-0nk3.onrender.com/api/stats"

interface StatsData {
  students: string
  selections: string
  experience: string
  successRate: string
  courses: string
  batches: string
  faculty: string
}

export default function Stats() {
  const [stats, setStats] = useState<StatsData | null>(null)

  useEffect(() => {
    fetch(API)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then(data => setStats(data))
      .catch(err => console.error("Error loading stats:", err))
  }, [])

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
              {stats?.students || "0"}+
            </h3>
            <p className="text-gray-600 text-xs">Students Trained</p>
          </div>

          {/* Success Rate */}
          <div className="bg-gradient-to-r from-cyan-100 via-blue-50 to-blue-100 rounded-tr-3xl rounded-bl-3xl shadow-md p-3 hover:scale-105 transition">
            <div className="flex justify-center mb-1">
              <Trophy size={24} className="text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-orange-500">
              {stats?.successRate || "0"}%
            </h3>
            <p className="text-gray-600 text-xs">Success Rate</p>
          </div>

          {/* Experience */}
          <div className="bg-gradient-to-r from-cyan-100 via-blue-50 to-blue-100 rounded-tl-3xl rounded-br-3xl shadow-md p-3 hover:scale-105 transition">
            <div className="flex justify-center mb-1">
              <Star size={24} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-green-600">
              {stats?.experience || "0"}+ Years
            </h3>
            <p className="text-gray-600 text-xs">Teaching Excellence</p>
          </div>

        </div>
      </div>
    </section>
  )
}