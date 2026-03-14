
// import { useState } from "react"
// import AdminLayout from "../components/AdminLayout"
// import { Upload } from "lucide-react"

// interface HeroData {
//   title: string
//   description: string
//   phone: string
//   imageUrl: string
//   imageFile?: File | null
// }

// export default function HeroManager() {

//   const [hero, setHero] = useState<HeroData>({
//     title: "",
//     description: "",
//     phone: "",
//     imageUrl: "",
//     imageFile: null
//   })

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setHero({ ...hero, [e.target.name]: e.target.value })
//   }

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files) return
//     const file = e.target.files[0]

//     setHero({
//       ...hero,
//       imageFile: file,
//       imageUrl: URL.createObjectURL(file)
//     })
//   }

//   return (
//     <AdminLayout>

//       {/* Page Header */}
//       <div className="bg-sky-50">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Hero Section Manager
//         </h1>
//         <p className="text-gray-500">
//           Update homepage banner content, contact number and hero image.
//         </p>
//       </div>


//       <div className="bg-transperant rounded-xl bg-gradient-to-r shadow-blue-500 p-8 mt-6">

//         {/* FORM GRID */}
//         <div className="grid grid-cols-2 gap-6">

//           {/* TITLE */}
//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Hero Title
//             </label>

//             <input
//               name="title"
//               value={hero.title}
//               onChange={handleChange}
//               placeholder="Enter Hero Title"
//               className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>


//           {/* PHONE */}
//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Contact Number
//             </label>

//             <input
//               name="phone"
//               value={hero.phone}
//               onChange={handleChange}
//               placeholder="Enter Contact Number"
//               className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>


//           {/* DESCRIPTION */}
//           <div className="col-span-2">

//             <label className="text-sm text-gray-600 font-medium">
//               Hero Description
//             </label>

//             <textarea
//               name="description"
//               value={hero.description}
//               onChange={handleChange}
//               rows={4}
//               placeholder="Enter hero section description"
//               className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />

//           </div>

//         </div>


//         {/* IMAGE SECTION */}
//         <div className="mt-8">

//           <h2 className="text-lg font-semibold mb-4">
//             Hero Image
//           </h2>

//           <div className="grid grid-cols-2 gap-6">

//             {/* IMAGE URL */}
//             <div>

//               <label className="text-sm text-gray-600 font-medium">
//                 Image URL
//               </label>

//               <input
//                 name="imageUrl"
//                 value={hero.imageUrl}
//                 onChange={handleChange}
//                 placeholder="Paste Image URL"
//                 className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//               />

//             </div>


//             {/* IMAGE UPLOAD */}
//             <div>

//               <label className="text-sm text-gray-600 font-medium">
//                 Upload Image
//               </label>

//               <label className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 cursor-pointer hover:border-blue-500">

//                 <div className="flex items-center gap-2 text-gray-500">
//                   <Upload size={18} />
//                   Upload Hero Image
//                 </div>

//                 <input
//                   type="file"
//                   className="hidden"
//                   onChange={handleImageUpload}
//                 />

//               </label>

//             </div>

//           </div>

//         </div>


//         {/* IMAGE PREVIEW */}
//         {hero.imageUrl && (

//           <div className="mt-8">

//             <h2 className="text-lg font-semibold mb-3">
//               Image Preview
//             </h2>

//             <img
//               src={hero.imageUrl}
//               alt="Hero Preview"
//               className="rounded-lg shadow-md max-h-64"
//             />

//           </div>

//         )}


//         {/* SAVE BUTTON */}
//         <div className="mt-8">

//           <button className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">

//             Save Hero Section

//           </button>

//         </div>

//       </div>

//     </AdminLayout>
//   )
// }

import { useState } from "react"
import AdminLayout from "../components/AdminLayout"
import { Upload } from "lucide-react"

interface HeroData {
  title: string
  description: string
  phone: string
  imageUrl: string
  imageFile?: File | null
}

export default function HeroManager() {

  const [hero, setHero] = useState<HeroData>({
    title: "",
    description: "",
    phone: "",
    imageUrl: "",
    imageFile: null
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHero({ ...hero, [e.target.name]: e.target.value })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files[0]

    setHero({
      ...hero,
      imageFile: file,
      imageUrl: URL.createObjectURL(file)
    })
  }
  const saveHero = async () => {
  await fetch("https://coaching-backend.onrender.com/api/hero", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(hero)
  })

  alert("Hero updated successfully")
}

  return (
    <AdminLayout>

      {/* Page Header */}
      <div className="bg-sky-50">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Hero Section Manager
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Update homepage banner content, contact number and hero image.
        </p>
      </div>


      <div className="bg-transperant rounded-xl bg-gradient-to-r shadow-blue-500 p-6 sm:p-8 mt-6">

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* TITLE */}
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Hero Title
            </label>

            <input
              name="title"
              value={hero.title}
              onChange={handleChange}
              placeholder="Enter Hero Title"
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>


          {/* PHONE */}
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Contact Number
            </label>

            <input
              name="phone"
              value={hero.phone}
              onChange={handleChange}
              placeholder="Enter Contact Number"
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>


          {/* DESCRIPTION */}
          <div className="md:col-span-2">

            <label className="text-sm text-gray-600 font-medium">
              Hero Description
            </label>

            <textarea
              name="description"
              value={hero.description}
              onChange={handleChange}
              rows={4}
              placeholder="Enter hero section description"
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

        </div>


        {/* IMAGE SECTION */}
        <div className="mt-8">

          <h2 className="text-lg font-semibold mb-4">
            Hero Image
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* IMAGE URL */}
            <div>

              <label className="text-sm text-gray-600 font-medium">
                Image URL
              </label>

              <input
                name="imageUrl"
                value={hero.imageUrl}
                onChange={handleChange}
                placeholder="Paste Image URL"
                className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>


            {/* IMAGE UPLOAD */}
            <div>

              <label className="text-sm text-gray-600 font-medium">
                Upload Image
              </label>

              <label className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 cursor-pointer hover:border-blue-500">

                <div className="flex items-center gap-2 text-gray-500">
                  <Upload size={18} />
                  Upload Hero Image
                </div>

                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />

              </label>

            </div>

          </div>

        </div>


        {/* IMAGE PREVIEW */}
        {hero.imageUrl && (

          <div className="mt-8">

            <h2 className="text-lg font-semibold mb-3">
              Image Preview
            </h2>

            <img
              src={hero.imageUrl}
              alt="Hero Preview"
              className="rounded-lg shadow-md max-h-64 w-full sm:w-auto object-contain"
            />

          </div>

        )}


        {/* SAVE BUTTON */}
        <div className="mt-8">

          <button 
          onClick={saveHero}
          className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition w-full sm:w-auto">

            Save Hero Section

          </button>

        </div>

      </div>

    </AdminLayout>
  )
}
