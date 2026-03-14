// import { useState } from "react"
// import AdminLayout from "../components/AdminLayout"
// import {
//   Upload,
//   Eye,
//   Trash,
//   Folder
// } from "lucide-react"

// interface Lecture {
//   title: string
//   subject: string
//   teacher: string
//   className: string
//   videoUrl: string
//   thumbnail: string
// }

// export default function DemoLecturesManager() {

//   const [lectures, setLectures] = useState<Lecture[]>([])

//   const [form, setForm] = useState<Lecture>({
//     title: "",
//     subject: "",
//     teacher: "",
//     className: "",
//     videoUrl: "",
//     thumbnail: ""
//   })

//   const [preview, setPreview] = useState("")

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleThumbnailUpload = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (!e.target.files) return

//     const file = e.target.files[0]
//     const url = URL.createObjectURL(file)

//     setForm({ ...form, thumbnail: url })
//     setPreview(url)
//   }

//   const addLecture = () => {

//     if (!form.title || !form.subject) return

//     setLectures([...lectures, form])

//     setForm({
//       title: "",
//       subject: "",
//       teacher: "",
//       className: "",
//       videoUrl: "",
//       thumbnail: ""
//     })

//     setPreview("")
//   }

//   const deleteLecture = (index: number) => {
//     setLectures(lectures.filter((_, i) => i !== index))
//   }

//   const subjects = [...new Set(lectures.map(l => l.subject))]

//   return (
//     <AdminLayout>

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-white to-blue-100 p-4 rounded-lg">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Demo Lectures Manager
//         </h1>
//         <p className="text-gray-500">
//           Upload and manage demo lectures for each subject.
//         </p>
//       </div>


//       {/* ADD LECTURE FORM */}
//       <div className=" rounded-xl shadow p-8 mt-6">

//         <h2 className="text-lg font-semibold mb-6">
//           Add Demo Lecture
//         </h2>

//         <div className="grid grid-cols-2 gap-6">

//           <input
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             placeholder="Lecture Title"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="subject"
//             value={form.subject}
//             onChange={handleChange}
//             placeholder="Subject (Maths / Physics / Chemistry)"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="teacher"
//             value={form.teacher}
//             onChange={handleChange}
//             placeholder="Teacher Name"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="className"
//             value={form.className}
//             onChange={handleChange}
//             placeholder="Class (10th / 11th / 12th)"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="videoUrl"
//             value={form.videoUrl}
//             onChange={handleChange}
//             placeholder="YouTube Video URL"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2"
//           />

//         </div>


//         {/* THUMBNAIL UPLOAD */}
//         <div className="mt-6">

//           <label className="text-sm font-medium text-gray-600">
//             Upload Thumbnail
//           </label>

//           <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 mt-2 cursor-pointer hover:border-blue-500">

//             <div className="flex items-center gap-2 text-gray-500">
//               <Upload size={18}/>
//               Upload Thumbnail
//             </div>

//             <input
//               type="file"
//               className="hidden"
//               onChange={handleThumbnailUpload}
//             />

//           </label>

//         </div>


//         {/* PREVIEW */}
//         {preview && (
//           <div className="mt-6">

//             <p className="text-sm text-gray-600 mb-2">
//               Thumbnail Preview
//             </p>

//             <img
//               src={preview}
//               className="h-24 rounded-lg shadow"
//             />

//           </div>
//         )}


//         {/* BUTTON */}
//         <button
//           onClick={addLecture}
//           className="mt-6 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white px-6 py-2 rounded-lg"
//         >
//           Add Lecture
//         </button>

//       </div>



//       {/* SUBJECT FOLDERS */}
//       <div className=" rounded-xl shadow p-8 mt-8">

//         <h2 className="bg-gradient-to-r from-white to-blue-100 text-lg font-semibold mb-6">
//           Demo Lecture Library
//         </h2>

//         {subjects.length === 0 && (
//           <p className="text-gray-400">
//             No lectures added yet.
//           </p>
//         )}

//         {subjects.map((subject, i) => (

//           <div key={i} className="mb-8">

//             {/* SUBJECT HEADER */}
//             <div className="flex items-center gap-2 mb-4 text-blue-700 font-semibold">

//               <Folder size={20}/>
//               {subject}

//             </div>

//             <div className="grid grid-cols-3 gap-6">

//               {lectures
//                 .filter(l => l.subject === subject)
//                 .map((lecture, index) => (

//                 <div
//                   key={index}
//                   className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//                 >

//                   {lecture.thumbnail && (
//                     <img
//                       src={lecture.thumbnail}
//                       className="h-36 w-full object-cover"
//                     />
//                   )}

//                   <div className="p-4">

//                     <h3 className="font-semibold">
//                       {lecture.title}
//                     </h3>

//                     <p className="text-sm text-gray-500">
//                       {lecture.teacher}
//                     </p>

//                     <p className="text-sm text-gray-400">
//                       Class {lecture.className}
//                     </p>

//                     <div className="flex gap-3 mt-3">

