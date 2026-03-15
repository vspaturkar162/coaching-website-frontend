

// import { Phone, Mail, MapPin } from "lucide-react"
// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"

// export default function Contact(){

//   return (
//     <>
//     <Navbar />
//     <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">

//       {/* Heading */}
//       <div className="text-center mb-12 px-4">

//         <h1 className="text-4xl font-bold text-blue-900 mb-3">
//           Get in Touch With Us
//         </h1>

//         <p className="text-gray-600 max-w-xl mx-auto">
//           Have questions about admissions, courses, or demo lectures?  
//           Our team is here to help you achieve your academic goals.
//         </p>

//       </div>


//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">


//         {/* Contact Information */}
//         <div className="space-y-8">

//           <h2 className="text-2xl font-semibold text-blue-900">
//             Contact Information
//           </h2>

//           <p className="text-gray-600">
//             Reach out to us for course details, admissions, and demo classes.
//             Our counselors will guide you in choosing the right program.
//           </p>


//           {/* Phone */}
//           <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">

//             <div className="bg-blue-100 p-3 rounded-full">
//               <Phone className="text-blue-700"/>
//             </div>

//             <div>
//               <h3 className="font-semibold">Phone</h3>
//               <p className="text-gray-600">+91 98765 43210</p>
//             </div>

//           </div>


//           {/* Email */}
//           <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">

//             <div className="bg-green-100 p-3 rounded-full">
//               <Mail className="text-green-700"/>
//             </div>

//             <div>
//               <h3 className="font-semibold">Email</h3>
//               <p className="text-gray-600">info@coachingclasses.com</p>
//             </div>

//           </div>


//           {/* Address */}
//           <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">

//             <div className="bg-orange-100 p-3 rounded-full">
//               <MapPin className="text-orange-600"/>
//             </div>

//             <div>
//               <h3 className="font-semibold">Address</h3>
//               <p className="text-gray-600">
//                 ABC Coaching Classes,  
//                 MG Road, Pune, Maharashtra, India
//               </p>
//             </div>

//           </div>

//         </div>


//         {/* Contact Form */}
//         <div className="bg-white shadow-xl rounded-2xl p-8">

//           <h2 className="text-2xl font-semibold text-blue-900 mb-6">
//             Send Us a Message
//           </h2>

//           <form className="space-y-4">

//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
//             />

//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
//             />

//             <textarea
//               rows={4}
//               placeholder="Your Message"
//               className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
//             />

//             <button
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
//             >
//               Send Message
//             </button>

//           </form>

//         </div>

//       </div>

//     </section>
//     <Footer />
//     </>
//   )
// }


import { useEffect, useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const API = "https://coaching-website-backend-0nk3.onrender.com/api/contact"
const MESSAGES_API = "https://coaching-website-backend-0nk3.onrender.com/api/contact/messages"

interface ContactData {
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

export default function Contact() {
  const [contact, setContact] = useState<ContactData | null>(null)
  const [form, setForm] = useState({
    name: "", email: "", phone: "", message: ""
  })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setContact(data))
      .catch(err => console.error("Error loading contact:", err))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch(MESSAGES_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })

      if (!res.ok) throw new Error("Failed to send")

      alert("Message sent successfully!")
      setForm({ name: "", email: "", phone: "", message: "" })
    } catch (err) {
      console.error("Error sending message:", err)
      alert("Failed to send. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">

        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">
            Get in Touch With Us
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions about admissions, courses, or demo lectures?
            Our team is here to help you achieve your academic goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-blue-900">
              Contact Information
            </h2>
            <p className="text-gray-600">
              Reach out to us for course details, admissions, and demo classes.
              Our counselors will guide you in choosing the right program.
            </p>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">
                  {contact?.phone || "+91 98765 43210"}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
              <div className="bg-green-100 p-3 rounded-full">
                <Mail className="text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">
                  {contact?.email || "info@coachingclasses.com"}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
              <div className="bg-orange-100 p-3 rounded-full">
                <MapPin className="text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  {contact?.address ||
                    "ABC Coaching Classes, MG Road, Pune, Maharashtra, India"}
                </p>
              </div>
            </div>

            {/* WhatsApp — shown only if saved */}
            {contact?.whatsapp && (
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    className="text-gray-600 hover:text-green-600"
                  >
                    {contact.whatsapp}
                  </a>
                </div>
              </div>
            )}

            {/* Map link — shown only if saved */}
            {contact?.mapLink && (
              <a
                href={contact.mapLink}
                target="_blank"
                className="flex items-center gap-2 text-blue-700 font-medium hover:underline"
              >
                <MapPin size={16} /> View on Google Maps
              </a>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name" required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400" />

              <input type="email" placeholder="Email Address" required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400" />

              <input type="tel" placeholder="Phone Number" required
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400" />

              <textarea rows={4} placeholder="Your Message" required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400" />

              <button type="submit" disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-60">
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}