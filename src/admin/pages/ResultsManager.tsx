// import { useState } from "react"
// import AdminLayout from "../components/AdminLayout"
// import { Eye, Pencil, Trash, Upload } from "lucide-react"

// interface Result {
//   name: string
//   className: string
//   rank: string
//   percentage: string
//   imageUrl: string
// }

// export default function ResultsManager() {

//   const [results, setResults] = useState<Result[]>([])

//   const [form, setForm] = useState<Result>({
//     name: "",
//     className: "",
//     rank: "",
//     percentage: "",
//     imageUrl: ""
//   })

//   const [preview, setPreview] = useState<string>("")

//   const [editIndex, setEditIndex] = useState<number | null>(null)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

//     setForm({ ...form, [e.target.name]: e.target.value })

//     if (e.target.name === "imageUrl") {
//       setPreview(e.target.value)
//     }

//   }

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

//     if (!e.target.files) return

//     const file = e.target.files[0]
//     const url = URL.createObjectURL(file)

//     setForm({ ...form, imageUrl: url })
//     setPreview(url)

//   }

//   const addResult = () => {

//     if (!form.name || !form.percentage || !form.className) return

//     if (editIndex !== null) {

//       const updated = [...results]
//       updated[editIndex] = form
//       setResults(updated)
//       setEditIndex(null)

//     } else {

//       const updated = [...results, form]

//       updated.sort((a, b) => {
//         if (a.className === b.className) {
//           return Number(a.rank) - Number(b.rank)
//         }
//         return a.className.localeCompare(b.className)
//       })

//       setResults(updated)

//     }

//     setForm({
//       name: "",
//       className: "",
//       rank: "",
//       percentage: "",
//       imageUrl: ""
//     })

//     setPreview("")

//   }

//   const deleteResult = (index: number) => {
//     const updated = results.filter((_, i) => i !== index)
//     setResults(updated)
//   }

//   const viewResult = (result: Result) => {
//     alert(
//       `Student: ${result.name}
// Class: ${result.className}
// Rank: ${result.rank}
// Percentage: ${result.percentage}%`
//     )
//   }

//   const groupedResults = results.reduce<Record<string, Result[]>>(
//     (acc, student) => {

//       if (!acc[student.className]) {
//         acc[student.className] = []
//       }

//       acc[student.className].push(student)

//       return acc

//     },
//     {}
//   )

//   return (
//     <AdminLayout>

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-white to-blue-100">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Student Results Manager
//         </h1>

//         <p className="text-gray-500">
//           Add and manage top student results displayed on your website.
//         </p>
//       </div>


//       {/* ADD RESULT CARD */}
//       <div className="rounded-xl shadow p-8 mt-6">

//         <h2 className="text-lg font-semibold mb-6">
//           Add Student Result
//         </h2>

//         <div className="grid grid-cols-2 gap-6">

//           <input
//             name="className"
//             value={form.className}
//             onChange={handleChange}
//             placeholder="Class"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Student Name"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="rank"
//             value={form.rank}
//             onChange={handleChange}
//             placeholder="Rank"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="percentage"
//             value={form.percentage}
//             onChange={handleChange}
//             placeholder="Percentage"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="imageUrl"
//             value={form.imageUrl}
//             onChange={handleChange}
//             placeholder="Image URL"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//         </div>


//         {/* IMAGE UPLOAD */}
//         <div className="mt-6">

//           <label className="text-sm font-medium text-gray-600">
//             Upload Image
//           </label>

//           <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 mt-2 cursor-pointer hover:border-blue-500">

//             <div className="flex items-center gap-2 text-gray-500">
//               <Upload size={18} />
//               Upload Student Image
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
//           onClick={addResult}
//           className="mt-6 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
//         >
//           {editIndex !== null ? "Update Result" : "Add Result"}
//         </button>

//       </div>


//       {/* RESULTS TABLE */}
//       <div className="rounded-xl shadow p-8 mt-8">

