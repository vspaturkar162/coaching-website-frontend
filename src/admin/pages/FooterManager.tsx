// import { useState } from "react"
// import AdminLayout from "../components/AdminLayout"
// import AdminCard from "../components/AdminCard"

// export default function FooterManager() {

//   const [footer, setFooter] = useState({
//     address: "",
//     instagram: "",
//     youtube: "",
//     facebook: ""
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFooter({ ...footer, [e.target.name]: e.target.value })
//   }

//   return (
//     <AdminLayout>

//       <AdminCard title="Footer Settings">

//         <textarea
//           placeholder="Institute Address"
//           name="address"
//           value={footer.address}
//           onChange={handleChange}
//           className="w-full border rounded p-3 mb-4"
//         />

//         <input
//           placeholder="Instagram Link"
//           name="instagram"
//           value={footer.instagram}
//           onChange={handleChange}
//           className="w-full border rounded p-3 mb-4"
//         />

//         <input
//           placeholder="YouTube Link"
//           name="youtube"
//           value={footer.youtube}
//           onChange={handleChange}
//           className="w-full border rounded p-3 mb-4"
//         />

//         <input
//           placeholder="Facebook Link"
//           name="facebook"
//           value={footer.facebook}
//           onChange={handleChange}
//           className="w-full border rounded p-3 mb-4"
//         />

//         <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
//           Save Footer
//         </button>

//       </AdminCard>

//     </AdminLayout>
//   )
// }

import { useState, useEffect } from "react"
import AdminLayout from "../components/AdminLayout"
import AdminCard from "../components/AdminCard"

const API = "https://coaching-website-backend-0nk3.onrender.com/api/footer"

interface FooterData {
  address: string
  phone1: string
  phone2: string
  email: string
  instagram: string
  youtube: string
  facebook: string
  linkedin: string
}

const emptyFooter: FooterData = {
  address: "",
  phone1: "",
  phone2: "",
  email: "",
  instagram: "",
  youtube: "",
  facebook: "",
  linkedin: ""
}

export default function FooterManager() {
  const [footer, setFooter] = useState<FooterData>(emptyFooter)

  // Load existing footer data into form on mount
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setFooter({
            address: data.address || "",
            phone1: data.phone1 || "",
            phone2: data.phone2 || "",
            email: data.email || "",
            instagram: data.instagram || "",
            youtube: data.youtube || "",
            facebook: data.facebook || "",
            linkedin: data.linkedin || ""
          })
        }
      })
      .catch(err => console.error("Error loading footer:", err))
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFooter({ ...footer, [e.target.name]: e.target.value })
  }

  const saveFooter = async () => {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(footer)
      })

      if (!res.ok) throw new Error("Failed to save")
      alert("Footer updated successfully!")
    } catch (err) {
      console.error("Error saving footer:", err)
      alert("Failed to save. Please try again.")
    }
  }

  return (
    <AdminLayout>
      <AdminCard title="Footer Settings">

        {/* CONTACT DETAILS */}
        <h3 className="font-semibold text-gray-700 mb-3">Contact Details</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            placeholder="Primary Phone"
            name="phone1"
            value={footer.phone1}
            onChange={handleChange}
            className="w-full border rounded p-3"
          />

          <input
            placeholder="Secondary Phone"
            name="phone2"
            value={footer.phone2}
            onChange={handleChange}
            className="w-full border rounded p-3"
          />

          <input
            placeholder="Email Address"
            name="email"
            value={footer.email}
            onChange={handleChange}
            className="w-full border rounded p-3 sm:col-span-2"
          />
        </div>

        {/* ADDRESS */}
        <h3 className="font-semibold text-gray-700 mb-3">Address</h3>
        <textarea
          placeholder="Institute Address"
          name="address"
          value={footer.address}
          onChange={handleChange}
          rows={3}
          className="w-full border rounded p-3 mb-4"
        />

        {/* SOCIAL MEDIA */}
        <h3 className="font-semibold text-gray-700 mb-3">Social Media Links</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            placeholder="Instagram Link"
            name="instagram"
            value={footer.instagram}
            onChange={handleChange}
            className="w-full border rounded p-3"
          />

          <input
            placeholder="YouTube Link"
            name="youtube"
            value={footer.youtube}
            onChange={handleChange}
            className="w-full border rounded p-3"
          />

          <input
            placeholder="Facebook Link"
            name="facebook"
            value={footer.facebook}
            onChange={handleChange}
            className="w-full border rounded p-3"
          />

          <input
            placeholder="LinkedIn Link"
            name="linkedin"
            value={footer.linkedin}
            onChange={handleChange}
            className="w-full border rounded p-3"
          />
        </div>

        {/* PREVIEW */}
        <div className="bg-gray-50 border rounded-lg p-4 mb-6 text-sm text-gray-600 space-y-1">
          <p className="font-semibold text-gray-700 mb-2">Preview</p>
          <p>📞 {footer.phone1 || "-"}</p>
          <p>📞 {footer.phone2 || "-"}</p>
          <p>✉️ {footer.email || "-"}</p>
          <p>📍 {footer.address || "-"}</p>
          <p>📸 Instagram: {footer.instagram || "-"}</p>
          <p>▶️ YouTube: {footer.youtube || "-"}</p>
          <p>👍 Facebook: {footer.facebook || "-"}</p>
          <p>💼 LinkedIn: {footer.linkedin || "-"}</p>
        </div>

        <button
          onClick={saveFooter}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 w-full sm:w-auto"
        >
          Save Footer
        </button>

      </AdminCard>
    </AdminLayout>
  )
}