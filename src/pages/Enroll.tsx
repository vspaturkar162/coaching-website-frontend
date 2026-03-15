
// import { useState } from "react"
// import { X, Calendar, Clock } from "lucide-react"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"

// export default function Enroll() {

//   const courses = [
//     "8th Foundation",
//     "9th Foundation",
//     "10th SSC",
//     "11th Science",
//     "12th Science"
//   ]

//   const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: ""
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     alert("Form submitted successfully!")

//     setSelectedCourse(null)

//     setForm({
//       name: "",
//       phone: "",
//       email: ""
//     })
//   }

//   return (
//     <>
//       <Navbar />

//       <section className="py-20 bg-gradient-to-b from-white to-blue-100 min-h-screen">

//         {/* Title */}
//         <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
//           Enroll in Our Courses
//         </h1>

//         {/* Courses */}
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10 px-6">

//   {/* SIDEBAR */}
//   <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-6 h-fit lg:sticky lg:top-24">

//     <h3 className="text-xl font-bold text-blue-900 mb-6">
//       Our Courses
//     </h3>

//     <div className="space-y-4 text-sm text-gray-700">

//       <div className="border-b pb-3">
//         <p className="font-semibold">8th Foundation</p>
//         <p className="text-gray-500">Basic Science & Math Concepts</p>
//       </div>

//       <div className="border-b pb-3">
//         <p className="font-semibold">9th Foundation</p>
//         <p className="text-gray-500">Strong Board Preparation</p>
//       </div>

//       <div className="border-b pb-3">
//         <p className="font-semibold">10th SSC</p>
//         <p className="text-gray-500">Board Exam Excellence</p>
//       </div>

//       <div className="border-b pb-3">
//         <p className="font-semibold">11th Science</p>
//         <p className="text-gray-500">Physics • Chemistry • Maths</p>
//       </div>

//       <div className="pb-3">
//         <p className="font-semibold">12th Science</p>
//         <p className="text-gray-500">Board + Competitive Exams</p>
//       </div>

//     </div>


//     {/* Faculty Section */}
//     <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
//       Expert Faculty
//     </h3>

//     <div className="space-y-3 text-sm text-gray-700">

//       <div>
//         <p className="font-semibold">Prof. Balaji Sampath</p>
//         <p className="text-gray-500">Mathematics Expert</p>
//       </div>

//       <div>
//         <p className="font-semibold">Prof. D.P. Sankaran</p>
//         <p className="text-gray-500">Organic Chemistry Specialist</p>
//       </div>

//       <div>
//         <p className="font-semibold">Prof. Sudha Sridhar</p>
//         <p className="text-gray-500">Physics Faculty</p>
//       </div>

//     </div>


//     {/* Why Choose */}
//     <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4">

//       <h4 className="font-semibold text-blue-900 mb-2">
//         Why Choose Us
//       </h4>

//       <ul className="text-sm text-gray-600 space-y-1">
//         <li>✔ Small Batch Size</li>
//         <li>✔ Weekly Tests</li>
//         <li>✔ Doubt Solving</li>
//         <li>✔ Board + Competitive Prep</li>
//       </ul>

//     </div>

//   </div>


//   {/* COURSE CARDS (YOUR ORIGINAL CODE) */}
//   <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">

//     {courses.map((course, i) => (

//       <div
//         key={i}
//         className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
//       >

//         {/* Header */}
//         <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-6 flex items-center gap-4">

//           <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-2xl">
//             🎓
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold text-black">
//               {course}
//             </h2>

//             <p className="text-sm font-semibold text-gray-800">
//               IIT JEE + CBSE + NEET
//             </p>
//           </div>

//         </div>

//         {/* Schedule */}
//         <div className="p-6">

//           <div className="border rounded-xl p-4 bg-gray-50">

//             <div className="flex justify-between items-center mb-3">

//               <h3 className="font-semibold text-gray-800">
//                 Class Schedule
//               </h3>

//               <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
//                 Batch: P3
//               </span>

//             </div>

//             <div className="flex items-center gap-2 text-gray-600 mb-2">
//               <Calendar size={16} />
//               Saturday
//             </div>

//             <div className="flex items-center gap-2 text-gray-600">
//               <Clock size={16} />
//               6.00 pm – 9.00 pm
//             </div>

//           </div>

//         </div>

//         {/* Enroll */}
//         <div className="border-t p-4 text-center">

//           <button
//             onClick={() => setSelectedCourse(course)}
//             className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-2 rounded-full shadow hover:scale-105 transition"
//           >
//             Enroll Now
//           </button>

//         </div>

//       </div>

//     ))}

//   </div>

// </div>


//         {/* Popup Form */}
//         {selectedCourse && (

//           <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

//             <div className="bg-gradient-to-r from-blue-200 via-teal-50 to-sky-100 rounded-xl shadow-2xl w-full max-w-md p-8 relative">

//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedCourse(null)}
//                 className="absolute right-4 top-4 text-gray-500 hover:text-red-500"
//               >
//                 <X size={22} />
//               </button>

//               <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
//                 Enroll for {selectedCourse}
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-4">

