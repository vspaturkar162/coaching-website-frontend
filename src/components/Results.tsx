
import { Link } from "react-router-dom"
import { Star, Trophy, ChevronRight } from "lucide-react"

const students10 = [
  { name: "Sachin", marks: "97%" },
  { name: "Shruti", marks: "97%" },
  { name: "Aman", marks: "96%" },
  { name: "Priya", marks: "96%" },
  { name: "Rahul", marks: "95%" },
]

const students12 = [
  { name: "Rohan", marks: "98%" },
  { name: "Sneha", marks: "97%" },
  { name: "Akash", marks: "96%" },
  { name: "Neha", marks: "95%" },
  { name: "Arjun", marks: "94%" },
]

export default function Results() {

  return (
    <section id="results" className="w-full py-16 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= 10th RESULTS ================= */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-8">

  <div className="flex items-center gap-2 text-yellow-700 text-lg md:text-xl font-bold">
    <Trophy size={20}/>
    SSC 10th Results 2025
  </div>

  <Link
    to="/pages/results"
    className="flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-900 text-sm md:text-base"
  >
    View All Results <ChevronRight size={18}/>
  </Link>

</div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">

          {students10.map((s, index) => (

            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center p-5"
            >

              {/* Rank */}
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                Rank {index + 1}
              </div>

              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-md">

                <img
                  src={`https://randomuser.me/api/portraits/${index % 2 ? "women" : "men"}/${30 + index}.jpg`}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Marks */}
              <div
                className="text-3xl font-black mb-1"
                style={{ fontFamily: "'Rajdhani', sans-serif", color: "#1a2a6c" }}
              >
                {s.marks}
              </div>

              <p className="font-semibold text-gray-800 text-sm mb-1">
                {s.name}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-0.5">

                {[1,2,3,4,5].map((star)=>(
                  <Star key={star} size={10} className="text-yellow-400 fill-yellow-400"/>
                ))}

              </div>

            </div>

          ))}

        </div>


        {/* ================= 12th RESULTS ================= */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-8">

  <div className="flex items-center gap-2 text-yellow-700 text-lg md:text-xl font-bold">
    <Trophy size={20}/>
    HSC 12th Results 2025
  </div>

  <Link
    to="/pages/results"
    className="flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-900 text-sm md:text-base"
  >
    View All Results <ChevronRight size={18}/>
  </Link>

</div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {students12.map((s, index) => (

            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center p-5"
            >

              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                Rank {index + 1}
              </div>

              <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-md">

                <img
                  src={`https://randomuser.me/api/portraits/${index % 2 ? "women" : "men"}/${40 + index}.jpg`}
                  className="w-full h-full object-cover"
                />

              </div>

              <div
                className="text-3xl font-black mb-1"
                style={{ fontFamily: "'Rajdhani', sans-serif", color: "#1a2a6c" }}
              >
                {s.marks}
              </div>

              <h2 className="font-semibold text-gray-800 mb-1">
                {s.name}
              </h2>

              <div className="flex justify-center gap-0.5">

                {[1,2,3,4,5].map((star)=>(
                  <Star key={star} size={10} className="text-yellow-400 fill-yellow-400"/>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}