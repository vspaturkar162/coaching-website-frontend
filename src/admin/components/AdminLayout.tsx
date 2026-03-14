// import React, { useState } from "react"
// import AdminSidebar from "./AdminSidebar"
// import AdminNavbar from "./AdminNavbar"

// interface AdminLayoutProps {
//   children: React.ReactNode
// }

// export default function AdminLayout({ children }: AdminLayoutProps) {

//   const [sidebarOpen, setSidebarOpen] = useState(true)

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen)
//   }

//   return (
//     <div className="flex h-screen bg-gradient-to-r from-blue-100 via-blue-50 to-cyan-100">

//       <AdminSidebar
//         sidebarOpen={sidebarOpen}
//         toggleSidebar={toggleSidebar}
//       />

//       <div className="flex flex-col flex-1 overflow-hidden">

//         <AdminNavbar toggleSidebar={toggleSidebar} />

//         <main className="flex-1 overflow-y-auto p-8">

//           <div className="max-w-7xl mx-auto space-y-8">
//             {children}
//           </div>

//         </main>

//       </div>

//     </div>
//   )
// }
import React, { useState } from "react"
import AdminSidebar from "./AdminSidebar"
import AdminNavbar from "./AdminNavbar"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-100 via-blue-50 to-cyan-100">

      {/* Sidebar */}
      <div
        className={`
          fixed md:static z-40 h-full
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          transition-transform duration-300
        `}
      >
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">

        <AdminNavbar toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">

          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>

        </main>

      </div>

    </div>
  )
}