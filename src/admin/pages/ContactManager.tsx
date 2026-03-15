// import { useState } from "react"
// import AdminLayout from "../components/AdminLayout"
// import { Phone, Mail, MapPin, Globe } from "lucide-react"

// interface Contact {
//   instituteName: string
//   phone: string
//   email: string
//   whatsapp: string
//   website: string
//   address: string
//   mapLink: string
//   instagram: string
//   facebook: string
//   youtube: string
// }

// export default function ContactManager() {

//   const [contact, setContact] = useState<Contact>({
//     instituteName: "",
//     phone: "",
//     email: "",
//     whatsapp: "",
//     website: "",
//     address: "",
//     mapLink: "",
//     instagram: "",
//     facebook: "",
//     youtube: ""
//   })

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setContact({ ...contact, [e.target.name]: e.target.value })
//   }

//   return (
//     <AdminLayout>

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-white to-blue-100 p-4 rounded-lg">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Contact Manager
//         </h1>
//         <p className="text-gray-500">
//           Manage your institute contact details and address information.
//         </p>
//       </div>


//       {/* FORM */}
//       <div className="rounded-xl shadow p-8 mt-6">

//         <h2 className="text-lg font-semibold mb-6">
//           Contact Information
//         </h2>

//         <div className="grid grid-cols-2 gap-6">

//           <input
//             name="instituteName"
//             value={contact.instituteName}
//             onChange={handleChange}
//             placeholder="Institute Name"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="phone"
//             value={contact.phone}
//             onChange={handleChange}
//             placeholder="Mobile Number"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="email"
//             value={contact.email}
//             onChange={handleChange}
//             placeholder="Email Address"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="whatsapp"
//             value={contact.whatsapp}
//             onChange={handleChange}
//             placeholder="WhatsApp Number"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="website"
//             value={contact.website}
//             onChange={handleChange}
//             placeholder="Website URL"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             name="mapLink"
//             value={contact.mapLink}
//             onChange={handleChange}
//             placeholder="Google Maps Location Link"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <textarea
//             name="address"
//             value={contact.address}
//             onChange={handleChange}
//             placeholder="Full Address"
//             className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2"
//           />

//         </div>


//         {/* SOCIAL MEDIA */}
//         <div className="mt-8">

//           <h3 className="font-semibold mb-4">
//             Social Media Links
//           </h3>

//           <div className="grid grid-cols-3 gap-6">

//             <input
//               name="instagram"
//               value={contact.instagram}
//               onChange={handleChange}
//               placeholder="Instagram Link"
//               className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />

//             <input
//               name="facebook"
//               value={contact.facebook}
//               onChange={handleChange}
//               placeholder="Facebook Link"
//               className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />

//             <input
//               name="youtube"
//               value={contact.youtube}
//               onChange={handleChange}
//               placeholder="YouTube Channel"
//               className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />

//           </div>

//         </div>


//         {/* BUTTON */}
//         <button
//           className="mt-8 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white px-6 py-2 rounded-lg"
//         >
//           Update Contact Information
//         </button>

//       </div>


//       {/* PREVIEW PANEL */}
//       <div className=" rounded-xl shadow p-8 mt-8">

//         <h2 className="text-lg font-semibold mb-6">
//           Contact Preview
//         </h2>

//         <div className="grid grid-cols-3 gap-6">

//           <div className="flex items-center gap-3">
//             <Phone className="text-blue-600"/>
//             <div>
//               <p className="font-semibold">Phone</p>
//               <p className="text-gray-500">{contact.phone || "-"}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <Mail className="text-blue-600"/>
//             <div>
//               <p className="font-semibold">Email</p>
//               <p className="text-gray-500">{contact.email || "-"}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <Globe className="text-blue-600"/>
//             <div>
//               <p className="font-semibold">Website</p>
//               <p className="text-gray-500">{contact.website || "-"}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 col-span-3">
//             <MapPin className="text-blue-600"/>
//             <div>
//               <p className="font-semibold">Address</p>
//               <p className="text-gray-500">{contact.address || "-"}</p>
//             </div>
//           </div>

