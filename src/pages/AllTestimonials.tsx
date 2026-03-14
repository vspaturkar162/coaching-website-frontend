// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"

// export default function AllTestimonials(){

//   const testimonials = [
//     {
//       parent: "Mr. Sharma",
//       student: "Aarav Sharma",
//       result: "Scored 95% in Board Exams",
//       video: "https://www.youtube.com/embed/LoyQorWRzeQ"
//     },
//     {
//       parent: "Mrs. Reddy",
//       student: "Ananya Reddy",
//       result: "Ranked Top 5 in School",
//       video: "https://www.youtube.com/embed/-uT45ieDmZw"
//     },
//     {
//       parent: "Mrs. Gupta",
//       student: "Rohan Gupta",
//       result: "Improved from 70% to 92%",
//       video: "https://www.youtube.com/embed/jNQXAC9IVRw"
//     },
//     {
//       parent: "Mr. Mehta",
//       student: "Kunal Mehta",
//       result: "Cracked Competitive Entrance",
//       video: "https://www.youtube.com/embed/sCjtxFKVi9c"
//     },
//     {
//       parent: "Mrs. Verma",
//       student: "Sneha Verma",
//       result: "School Topper",
//       video: "https://www.youtube.com/embed/uPWl61i9nMw"
//     },
//     {
//       parent: "Mrs. Nair",
//       student: "Aditya Nair",
//       result: "Improved Maths Score to 98%",
//       video: "https://www.youtube.com/embed/bT5JvqfqQOE"
//     }
//   ]

//   return (
//     <>
//     <Navbar />
//     <section className="py-20 bg-gradient-to-b from-blue-50 to-white min-h-screen">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">

//           <h1 className="text-4xl font-bold text-blue-900">
//             What Parents Say About Us
//           </h1>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             The success of our students is the greatest proof of our teaching.
//             Hear directly from parents about how our coaching helped their
//             children improve confidence, understanding, and exam performance.
//           </p>

//         </div>

//         {/* Testimonial Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {testimonials.map((t, i)=>(
            
//             <div
//               key={i}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
//             >

//               <iframe
//                 src={t.video}
//                 className="w-full h-56"
//                 allowFullScreen
//               />

//               <div className="p-5">

//                 <h3 className="font-semibold text-gray-800">
//                   {t.parent}
//                 </h3>

//                 <p className="text-gray-600 text-sm">
//                   Parent of {t.student}
//                 </p>

//                 <p className="text-blue-700 text-sm font-medium mt-2">
//                   {t.result}
//                 </p>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//     <Footer />
//     </>
//   )
// }

import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const API = "https://coaching-website-backend-0nk3.onrender.com/api/testimonials"

interface Testimonial {
  _id?: string
  studentName: string
  parentName: string
  videoUrl: string
  description: string
  imageUrl: string
}

export default function AllTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then((data: Testimonial[]) => setTestimonials(data))
      .catch(err => console.error("Error loading testimonials:", err))
  }, [])

  // Convert watch URL to embed URL
  const toEmbedUrl = (url: string) => {
    try {
      const videoId = new URL(url).searchParams.get("v")
      return videoId
        ? `https://www.youtube.com/embed/${videoId}`
        : url
    } catch {
      return url
    }
  }

  return (
    <>
      <Navbar />
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-blue-900">
              What Parents Say About Us
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The success of our students is the greatest proof of our teaching.
              Hear directly from parents about how our coaching helped their
              children improve confidence, understanding, and exam performance.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <iframe
                  src={toEmbedUrl(t.videoUrl)}
                  className="w-full h-56"
                  allowFullScreen
                />

                <div className="p-5">
                  <h3 className="font-semibold text-gray-800">{t.parentName}</h3>
                  <p className="text-gray-600 text-sm">Parent of {t.studentName}</p>
                  <p className="text-blue-700 text-sm font-medium mt-2">
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}