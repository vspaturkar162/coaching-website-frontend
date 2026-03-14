// import { useState } from "react"
// import AdminLayout from "../components/AdminLayout"
// import { Upload, Eye, Pencil, Trash } from "lucide-react"

// interface Testimonial {
//   studentName: string
//   parentName: string
//   videoUrl: string
//   description: string
//   imageUrl: string
// }

// export default function TestimonialsManager() {

//   const [testimonials, setTestimonials] = useState<Testimonial[]>([])

//   const [form, setForm] = useState<Testimonial>({
//     studentName: "",
//     parentName: "",
//     videoUrl: "",
//     description: "",
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

//   const addTestimonial = async () => {

//   if (!form.studentName || !form.videoUrl) return

//   try {

//     await fetch(
//       "https://coaching-backend.onrender.com/api/testimonials",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(form)
//       }
//     )

//   } catch (error) {

//     console.error(error)

//   }

// }

//   const deleteTestimonial = (index: number) => {
//     setTestimonials(testimonials.filter((_, i) => i !== index))
//   }

//   return (
//     <AdminLayout>

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-white to-blue-100 p-4 rounded-lg">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Testimonials Manager
//         </h1>
//         <p className="text-gray-500">
//           Add and manage student and parent testimonials.
//         </p>
//       </div>


//       {/* ADD TESTIMONIAL FORM */}
//       <div className=" rounded-xl shadow p-8 mt-6">

//         <h2 className="text-lg font-semibold mb-6">
//           Add Testimonial
//         </h2>

//         <div className="grid grid-cols-2 gap-6">

//           <input
//             name="studentName"
//             value={form.studentName}
//             onChange={handleChange}
//             placeholder="Student Name"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="parentName"
//             value={form.parentName}
//             onChange={handleChange}
//             placeholder="Parent Name"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="videoUrl"
//             value={form.videoUrl}
//             onChange={handleChange}
//             placeholder="YouTube Video URL"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2"
//           />

//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             placeholder="Testimonial Description"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2"
//           />

//           <input
//             name="imageUrl"
//             value={form.imageUrl}
//             onChange={handleChange}
//             placeholder="Student Image URL"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2"
//           />

//         </div>


//         {/* IMAGE UPLOAD */}
//         <div className="mt-6">

//           <label className="text-sm font-medium text-gray-600">
//             Upload Student Photo
//           </label>

//           <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 mt-2 cursor-pointer hover:border-blue-500">

//             <div className="flex items-center gap-2 text-gray-500">
//               <Upload size={18}/>
//               Upload Image
//             </div>

//             <input
//               type="file"
//               className="hidden"
//               onChange={handleImageUpload}
//             />

//           </label>

//         </div>


//         {/* PREVIEW */}
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
//           onClick={addTestimonial}
//           className="mt-6 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white px-6 py-2 rounded-lg"
//         >
//           Add Testimonial
//         </button>

//       </div>


//       {/* TESTIMONIAL LIST */}
//       <div className=" rounded-xl shadow p-8 mt-8">

//         <h2 className="text-lg font-semibold mb-6">
//           Testimonials
//         </h2>

//         <div className="grid grid-cols-3 gap-6">

//           {testimonials.map((t, index) => (

//             <div
//               key={index}
//               className="border rounded-xl p-5 shadow hover:shadow-lg transition"
//             >

//               {t.imageUrl && (
//                 <img
//                   src={t.imageUrl}
//                   className="h-20 w-20 rounded-full object-cover mb-3"
//                 />
//               )}

//               <h3 className="font-semibold text-lg">
//                 {t.studentName}
//               </h3>

//               <p className="text-sm text-gray-500">
//                 Parent: {t.parentName}
//               </p>

//               <p className="text-sm text-gray-600 mt-2">
//                 {t.description}
//               </p>

//               <div className="flex gap-3 mt-4">

//                 <a
//                   href={t.videoUrl}
//                   target="_blank"
//                   className="text-blue-600"
//                 >
//                   <Eye size={18}/>
//                 </a>

//                 <Pencil
//                   size={18}
//                   className="text-green-600 cursor-pointer"
//                 />

//                 <Trash
//                   size={18}
//                   className="text-red-600 cursor-pointer"
//                   onClick={() => deleteTestimonial(index)}
//                 />

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

const API = "https://coaching-website-backend-0nk3.onrender.com/api/testimonials"