//                       <a
//                         href={lecture.videoUrl}
//                         target="_blank"
//                         className="text-blue-600"
//                       >
//                         <Eye size={18}/>
//                       </a>

//                       <Trash
//                         size={18}
//                         className="text-red-600 cursor-pointer"
//                         onClick={() => deleteLecture(index)}
//                       />

//                     </div>

//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>

//         ))}

//       </div>

//     </AdminLayout>
//   )
// }


import { useState } from "react"
import AdminLayout from "../components/AdminLayout"
import {
  Upload,
  Eye,
  Trash,
  Folder
} from "lucide-react"

interface Lecture {
  title: string
  subject: string
  teacher: string
  className: string
  videoUrl: string
  thumbnail: string
}

export default function DemoLecturesManager() {

  const [lectures, setLectures] = useState<Lecture[]>([])

  const [form, setForm] = useState<Lecture>({
    title: "",
    subject: "",
    teacher: "",
    className: "",
    videoUrl: "",
    thumbnail: ""
  })

  const [preview, setPreview] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleThumbnailUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return

    const file = e.target.files[0]
    const url = URL.createObjectURL(file)

    setForm({ ...form, thumbnail: url })
    setPreview(url)
  }

  const addLecture = () => {

    if (!form.title || !form.subject) return

    setLectures([...lectures, form])

    setForm({
      title: "",
      subject: "",
      teacher: "",
      className: "",
      videoUrl: "",
      thumbnail: ""
    })

    setPreview("")
  }

  const deleteLecture = (index: number) => {
    setLectures(lectures.filter((_, i) => i !== index))
  }

  const subjects = [...new Set(lectures.map(l => l.subject))]

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-white to-blue-100 p-4 rounded-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Demo Lectures Manager
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Upload and manage demo lectures for each subject.
        </p>
      </div>


      {/* ADD LECTURE FORM */}
      <div className="rounded-xl shadow p-6 sm:p-8 mt-6">

        <h2 className="text-lg font-semibold mb-6">
          Add Demo Lecture
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Lecture Title"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject (Maths / Physics / Chemistry)"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="teacher"
            value={form.teacher}
            onChange={handleChange}
            placeholder="Teacher Name"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="className"
            value={form.className}
            onChange={handleChange}
            placeholder="Class (10th / 11th / 12th)"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="videoUrl"
            value={form.videoUrl}
            onChange={handleChange}
            placeholder="YouTube Video URL"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none sm:col-span-2"
          />

        </div>


        {/* THUMBNAIL UPLOAD */}
        <div className="mt-6">

          <label className="text-sm font-medium text-gray-600">
            Upload Thumbnail
          </label>

          <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 mt-2 cursor-pointer hover:border-blue-500">

            <div className="flex items-center gap-2 text-gray-500">
              <Upload size={18}/>
              Upload Thumbnail
            </div>

            <input
              type="file"
              className="hidden"
              onChange={handleThumbnailUpload}
            />

          </label>

        </div>


        {/* PREVIEW */}
        {preview && (
          <div className="mt-6">

            <p className="text-sm text-gray-600 mb-2">
              Thumbnail Preview
            </p>

            <img
              src={preview}
              className="h-24 w-auto rounded-lg shadow object-contain"
            />

          </div>
        )}


        {/* BUTTON */}
        <button
          onClick={addLecture}
          className="mt-6 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white px-6 py-2 rounded-lg w-full sm:w-auto"
        >
          Add Lecture
        </button>

      </div>



      {/* SUBJECT FOLDERS */}
      <div className="rounded-xl shadow p-6 sm:p-8 mt-8">

        <h2 className="bg-gradient-to-r from-white to-blue-100 text-lg font-semibold mb-6">
          Demo Lecture Library
        </h2>

        {subjects.length === 0 && (
          <p className="text-gray-400">
            No lectures added yet.
          </p>
        )}

        {subjects.map((subject, i) => (

          <div key={i} className="mb-8">

            {/* SUBJECT HEADER */}
            <div className="flex items-center gap-2 mb-4 text-blue-700 font-semibold">

              <Folder size={20}/>
              {subject}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {lectures
                .filter(l => l.subject === subject)
                .map((lecture, index) => (

                <div
                  key={index}
                  className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >

                  {lecture.thumbnail && (
                    <img
                      src={lecture.thumbnail}
                      className="h-36 w-full object-cover"
                    />
                  )}

                  <div className="p-4">

                    <h3 className="font-semibold">
                      {lecture.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {lecture.teacher}
                    </p>

                    <p className="text-sm text-gray-400">
                      Class {lecture.className}
                    </p>

                    <div className="flex gap-3 mt-3">

                      <a
                        href={lecture.videoUrl}
                        target="_blank"
                        className="text-blue-600"
                      >
                        <Eye size={18}/>
                      </a>

                      <Trash
                        size={18}
                        className="text-red-600 cursor-pointer"
                        onClick={() => deleteLecture(index)}
                      />

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </AdminLayout>
  )
}
