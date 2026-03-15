// import { useState } from "react"
// import AdminLayout from "../components/AdminLayout"
// import { Upload, Eye, Pencil, Trash } from "lucide-react"

// interface Course {
//   name: string
//   description: string
//   className: string
//   exam: string
//   professor: string
//   duration: string
//   fees: string
//   imageUrl: string
// }

// export default function CoursesManager() {

//   const [courses, setCourses] = useState<Course[]>([])

//   const [form, setForm] = useState<Course>({
//     name: "",
//     description: "",
//     className: "",
//     exam: "",
//     professor: "",
//     duration: "",
//     fees: "",
//     imageUrl: ""
//   })

//   const [preview, setPreview] = useState("")

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value })

//     if (e.target.name === "imageUrl") {
//       setPreview(e.target.value)
//     }
//   }

//   const handleImageUpload = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (!e.target.files) return

//     const file = e.target.files[0]
//     const url = URL.createObjectURL(file)

//     setForm({ ...form, imageUrl: url })
//     setPreview(url)
//   }

//   const addCourse = () => {

//     if (!form.name || !form.className) return

//     setCourses([...courses, form])

//     setForm({
//       name: "",
//       description: "",
//       className: "",
//       exam: "",
//       professor: "",
//       duration: "",
//       fees: "",
//       imageUrl: ""
//     })

//     setPreview("")
//   }

//   const deleteCourse = (index: number) => {
//     setCourses(courses.filter((_, i) => i !== index))
//   }

//   return (
//     <AdminLayout>

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-white to-blue-100 p-4 rounded-lg">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Courses Manager
//         </h1>
//         <p className="text-gray-500">
//           Add and manage courses offered by your coaching institute.
//         </p>
//       </div>


//       {/* ADD COURSE FORM */}
//       <div className=" rounded-xl shadow p-8 mt-6">

//         <h2 className="text-lg font-semibold mb-6">
//           Add New Course
//         </h2>

//         <div className="grid grid-cols-2 gap-6">

//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Course Name"
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
//             name="exam"
//             value={form.exam}
//             onChange={handleChange}
//             placeholder="Exam (JEE / NEET / Boards)"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="professor"
//             value={form.professor}
//             onChange={handleChange}
//             placeholder="Assigned Professor"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="duration"
//             value={form.duration}
//             onChange={handleChange}
//             placeholder="Course Duration (e.g. 6 months)"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="fees"
//             value={form.fees}
//             onChange={handleChange}
//             placeholder="Course Fees"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             placeholder="Course Description"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2"
//           />

//           <input
//             name="imageUrl"
//             value={form.imageUrl}
//             onChange={handleChange}
//             placeholder="Course Image URL"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2"
//           />

//         </div>


//         {/* IMAGE UPLOAD */}
//         <div className="mt-6">

//           <label className="text-sm font-medium text-gray-600">
//             Upload Course Image
//           </label>

//           <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 mt-2 cursor-pointer hover:border-blue-500">

//             <div className="flex items-center gap-2 text-gray-500">
//               <Upload size={18} />
//               Upload Image
//             </div>

//             <input
//               type="file"
//               className="hidden"
//               onChange={handleImageUpload}
//             />

//           </label>

//         </div>


//         {/* IMAGE PREVIEW */}
//         {preview && (
//           <div className="mt-6">

//             <p className="text-sm text-gray-600 mb-2">
//               Image Preview
//             </p>

//             <img
//               src={preview}
//               alt="preview"
//               className="h-24 rounded-lg shadow"
//             />

//           </div>
//         )}


//         {/* BUTTON */}
//         <button
//           onClick={addCourse}
//           className="mt-6 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white px-6 py-2 rounded-lg"
//         >
//           Add Course
//         </button>

//       </div>


//       {/* COURSE LIST */}
//       <div className=" rounded-xl shadow p-8 mt-8">

//         <h2 className="text-lg font-semibold mb-6">
//           Available Courses
//         </h2>

//         <div className="grid grid-cols-3 gap-6">

//           {courses.map((course, index) => (

//             <div
//               key={index}
//               className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//             >

//               {course.imageUrl && (
//                 <img
//                   src={course.imageUrl}
//                   className="h-36 w-full object-cover"
//                 />
//               )}

//               <div className="p-4">

//                 <h3 className="font-semibold text-lg">
//                   {course.name}
//                 </h3>

//                 <p className="text-sm text-gray-500">
//                   Class {course.className}
//                 </p>

//                 <p className="text-sm text-gray-500">
//                   {course.exam}
//                 </p>

//                 <p className="text-sm text-gray-500">
//                   Prof: {course.professor}
//                 </p>

//                 <p className="text-sm text-gray-500">
//                   Duration: {course.duration}
//                 </p>

//                 <p className="text-blue-600 font-semibold">
//                   Fees: ₹{course.fees}
//                 </p>

//                 <div className="flex gap-3 mt-3">

//                   <Eye
//                     className="text-blue-600 cursor-pointer"
//                     size={18}
//                   />

//                   <Pencil
//                     className="text-green-600 cursor-pointer"
//                     size={18}
//                   />