//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   required
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   required
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email"
//                   required
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
//                 />

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
//                 >
//                   Submit Enrollment
//                 </button>

//               </form>

//             </div>

//           </div>

//         )}

//       </section>

//       <Footer />
//     </>
//   )
// }


import { useEffect, useState } from "react"
import { X, Calendar, Clock } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const COURSES_API = "https://coaching-website-backend-0nk3.onrender.com/api/courses"
const ENROLL_API  = "https://coaching-website-backend-0nk3.onrender.com/api/enrollments"

interface Course {
  _id?: string
  name: string
  description: string
  className: string
  exam: string
  professor: string
  duration: string
  fees: string
  imageUrl: string
}

export default function Enroll() {
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [form, setForm] = useState({ name: "", phone: "", email: "" })
  const [submitting, setSubmitting] = useState(false)

  // Fetch courses from API — reflects admin changes
  useEffect(() => {
    fetch(COURSES_API)
      .then(res => res.json())
      .then((data: Course[]) => setCourses(data))
      .catch(err => console.error("Error loading courses:", err))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch(ENROLL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, course: selectedCourse })
      })

      if (!res.ok) throw new Error("Failed to submit")

      alert("Enrollment submitted successfully!")
      setSelectedCourse(null)
      setForm({ name: "", phone: "", email: "" })
    } catch (err) {
      console.error("Enrollment error:", err)
      alert("Failed to submit. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-white to-blue-100 min-h-screen">

        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Enroll in Our Courses
        </h1>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10 px-6">

          {/* SIDEBAR — static content, no changes */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-6 h-fit lg:sticky lg:top-24">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Our Courses</h3>

            <div className="space-y-4 text-sm text-gray-700">
              {courses.length > 0 ? (
                courses.map(course => (
                  <div key={course._id} className="border-b pb-3 last:border-b-0">
                    <p className="font-semibold">{course.name}</p>
                    <p className="text-gray-500">{course.description || course.exam}</p>
                  </div>
                ))
              ) : (
                <>
                  <div className="border-b pb-3">
                    <p className="font-semibold">8th Foundation</p>
                    <p className="text-gray-500">Basic Science & Math Concepts</p>
                  </div>
                  <div className="border-b pb-3">
                    <p className="font-semibold">9th Foundation</p>
                    <p className="text-gray-500">Strong Board Preparation</p>
                  </div>
                  <div className="border-b pb-3">
                    <p className="font-semibold">10th SSC</p>
                    <p className="text-gray-500">Board Exam Excellence</p>
                  </div>
                  <div className="border-b pb-3">
                    <p className="font-semibold">11th Science</p>
                    <p className="text-gray-500">Physics • Chemistry • Maths</p>
                  </div>
                  <div className="pb-3">
                    <p className="font-semibold">12th Science</p>
                    <p className="text-gray-500">Board + Competitive Exams</p>
                  </div>
                </>
              )}
            </div>

            <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">Expert Faculty</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold">Prof. Balaji Sampath</p>
                <p className="text-gray-500">Mathematics Expert</p>
              </div>
              <div>
                <p className="font-semibold">Prof. D.P. Sankaran</p>
                <p className="text-gray-500">Organic Chemistry Specialist</p>
              </div>
              <div>
                <p className="font-semibold">Prof. Sudha Sridhar</p>
                <p className="text-gray-500">Physics Faculty</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Why Choose Us</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✔ Small Batch Size</li>
                <li>✔ Weekly Tests</li>
                <li>✔ Doubt Solving</li>
                <li>✔ Board + Competitive Prep</li>
              </ul>
            </div>
          </div>

          {/* COURSE CARDS — now from API */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-6 flex items-center gap-4">
                  <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black">{course.name}</h2>
                    <p className="text-sm font-semibold text-gray-800">
                      {course.exam || "IIT JEE + CBSE + NEET"}
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="p-6">
                  <div className="border rounded-xl p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-gray-800">Class Schedule</h3>
                      <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                        {course.duration || "Batch: P3"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Calendar size={16} />
                      {course.professor || "Saturday"}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      {course.fees ? `Fees: ₹${course.fees}` : "6.00 pm – 9.00 pm"}
                    </div>
                  </div>
                </div>

                {/* Enroll Button */}
                <div className="border-t p-4 text-center">
                  <button
                    onClick={() => setSelectedCourse(course.name)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-2 rounded-full shadow hover:scale-105 transition"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POPUP FORM */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-gradient-to-r from-blue-200 via-teal-50 to-sky-100 rounded-xl shadow-2xl w-full max-w-md p-8 relative">

              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute right-4 top-4 text-gray-500 hover:text-red-500"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
                Enroll for {selectedCourse}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Full Name" required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400" />

                <input type="tel" placeholder="Phone Number" required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400" />

                <input type="email" placeholder="Email" required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400" />

                <button type="submit" disabled={submitting}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-60">
                  {submitting ? "Submitting..." : "Submit Enrollment"}
                </button>
              </form>
            </div>
          </div>
        )}

      </section>
      <Footer />
    </>
  )
}