//         </div>

//       </div>

//     </AdminLayout>
//   )
// }




import { useState, useEffect } from "react"
import AdminLayout from "../components/AdminLayout"
import { Phone, Mail, MapPin, Globe } from "lucide-react"

const API = "https://coaching-website-backend-0nk3.onrender.com/api/contact"

interface Contact {
  instituteName: string
  phone: string
  email: string
  whatsapp: string
  website: string
  address: string
  mapLink: string
  instagram: string
  facebook: string
  youtube: string
}

const emptyContact: Contact = {
  instituteName: "", phone: "", email: "", whatsapp: "",
  website: "", address: "", mapLink: "",
  instagram: "", facebook: "", youtube: ""
}

export default function ContactManager() {
  const [contact, setContact] = useState<Contact>(emptyContact)

  // Load existing contact info into form on mount
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setContact({
            instituteName: data.instituteName || "",
            phone: data.phone || "",
            email: data.email || "",
            whatsapp: data.whatsapp || "",
            website: data.website || "",
            address: data.address || "",
            mapLink: data.mapLink || "",
            instagram: data.instagram || "",
            facebook: data.facebook || "",
            youtube: data.youtube || ""
          })
        }
      })
      .catch(err => console.error("Error loading contact:", err))
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const saveContact = async () => {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      })

      if (!res.ok) throw new Error("Failed to save")
      alert("Contact information updated successfully!")
    } catch (err) {
      console.error("Error saving contact:", err)
      alert("Failed to save. Please try again.")
    }
  }

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-white to-blue-100 p-4 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">Contact Manager</h1>
        <p className="text-gray-500">
          Manage your institute contact details and address information.
        </p>
      </div>

      {/* FORM */}
      <div className="rounded-xl shadow p-8 mt-6">
        <h2 className="text-lg font-semibold mb-6">Contact Information</h2>

        <div className="grid grid-cols-2 gap-6">
          <input name="instituteName" value={contact.instituteName}
            onChange={handleChange} placeholder="Institute Name"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input name="phone" value={contact.phone}
            onChange={handleChange} placeholder="Mobile Number"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input name="email" value={contact.email}
            onChange={handleChange} placeholder="Email Address"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input name="whatsapp" value={contact.whatsapp}
            onChange={handleChange} placeholder="WhatsApp Number"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input name="website" value={contact.website}
            onChange={handleChange} placeholder="Website URL"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input name="mapLink" value={contact.mapLink}
            onChange={handleChange} placeholder="Google Maps Location Link"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

          <textarea name="address" value={contact.address}
            onChange={handleChange} placeholder="Full Address"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none col-span-2" />
        </div>

        {/* SOCIAL MEDIA */}
        <div className="mt-8">
          <h3 className="font-semibold mb-4">Social Media Links</h3>
          <div className="grid grid-cols-3 gap-6">
            <input name="instagram" value={contact.instagram}
              onChange={handleChange} placeholder="Instagram Link"
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

            <input name="facebook" value={contact.facebook}
              onChange={handleChange} placeholder="Facebook Link"
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

            <input name="youtube" value={contact.youtube}
              onChange={handleChange} placeholder="YouTube Channel"
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={saveContact}
          className="mt-8 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Update Contact Information
        </button>
      </div>

      {/* PREVIEW PANEL */}
      <div className="rounded-xl shadow p-8 mt-8">
        <h2 className="text-lg font-semibold mb-6">Contact Preview</h2>
        <div className="grid grid-cols-3 gap-6">

          <div className="flex items-center gap-3">
            <Phone className="text-blue-600" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-500">{contact.phone || "-"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-500">{contact.email || "-"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Globe className="text-blue-600" />
            <div>
              <p className="font-semibold">Website</p>
              <p className="text-gray-500">{contact.website || "-"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 col-span-3">
            <MapPin className="text-blue-600" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-gray-500">{contact.address || "-"}</p>
            </div>
          </div>

        </div>
      </div>

    </AdminLayout>
  )
}