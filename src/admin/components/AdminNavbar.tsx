
// import { Menu } from "lucide-react"
import { Search, Bell, User } from "lucide-react"
// interface AdminNavbarProps {
//   toggleSidebar: () => void
// }

export default function AdminNavbar() {

  return (
    <header className="bg-gradient-to-r border-blue-700 bg-transperant shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Sidebar Toggle Button */}
      {/* <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg hover:bg-blue-100 transition"
      >
        <Menu className="text-blue-700" />
      </button> */}
      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg w-80">
        <Search size={16} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer text-gray-600" />

        <div className="flex items-center gap-2 cursor-pointer">
          <User size={18} />
          <span className="text-sm font-medium">Admin</span>
        </div>

      </div>

    </header>
  )
}