//         <h2 className="bg-gradient-to-r from-white to-blue-50 text-lg font-semibold mb-6">
//           Student Results
//         </h2>

//         <table className="w-full">

//           <thead>

//             <tr className="text-left border-b">

//               <th className="pb-3">Student</th>
//               <th>Class</th>
//               <th>Rank</th>
//               <th>Percentage</th>
//               <th>Photo</th>
//               <th>Actions</th>

//             </tr>

//           </thead>

//           <tbody>

//             {Object.keys(groupedResults).map((cls) => (

//               <>
//                 <tr className="bg-blue-50 font-semibold">

//                   <td colSpan={6} className="py-2 px-2">
//                     Class {cls}
//                   </td>

//                 </tr>

//                 {groupedResults[cls]
//                   .sort((a, b) => Number(a.rank) - Number(b.rank))
//                   .map((r, index) => {

//                     const globalIndex = results.indexOf(r)

//                     return (

//                       <tr
//                         key={index}
//                         className="border-b hover:bg-gray-50"
//                       >

//                         <td className="py-3">{r.name}</td>

//                         <td>{r.className}</td>

//                         <td>{r.rank}</td>

//                         <td className="font-semibold text-blue-600">
//                           {r.percentage}%
//                         </td>

//                         <td>

//                           <img
//                             src={r.imageUrl}
//                             alt={r.name}
//                             className="h-10 w-10 rounded-full object-cover"
//                           />

//                         </td>

//                         <td>

//                           <div className="flex gap-3">

//                             <Eye
//                               className="text-blue-600 cursor-pointer"
//                               size={18}
//                               onClick={() => viewResult(r)}
//                             />

//                             <Pencil
//                               className="text-green-600 cursor-pointer"
//                               size={18}
//                               onClick={() => {
//                                 setForm(r)
//                                 setPreview(r.imageUrl)
//                                 setEditIndex(globalIndex)
//                               }}
//                             />

//                             <Trash
//                               className="text-red-600 cursor-pointer"
//                               size={18}
//                               onClick={() => deleteResult(globalIndex)}
//                             />

//                           </div>

//                         </td>

//                       </tr>

//                     )
//                   })}

//               </>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </AdminLayout>
//   )
// }

import { useState } from "react"
import AdminLayout from "../components/AdminLayout"
import { Eye, Pencil, Trash, Upload } from "lucide-react"

interface Result {
  name: string
  className: string
  rank: string
  percentage: string
  imageUrl: string
}