//                   <Trash
//                     className="text-red-600 cursor-pointer"
//                     size={18}
//                     onClick={() => deleteCourse(index)}
//                   />

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//     </AdminLayout>
//   )
// }

import { useState, useEffect } from "react"
import AdminLayout from "../components/AdminLayout"
import { Upload, Eye, Pencil, Trash } from "lucide-react"

const API = "https://coaching-website-backend-0nk3.onrender.com/api/courses"

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

const emptyForm: Course = {
  name: "", description: "", className: "",
  exam: "", professor: "", duration: "", fees: "", imageUrl: ""
}

export default function CoursesManager() {
  const [courses, setCourses] = useState<Course[]>([])
  const [form, setForm] = useState<Course>(emptyForm)
  const [preview, setPreview] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error("Error loading courses:", err))
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (e.target.name === "imageUrl") setPreview(e.target.value)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const url = URL.createObjectURL(e.target.files[0])
    setForm({ ...form, imageUrl: url })
    setPreview(url)
  }

  const saveCourse = async () => {
    if (!form.name || !form.className) return

    try {
      if (isEditing && form._id) {
        const res = await fetch(`${API}/${form._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        })
        const updated = await res.json()
        setCourses(prev => prev.map(c => c._id === updated._id ? updated : c))
      } else {
        const res = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        })
        const data = await res.json()
        setCourses(prev => [...prev, data])
      }
    } catch (err) {
      console.error("Error saving course:", err)
    }

    setForm(emptyForm)
    setPreview("")
    setIsEditing(false)
  }

  const deleteCourse = async (course: Course) => {
    if (!course._id) return
    try {
      await fetch(`${API}/${course._id}`, { method: "DELETE" })
      setCourses(prev => prev.filter(c => c._id !== course._id))
    } catch (err) {
      console.error("Error deleting course:", err)
    }
  }

  const startEdit = (course: Course) => {
    setForm(course)
    setPreview(course.imageUrl)
    setIsEditing(true)
  }

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-white to-blue-100 p-4 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">Courses Manager</h1>
        <p className="text-gray-500">
          Add and manage courses offered by your coaching institute.
        </p>
      </div>

      {/* ADD / EDIT FORM */}
      <div className="rounded-xl shadow p-8 mt-6">
        <h2 className="text-lg font-semibold mb-6">
          {isEditing ? "Edit Course" : "Add New Course"}
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <input name="name" value={form.name} onChange={handleChange}
            placeholder="Course Name"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input name="className" value={form.className} onChange={handleChange}
            placeholder="Class (10th / 11th / 12th)"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input name="exam" value={form.exam} onChange={handleChange}
            placeholder="Exam (JEE / NEET / Boards)"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input name="professor" value={form.professor} onChange={handleChange}
            placeholder="Assigned Professor"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input name="duration" value={form.duration} onChange={handleChange}
            placeholder="Course Duration (e.g. 6 months)"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input name="fees" value={form.fees} onChange={handleChange}
            placeholder="Course Fees"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <textarea name="description" value={form.description} onChange={handleChange}
            placeholder="Course Description"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2" />

          <input name="imageUrl" value={form.imageUrl} onChange={handleChange}
            placeholder="Course Image URL"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2" />
        </div>

        {/* IMAGE UPLOAD */}
        <div className="mt-6">
          <label className="text-sm font-medium text-gray-600">Upload Course Image</label>
          <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 mt-2 cursor-pointer hover:border-blue-500">
            <div className="flex items-center gap-2 text-gray-500">
              <Upload size={18} /> Upload Image
            </div>
            <input type="file" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>

        {preview && (
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-2">Image Preview</p>
            <img src={preview} alt="preview" className="h-24 rounded-lg shadow" />
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <button onClick={saveCourse}
            className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white px-6 py-2 rounded-lg">
            {isEditing ? "Update Course" : "Add Course"}
          </button>

          {isEditing && (
            <button
              onClick={() => { setForm(emptyForm); setPreview(""); setIsEditing(false) }}
              className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg">
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* COURSE LIST */}
      <div className="rounded-xl shadow p-8 mt-8">
        <h2 className="text-lg font-semibold mb-6">Available Courses</h2>

        <div className="grid grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">

              {course.imageUrl && (
                <img src={course.imageUrl} className="h-36 w-full object-cover" />
              )}

              <div className="p-4">
                <h3 className="font-semibold text-lg">{course.name}</h3>
                <p className="text-sm text-gray-500">Class {course.className}</p>
                <p className="text-sm text-gray-500">{course.exam}</p>
                <p className="text-sm text-gray-500">Prof: {course.professor}</p>
                <p className="text-sm text-gray-500">Duration: {course.duration}</p>
                <p className="text-blue-600 font-semibold">Fees: ₹{course.fees}</p>

                <div className="flex gap-3 mt-3">
                  <Eye className="text-blue-600 cursor-pointer" size={18}
                    onClick={() => alert(`${course.name}\n${course.description}`)} />
                  <Pencil className="text-green-600 cursor-pointer" size={18}
                    onClick={() => startEdit(course)} />
                  <Trash className="text-red-600 cursor-pointer" size={18}
                    onClick={() => deleteCourse(course)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </AdminLayout>
  )
}