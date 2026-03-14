
// import { ChevronRight, Play } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function DemoLectures() {

//   const lectures = [
//     {
//       title: "Trigonometry Basics",
//       teacher: "Prof. Balaji Sampath",
//       id: "anqu3ul9WiI"
//     },
//     {
//       title: "Organic Chemistry Rearrangement",
//       teacher: "Prof. D.P. Sankaran",
//       id: "_l_GOioLd2Q"
//     },
//     {
//       title: "Fundamental Theorem of Arithmetic",
//       teacher: "Prof. Sudha Sridhar",
//       id: "CSjFOGh9gkk"
//     }
//   ]

//   const getThumbnail = (id: string) => {
//     return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
//   }

//   return (
//     <section id="demo" className="w-full py-20 bg-gradient-to-b from-blue-50 to-white">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">

//           <h2 className="text-4xl font-bold text-blue-900">
//             Experience Our Teaching Through Demo Lectures
//           </h2>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Before joining, students and parents can explore our free demo classes.
//             These lectures showcase how our expert faculty simplify complex concepts
//             and make learning engaging and result-oriented.
//           </p>

//         </div>

//         {/* Video Cards */}
//         <div className="grid md:grid-cols-3 gap-10">

//           {lectures.map((lecture, index) => (

//             <a
//               key={index}
//               href={`https://www.youtube.com/watch?v=${lecture.id}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
//             >

//               {/* Thumbnail */}
//               <div className="relative">

//                 <img
//                   src={getThumbnail(lecture.id)}
//                   alt={lecture.title}
//                   className="w-full h-56 object-cover"
//                 />

//                 {/* Play Button */}
//                 <div className="absolute inset-0 flex items-center justify-center">

//                   <div className="relative flex items-center justify-center">

//                     {/* Pulse ring */}
//                     <div className="absolute w-16 h-16 bg-red-400 rounded-full animate-ping opacity-40"></div>

//                     {/* Button */}
//                     <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">

//                       <Play className="text-white fill-white" size={24} />

//                     </div>

//                   </div>

//                 </div>

//               </div>

//               {/* Text */}
//               <div className="p-5">

//                 <h3 className="font-semibold text-lg text-gray-800">
//                   {lecture.title}
//                 </h3>

//                 <p className="text-gray-500 text-sm mt-1">
//                   {lecture.teacher}
//                 </p>

//               </div>

//             </a>

//           ))}

//         </div>

//         {/* View All */}
//         <div className="flex justify-center mt-12">

//           <Link
//             to="/pages/demo-lectures"
//             className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
//           >
//             View All Demo Lectures
//             <ChevronRight size={18} />
//           </Link>

//         </div>

//       </div>

//     </section>
//   )
// }























import { useEffect, useState } from "react"
import { ChevronRight, Play } from "lucide-react"
import { Link } from "react-router-dom"

const API = "https://coaching-website-backend-0nk3.onrender.com/api/demo-lectures"

interface Lecture {
  _id?: string
  title: string
  subject: string
  teacher: string
  className: string
  videoUrl: string
  thumbnail: string
}

const getYouTubeId = (url: string): string => {
  if (!url) return ""
  if (url.includes("/embed/")) return url.split("/embed/")[1].split("?")[0]
  if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split("?")[0]
  const match = url.match(/[?&]v=([^&]+)/)
  return match ? match[1] : ""
}

const getThumbnail = (lecture: Lecture): string => {
  if (lecture.thumbnail && lecture.thumbnail.startsWith("http")) {
    return lecture.thumbnail
  }
  const id = getYouTubeId(lecture.videoUrl)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ""
}

export default function DemoLectures() {
  const [lectures, setLectures] = useState<Lecture[]>([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then((data: Lecture[]) => setLectures(data.slice(0, 3)))
      .catch(err => console.error("Error loading lectures:", err))
  }, [])

  return (
    <section id="demo" className="w-full py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-900">
            Experience Our Teaching Through Demo Lectures
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Before joining, students and parents can explore our free demo classes.
            These lectures showcase how our expert faculty simplify complex concepts
            and make learning engaging and result-oriented.
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {lectures.map((lecture) => (
            <a
              key={lecture._id}
              href={lecture.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={getThumbnail(lecture)}
                  alt={lecture.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-16 h-16 bg-red-400 rounded-full animate-ping opacity-40"></div>
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="text-white fill-white" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800">{lecture.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{lecture.teacher}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-12">
          <Link
            to="/pages/demo-lectures"
            className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
          >
            View All Demo Lectures
            <ChevronRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  )
}









// import { useEffect, useState } from "react"
// import { ChevronRight, Play } from "lucide-react"
// import { Link } from "react-router-dom"

// const API = "https://coaching-website-backend-0nk3.onrender.com/api/demo-lectures"

// interface Lecture {
//   _id?: string
//   title: string
//   subject: string
//   teacher: string
//   className: string
//   videoUrl: string
//   thumbnail: string
// }

// // Extract YouTube video ID from any YouTube URL format
// const getYouTubeId = (url: string): string => {
//   try {
//     const parsed = new URL(url)
//     return parsed.searchParams.get("v") || parsed.pathname.split("/").pop() || ""
//   } catch {
//     return ""
//   }
// }

// const getThumbnail = (url: string) => {
//   const id = getYouTubeId(url)
//   return id
//     ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
//     : ""
// }

// export default function DemoLectures() {
//   const [lectures, setLectures] = useState<Lecture[]>([])

//   useEffect(() => {
//     fetch(API)
//       .then(res => res.json())
//       .then((data: Lecture[]) => setLectures(data.slice(0, 3)))
//       .catch(err => console.error("Error loading lectures:", err))
//   }, [])

//   return (
//     <section id="demo" className="w-full py-20 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-blue-900">
//             Experience Our Teaching Through Demo Lectures
//           </h2>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Before joining, students and parents can explore our free demo classes.
//             These lectures showcase how our expert faculty simplify complex concepts
//             and make learning engaging and result-oriented.
//           </p>
//         </div>

//         {/* Video Cards */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {lectures.map((lecture) => (
//             <a
//               key={lecture._id}
//               href={lecture.videoUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
//             >
//               {/* Thumbnail */}
//               <div className="relative">
//                 <img
//                   src={lecture.thumbnail || getThumbnail(lecture.videoUrl)}
//                   alt={lecture.title}
//                   className="w-full h-56 object-cover"
//                 />

//                 {/* Play Button */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="relative flex items-center justify-center">
//                     <div className="absolute w-16 h-16 bg-red-400 rounded-full animate-ping opacity-40"></div>
//                     <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
//                       <Play className="text-white fill-white" size={24} />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Text */}
//               <div className="p-5">
//                 <h3 className="font-semibold text-lg text-gray-800">{lecture.title}</h3>
//                 <p className="text-gray-500 text-sm mt-1">{lecture.teacher}</p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* View All */}
//         <div className="flex justify-center mt-12">
//           <Link
//             to="/pages/demo-lectures"
//             className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
//           >
//             View All Demo Lectures
//             <ChevronRight size={18} />
//           </Link>
//         </div>

//       </div>
//     </section>
//   )
// }