export default function ResultsManager() {

  const [results, setResults] = useState<Result[]>([])

  const [form, setForm] = useState<Result>({
    name: "",
    className: "",
    rank: "",
    percentage: "",
    imageUrl: ""
  })

  const [preview, setPreview] = useState<string>("")

  const [editIndex, setEditIndex] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setForm({ ...form, [e.target.name]: e.target.value })

    if (e.target.name === "imageUrl") {
      setPreview(e.target.value)
    }

  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (!e.target.files) return

    const file = e.target.files[0]
    const url = URL.createObjectURL(file)

    setForm({ ...form, imageUrl: url })
    setPreview(url)

  }

  const addResult = () => {

    if (!form.name || !form.percentage || !form.className) return

    if (editIndex !== null) {

      const updated = [...results]
      updated[editIndex] = form
      setResults(updated)
      setEditIndex(null)

    } else {

      const updated = [...results, form]

      updated.sort((a, b) => {
        if (a.className === b.className) {
          return Number(a.rank) - Number(b.rank)
        }
        return a.className.localeCompare(b.className)
      })

      setResults(updated)

    }

    setForm({
      name: "",
      className: "",
      rank: "",
      percentage: "",
      imageUrl: ""
    })

    setPreview("")

  }

  const deleteResult = (index: number) => {
    const updated = results.filter((_, i) => i !== index)
    setResults(updated)
  }

  const viewResult = (result: Result) => {
    alert(
      `Student: ${result.name}
Class: ${result.className}
Rank: ${result.rank}
Percentage: ${result.percentage}%`
    )
  }

  const groupedResults = results.reduce<Record<string, Result[]>>(
    (acc, student) => {

      if (!acc[student.className]) {
        acc[student.className] = []
      }

      acc[student.className].push(student)

      return acc

    },
    {}
  )

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-white to-blue-100">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Student Results Manager
        </h1>

        <p className="text-gray-500 text-sm sm:text-base">
          Add and manage top student results displayed on your website.
        </p>
      </div>


      {/* ADD RESULT CARD */}
      <div className="rounded-xl shadow p-6 sm:p-8 mt-6">

        <h2 className="text-lg font-semibold mb-6">
          Add Student Result
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <input
            name="className"
            value={form.className}
            onChange={handleChange}
            placeholder="Class"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Student Name"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="rank"
            value={form.rank}
            onChange={handleChange}
            placeholder="Rank"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="percentage"
            value={form.percentage}
            onChange={handleChange}
            placeholder="Percentage"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>


        {/* IMAGE UPLOAD */}
        <div className="mt-6">

          <label className="text-sm font-medium text-gray-600">
            Upload Image
          </label>

          <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 mt-2 cursor-pointer hover:border-blue-500">

            <div className="flex items-center gap-2 text-gray-500">
              <Upload size={18} />
              Upload Student Image
            </div>

            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />

          </label>

        </div>


        {/* IMAGE PREVIEW */}
        {preview && (

          <div className="mt-6">

            <p className="text-sm text-gray-600 mb-2">
              Image Preview
            </p>

            <img
              src={preview}
              alt="preview"
              className="h-24 w-auto rounded-lg shadow object-contain"
            />

          </div>

        )}


        {/* BUTTON */}
        <button
          onClick={addResult}
          className="mt-6 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full sm:w-auto"
        >
          {editIndex !== null ? "Update Result" : "Add Result"}
        </button>

      </div>


      {/* RESULTS TABLE */}
      <div className="rounded-xl shadow p-6 sm:p-8 mt-8">

        <h2 className="bg-gradient-to-r from-white to-blue-50 text-lg font-semibold mb-6">
          Student Results
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[650px]">

            <thead>

              <tr className="text-left border-b">

                <th className="pb-3">Student</th>
                <th>Class</th>
                <th>Rank</th>
                <th>Percentage</th>
                <th>Photo</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {Object.keys(groupedResults).map((cls) => (

                <>
                  <tr className="bg-blue-50 font-semibold">

                    <td colSpan={6} className="py-2 px-2">
                      Class {cls}
                    </td>

                  </tr>

                  {groupedResults[cls]
                    .sort((a, b) => Number(a.rank) - Number(b.rank))
                    .map((r, index) => {

                      const globalIndex = results.indexOf(r)

                      return (

                        <tr
                          key={index}
                          className="border-b hover:bg-gray-50"
                        >

                          <td className="py-3">{r.name}</td>

                          <td>{r.className}</td>

                          <td>{r.rank}</td>

                          <td className="font-semibold text-blue-600">
                            {r.percentage}%
                          </td>

                          <td>

                            <img
                              src={r.imageUrl}
                              alt={r.name}
                              className="h-10 w-10 rounded-full object-cover"
                            />

                          </td>

                          <td>

                            <div className="flex gap-3">

                              <Eye
                                className="text-blue-600 cursor-pointer"
                                size={18}
                                onClick={() => viewResult(r)}
                              />

                              <Pencil
                                className="text-green-600 cursor-pointer"
                                size={18}
                                onClick={() => {
                                  setForm(r)
                                  setPreview(r.imageUrl)
                                  setEditIndex(globalIndex)
                                }}
                              />

                              <Trash
                                className="text-red-600 cursor-pointer"
                                size={18}
                                onClick={() => deleteResult(globalIndex)}
                              />

                            </div>

                          </td>

                        </tr>

                      )
                    })}

                </>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>
  )
}
