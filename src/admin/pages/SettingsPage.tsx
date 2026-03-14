import { useState } from "react"
import AdminLayout from "../components/AdminLayout"
import {
  User,
  Lock,
  Shield,
  Upload
} from "lucide-react"

interface Settings {
  name: string
  email: string
  phone: string
  profileImage: string
  password: string
  newPassword: string
}

export default function SettingsPage() {

  const [settings, setSettings] = useState<Settings>({
    name: "",
    email: "",
    phone: "",
    profileImage: "",
    password: "",
    newPassword: ""
  })

  const [preview, setPreview] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSettings({ ...settings, [e.target.name]: e.target.value })
  }

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (!e.target.files) return

    const file = e.target.files[0]
    const url = URL.createObjectURL(file)

    setSettings({ ...settings, profileImage: url })
    setPreview(url)
  }

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-white to-blue-100 p-4 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">
          Settings
        </h1>
        <p className="text-gray-500">
          Manage your account, privacy and security preferences.
        </p>
      </div>

      {/* ACCOUNT SETTINGS */}
      <div className=" rounded-xl shadow p-8 mt-6">

        <div className="flex items-center gap-2 mb-6">
          <User className="text-blue-600" />
          <h2 className="text-lg font-semibold">
            Account Settings
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <input
            name="name"
            value={settings.name}
            onChange={handleChange}
            placeholder="Admin Name"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="email"
            value={settings.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="phone"
            value={settings.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        {/* PROFILE IMAGE */}
        <div className="mt-6">

          <label className="text-sm font-medium text-gray-600">
            Profile Image
          </label>

          <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 mt-2 cursor-pointer hover:border-blue-500">

            <div className="flex items-center gap-2 text-gray-500">
              <Upload size={18}/>
              Upload Profile Image
            </div>

            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />

          </label>

        </div>

        {preview && (
          <img
            src={preview}
            className="h-20 w-20 rounded-full mt-4"
          />
        )}

        <button className="mt-6 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white px-6 py-2 rounded-lg">
          Save Account Settings
        </button>

      </div>


      {/* SECURITY SETTINGS */}
      <div className=" rounded-xl shadow p-8 mt-8">

        <div className="flex items-center gap-2 mb-6">
          <Lock className="text-blue-600" />
          <h2 className="text-lg font-semibold">
            Security Settings
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <input
            type="password"
            name="password"
            value={settings.password}
            onChange={handleChange}
            placeholder="Current Password"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            name="newPassword"
            value={settings.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        <button className="mt-6 bg-gradient-to-r from-green-600 via-teal-500 to-green-800 text-white px-6 py-2 rounded-lg">
          Update Password
        </button>

      </div>


      {/* PRIVACY SETTINGS */}
      <div className="bg-white rounded-xl shadow p-8 mt-8">

        <div className="flex items-center gap-2 mb-6">
          <Shield className="text-blue-600" />
          <h2 className="text-lg font-semibold">
            Privacy Settings
          </h2>
        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between">

            <span className="text-gray-600">
              Enable Two Factor Authentication
            </span>

            <input type="checkbox" className="toggle toggle-primary" />

          </div>

          <div className="flex items-center justify-between">

            <span className="text-gray-600">
              Allow Email Notifications
            </span>

            <input type="checkbox" className="toggle toggle-primary" />

          </div>

          <div className="flex items-center justify-between">

            <span className="text-gray-600">
              Allow Login Alerts
            </span>

            <input type="checkbox" className="toggle toggle-primary" />

          </div>

        </div>

      </div>

    </AdminLayout>
  )
}