import { useState } from "react"
import AdminLayout from "../components/AdminLayout"
import AdminCard from "../components/AdminCard"

export default function FooterManager() {

  const [footer, setFooter] = useState({
    address: "",
    instagram: "",
    youtube: "",
    facebook: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFooter({ ...footer, [e.target.name]: e.target.value })
  }

  return (
    <AdminLayout>

      <AdminCard title="Footer Settings">

        <textarea
          placeholder="Institute Address"
          name="address"
          value={footer.address}
          onChange={handleChange}
          className="w-full border rounded p-3 mb-4"
        />

        <input
          placeholder="Instagram Link"
          name="instagram"
          value={footer.instagram}
          onChange={handleChange}
          className="w-full border rounded p-3 mb-4"
        />

        <input
          placeholder="YouTube Link"
          name="youtube"
          value={footer.youtube}
          onChange={handleChange}
          className="w-full border rounded p-3 mb-4"
        />

        <input
          placeholder="Facebook Link"
          name="facebook"
          value={footer.facebook}
          onChange={handleChange}
          className="w-full border rounded p-3 mb-4"
        />

        <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
          Save Footer
        </button>

      </AdminCard>

    </AdminLayout>
  )
}