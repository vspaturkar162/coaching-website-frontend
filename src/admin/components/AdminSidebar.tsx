

// import { Link } from "react-router-dom"
// import {
//   LayoutDashboard,
//   Image,
//   BarChart3,
//   Trophy,
//   Video,
//   BookOpen,
//   MessageSquare,
//   Phone
// } from "lucide-react"

// export default function AdminSidebar() {

//   const menu = [
//     { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
//     { name: "Hero Section", path: "/admin/hero", icon: Image },
//     { name: "Impact Stats", path: "/admin/stats", icon: BarChart3 },
//     { name: "Results", path: "/admin/results", icon: Trophy },
//     { name: "Demo Lectures", path: "/admin/demo", icon: Video },
//     { name: "Courses", path: "/admin/courses", icon: BookOpen },
//     { name: "Testimonials", path: "/admin/testimonials", icon: MessageSquare },
//     { name: "Contact Info", path: "/admin/contact", icon: Phone },
//   ]

//   return (
//     <aside className="w-64 bg-blue-100 text-white min-h-screen flex flex-col">

//       {/* Logo */}
//       <div className="text-2xl text-blue-900 font-bold p-6 border-b border-blue-500">
//         Coaching Admin
//       </div>

//       {/* Menu */}
//       <nav className="flex-1 text-blue-900 p-4 space-y-2">

//         {menu.map((item, index) => {
//           const Icon = item.icon

//           return (
//             <Link
//               key={index}
//               to={item.path}
//               className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 transition"
//             >
//               <Icon size={18} />
//               {item.name}
//             </Link>
//           )
//         })}

//       </nav>

//       {/* Footer */}
//       <div className="p-4 text-sm text-blue-900 border-t border-blue-600">
//         Coaching CMS v1.0
//       </div>

//     </aside>
//   )
// }


import { Link } from "react-router-dom"
import {
  LayoutDashboard,
  Image,
  BarChart3,
  Trophy,
  Video,
  BookOpen,
  MessageSquare,
  Phone,
  Settings,
  LogOut,
  Menu,
  Stamp
} from "lucide-react"
// import Footer from "../../components/Footer"

interface SidebarProps {
  sidebarOpen: boolean
  toggleSidebar: () => void
}

export default function AdminSidebar({
  sidebarOpen,
  toggleSidebar
}: SidebarProps) {

  const menu = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Hero Section", path: "/admin/hero", icon: Image },
    { name: "Impact Stats", path: "/admin/stats", icon: BarChart3 },
    { name: "Results", path: "/admin/results", icon: Trophy },
    { name: "Demo Lectures", path: "/admin/demo", icon: Video },
    { name: "Courses", path: "/admin/courses", icon: BookOpen },
    { name: "Testimonials", path: "/admin/testimonials", icon: MessageSquare },
    { name: "Contact Info", path: "/admin/contact", icon: Phone },
    { name: "Footer", path: "/admin/footer-manager", icon: Stamp },
  ]

  return (
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } bg-blue-100 min-h-screen flex flex-col transition-all duration-300`}
    >

      {/* Top Section */}
      <div className="flex items-center justify-between p-4 border-b border-blue-300">

        {sidebarOpen && (
          <span className="text-lg font-bold text-blue-900">
            Coaching Class Admin
          </span>
        )}

        <button onClick={toggleSidebar}>
          <Menu className="text-blue-900" />
        </button>

      </div>


      {/* Menu */}
      <nav className="flex-1 text-blue-900 p-2 space-y-2">

        {menu.map((item, index) => {
          const Icon = item.icon

          return (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >

              <Icon size={18} />

              {sidebarOpen && item.name}

            </Link>
          )
        })}

      </nav>


      {/* Bottom Section */}
      <div className="border-t border-blue-300 p-2 space-y-2">

        <Link
          to="/admin/settings"
          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition text-blue-900"
        >
          <Settings size={18} />
          {sidebarOpen && "Settings"}
        </Link>

        <button
          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-red-500 hover:text-white transition text-blue-900 w-full"
        >
          <LogOut size={18} />
          {sidebarOpen && "Logout"}
        </button>

      </div>

    </aside>
  )
}