interface Testimonial {
  _id?: string
  studentName: string
  parentName: string
  videoUrl: string
  description: string
  imageUrl: string
}

const emptyForm: Testimonial = {
  studentName: "",
  parentName: "",
  videoUrl: "",
  description: "",
  imageUrl: ""
}

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [form, setForm] = useState<Testimonial>(emptyForm)
  const [preview, setPreview] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  // Load existing testimonials on mount
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error("Error loading testimonials:", err))
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

  const saveTestimonial = async () => {
    if (!form.studentName || !form.videoUrl) return

    try {
      if (isEditing && form._id) {
        // PUT — update existing
        const res = await fetch(`${API}/${form._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        })
        const updated = await res.json()
        setTestimonials(prev =>
          prev.map(t => (t._id === updated._id ? updated : t))
        )
      } else {
        // POST — add new
        const res = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        })
        const data = await res.json()
        setTestimonials(prev => [...prev, data])
      }
    } catch (error) {
      console.error("Error saving testimonial:", error)
    }

    setForm(emptyForm)
    setPreview("")
    setIsEditing(false)
  }

  const deleteTestimonial = async (t: Testimonial) => {
    if (!t._id) return
    try {
      await fetch(`${API}/${t._id}`, { method: "DELETE" })
      setTestimonials(prev => prev.filter(item => item._id !== t._id))
    } catch (err) {
      console.error("Error deleting testimonial:", err)
    }
  }

  const startEdit = (t: Testimonial) => {
    setForm(t)
    setPreview(t.imageUrl)
    setIsEditing(true)
  }

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-white to-blue-100 p-4 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">
          Testimonials Manager
        </h1>
        <p className="text-gray-500">
          Add and manage student and parent testimonials.
        </p>
      </div>

      {/* ADD / EDIT FORM */}
      <div className="rounded-xl shadow p-8 mt-6">
        <h2 className="text-lg font-semibold mb-6">
          {isEditing ? "Edit Testimonial" : "Add Testimonial"}
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <input
            name="studentName"
            value={form.studentName}
            onChange={handleChange}
            placeholder="Student Name"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="parentName"
            value={form.parentName}
            onChange={handleChange}
            placeholder="Parent Name"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="videoUrl"
            value={form.videoUrl}
            onChange={handleChange}
            placeholder="YouTube Video URL"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Testimonial Description"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2"
          />

          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="Student Image URL"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2"
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div className="mt-6">
          <label className="text-sm font-medium text-gray-600">
            Upload Student Photo
          </label>
          <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 mt-2 cursor-pointer hover:border-blue-500">
            <div className="flex items-center gap-2 text-gray-500">
              <Upload size={18} />
              Upload Image
            </div>
            <input type="file" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>

        {/* PREVIEW */}
        {preview && (
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-2">Image Preview</p>
            <img src={preview} alt="preview" className="h-24 rounded-lg shadow" />
          </div>
        )}

        {/* BUTTONS */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={saveTestimonial}
            className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white px-6 py-2 rounded-lg"
          >
            {isEditing ? "Update Testimonial" : "Add Testimonial"}
          </button>

          {isEditing && (
            <button
              onClick={() => { setForm(emptyForm); setPreview(""); setIsEditing(false) }}
              className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* TESTIMONIAL LIST */}
      <div className="rounded-xl shadow p-8 mt-8">
        <h2 className="text-lg font-semibold mb-6">Testimonials</h2>

        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t._id}
              className="border rounded-xl p-5 shadow hover:shadow-lg transition"
            >
              {t.imageUrl && (
                <img
                  src={t.imageUrl}
                  className="h-20 w-20 rounded-full object-cover mb-3"
                />
              )}

              <h3 className="font-semibold text-lg">{t.studentName}</h3>
              <p className="text-sm text-gray-500">Parent: {t.parentName}</p>
              <p className="text-sm text-gray-600 mt-2">{t.description}</p>

              <div className="flex gap-3 mt-4">
                <a href={t.videoUrl} target="_blank" className="text-blue-600">
                  <Eye size={18} />
                </a>

                <Pencil
                  size={18}
                  className="text-green-600 cursor-pointer"
                  onClick={() => startEdit(t)}
                />

                <Trash
                  size={18}
                  className="text-red-600 cursor-pointer"
                  onClick={() => deleteTestimonial(t)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </AdminLayout>
  )
}