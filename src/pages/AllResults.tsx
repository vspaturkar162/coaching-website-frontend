import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Trophy, Star } from "lucide-react"

import { Link } from "react-router-dom"

interface Result {
  _id?: string
  name: string
  className: string
  rank: string
  percentage: string
  imageUrl: string
}

export default function AllResults() {
const [results, setResults] = useState<Result[]>([])
const tenthResults = results.filter(
  r => r.className.toLowerCase().includes("10")
)

const twelfthResults = results.filter(
  r => r.className.toLowerCase().includes("12")
)
useEffect(() => {
  fetch("https://coaching-website-backend-0nk3.onrender.com/api/results")
    .then(res => res.json())
    .then(data => setResults(data))
    .catch(err => console.error("Error loading results:", err))
}, [])
  return (
    <>
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">

        {/* Page Heading */}
        <div className="text-center mb-16 px-6">

          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Outstanding Academic Results
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our coaching institute has consistently produced top performers
            in board examinations. With expert faculty, structured learning,
            and personalized mentoring, our students achieve exceptional
            results every year.
          </p>

        </div>


        {/* ================= 10TH RESULTS ================= */}

        <div className="max-w-6xl mx-auto mb-20 px-6">

          <div className="flex items-center justify-center gap-2 text-yellow-700 font-bold text-2xl mb-6">

            <Trophy size={24} />
            SSC 10th Board Results 2025

          </div>

          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Our SSC students consistently achieve excellent board results
            through strong fundamentals and disciplined preparation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {tenthResults.map((student:Result, i:number)  => (

              <div
                key={student._id || i}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 text-center p-5 border border-gray-100"
              >

                {/* Rank Badge */}
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                  Rank {i + 1}
                </div>

                <img
                  src={student.imageUrl}
                  className="w-20 h-20 mx-auto rounded-full mb-3 shadow"
                />

                <h3 className="font-semibold text-gray-800">
                  {student.name}
                </h3>

                <p className="text-2xl font-bold text-blue-900 mb-1">
                  {student.percentage}%
                </p>

                <div className="flex justify-center">

                  {[1,2,3,4,5].map((star)=>(
                    <Star
                      key={star}
                      size={12}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>



        {/* ================= 12TH RESULTS ================= */}

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center justify-center gap-2 text-yellow-700 font-bold text-2xl mb-6">

            <Trophy size={24} />
            HSC 12th Board Results 2025

          </div>

          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Our HSC Science batch produces outstanding results every year.
            Many of our students secure top marks in Physics, Chemistry,
            Mathematics, and Biology.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {twelfthResults.map((student:Result, i:number) => (

              <div
                key={i}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 text-center p-5 border border-gray-100"
              >

                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                  Rank {i + 1}
                </div>

                <img
                  src={student.imageUrl}
                  className="w-20 h-20 mx-auto rounded-full mb-3 shadow"
                />

                <h3 className="font-semibold text-gray-800">
                  {student.name}
                </h3>

                <p className="text-2xl font-bold text-blue-900 mb-1">
                  {student.percentage}%
                </p>

                <div className="flex justify-center">

                  {[1,2,3,4,5].map((star)=>(
                    <Star
                      key={star}
                      size={12}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>



        {/* Bottom CTA */}

        <div className="text-center mt-20 px-6">

          <h2 className="text-2xl font-semibold text-blue-900 mb-3">
            Your Child Could Be Our Next Topper
          </h2>

          <p className="text-gray-600 mb-6">
            Join our coaching programs designed to help students excel in
            board exams and competitive entrance tests.
          </p>

            <div className="flex justify-center">

            <Link
              to="/pages/enroll"
              className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500
              text-white font-semibold text-lg
              px-10 py-4 rounded-full
              shadow-xl shadow-orange-500/40
              hover:scale-110 hover:shadow-2xl hover:shadow-red-500/40
              transition-all duration-300 ease-in-out"
            >
              Enroll Now
            </Link>

          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}