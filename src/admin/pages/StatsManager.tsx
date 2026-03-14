// import { useState } from "react"
// import AdminLayout from "../components/AdminLayout"
// import { Users, Trophy, BookOpen, GraduationCap } from "lucide-react"

// interface StatsData {
//   students: string
//   selections: string
//   experience: string
//   successRate: string
//   courses: string
//   batches: string
//   faculty: string
// }

// export default function StatsManager() {

//   const [stats, setStats] = useState<StatsData>({
//     students: "",
//     selections: "",
//     experience: "",
//     successRate: "",
//     courses: "",
//     batches: "",
//     faculty: ""
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setStats({ ...stats, [e.target.name]: e.target.value })
//   }

//   // Auto success rate calculator
//   const calculateSuccessRate = () => {
//     if (!stats.students || !stats.selections) return

//     const rate =
//       (Number(stats.selections) / Number(stats.students)) * 100

//     setStats({
//       ...stats,
//       successRate: rate.toFixed(1)
//     })
//   }

//   return (
//     <AdminLayout>

//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-800">
//           Impact Statistics Manager
//         </h1>
//         <p className="text-gray-500">
//           Update the key achievements and numbers displayed on your website.
//         </p>
//       </div>

//       {/* Form Panel */}
//       <div className=" rounded-xl shadow p-8 mt-6">

//         <div className="grid grid-cols-3 gap-6">

//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Total Students
//             </label>
//             <input
//               name="students"
//               value={stats.students}
//               onChange={handleChange}
//               placeholder="Example: 1200"
//               className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Top Selections
//             </label>
//             <input
//               name="selections"
//               value={stats.selections}
//               onChange={handleChange}
//               placeholder="Example: 450"
//               className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Years of Experience
//             </label>
//             <input
//               name="experience"
//               value={stats.experience}
//               onChange={handleChange}
//               placeholder="Example: 15"
//               className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Total Courses
//             </label>
//             <input
//               name="courses"
//               value={stats.courses}
//               onChange={handleChange}
//               placeholder="Example: 8"
//               className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Active Batches
//             </label>
//             <input
//               name="batches"
//               value={stats.batches}
//               onChange={handleChange}
//               placeholder="Example: 12"
//               className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Faculty Members
//             </label>
//             <input
//               name="faculty"
//               value={stats.faculty}
//               onChange={handleChange}
//               placeholder="Example: 25"
//               className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>
//           <div>
//             <label className="text-sm text-gray-600 font-medium">
//               Success Rate (%)
//             </label>
//             <input
//               name="successRate"
//               value={stats.successRate}
//               onChange={handleChange}
//               placeholder="Auto or manual"
//               className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//         </div>

//         {/* Calculator */}
//         <div className="mt-6 flex gap-4">

//           <button
//             onClick={calculateSuccessRate}
//             className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg"
//           >
//             Calculate Success Rate
//           </button>

//           <button className="bg-gradient-to-r from-green-600 via-teal-500 to-green-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
//             Save Statistics
//           </button>

//         </div>

//       </div>


//       {/* Preview Section */}
//       <div className="grid grid-cols-4 gap-6 mt-8">

//         <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-sky-50 p-6 rounded-xl shadow text-center">
//           <Users className="mx-auto text-blue-600 mb-2"/>
//           <p className="text-2xl font-bold">{stats.students || "0"}+</p>
//           <p className="text-gray-500 text-sm">Students</p>
//         </div>

//         <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-sky-50 p-6 rounded-xl shadow text-center">
//           <Trophy className="mx-auto text-blue-600 mb-2"/>
//           <p className="text-2xl font-bold">{stats.selections || "0"}+</p>
//           <p className="text-gray-500 text-sm">Selections</p>
//         </div>

//         <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-sky-50 p-6 rounded-xl shadow text-center">
//           <GraduationCap className="mx-auto text-blue-600 mb-2"/>
//           <p className="text-2xl font-bold">{stats.courses || "0"}</p>
//           <p className="text-gray-500 text-sm">Courses</p>
//         </div>

//         <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-sky-50 p-6 rounded-xl shadow text-center">
//           <BookOpen className="mx-auto text-blue-600 mb-2"/>
//           <p className="text-2xl font-bold">{stats.successRate || "0"}%</p>
//           <p className="text-gray-500 text-sm">Success Rate</p>
//         </div>

//       </div>

//     </AdminLayout>
//   )
// }

import { useState } from "react"
import AdminLayout from "../components/AdminLayout"
import { Users, Trophy, BookOpen, GraduationCap } from "lucide-react"

interface StatsData {
  students: string
  selections: string
  experience: string
  successRate: string
  courses: string
  batches: string
  faculty: string
}

export default function StatsManager() {

  const [stats, setStats] = useState<StatsData>({
    students: "",
    selections: "",
    experience: "",
    successRate: "",
    courses: "",
    batches: "",
    faculty: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStats({ ...stats, [e.target.name]: e.target.value })
  }

  const calculateSuccessRate = () => {
    if (!stats.students || !stats.selections) return

    const rate =
      (Number(stats.selections) / Number(stats.students)) * 100

    setStats({
      ...stats,
      successRate: rate.toFixed(1)
    })
  }

  return (
    <AdminLayout>

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Impact Statistics Manager
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Update the key achievements and numbers displayed on your website.
        </p>
      </div>

      {/* Form Panel */}
      <div className="rounded-xl shadow p-6 sm:p-8 mt-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div>
            <label className="text-sm text-gray-600 font-medium">
              Total Students
            </label>
            <input
              name="students"
              value={stats.students}
              onChange={handleChange}
              placeholder="Example: 1200"
              className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">
              Top Selections
            </label>
            <input
              name="selections"
              value={stats.selections}
              onChange={handleChange}
              placeholder="Example: 450"
              className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">
              Years of Experience
            </label>
            <input
              name="experience"
              value={stats.experience}
              onChange={handleChange}
              placeholder="Example: 15"
              className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">
              Total Courses
            </label>
            <input
              name="courses"
              value={stats.courses}
              onChange={handleChange}
              placeholder="Example: 8"
              className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">
              Active Batches
            </label>
            <input
              name="batches"
              value={stats.batches}
              onChange={handleChange}
              placeholder="Example: 12"
              className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">
              Faculty Members
            </label>
            <input
              name="faculty"
              value={stats.faculty}
              onChange={handleChange}
              placeholder="Example: 25"
              className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">
              Success Rate (%)
            </label>
            <input
              name="successRate"
              value={stats.successRate}
              onChange={handleChange}
              placeholder="Auto or manual"
              className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

        </div>

        {/* Calculator */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">

          <button
            onClick={calculateSuccessRate}
            className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg w-full sm:w-auto"
          >
            Calculate Success Rate
          </button>

          <button className="bg-gradient-to-r from-green-600 via-teal-500 to-green-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full sm:w-auto">
            Save Statistics
          </button>

        </div>

      </div>


      {/* Preview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-sky-50 p-6 rounded-xl shadow text-center">
          <Users className="mx-auto text-blue-600 mb-2"/>
          <p className="text-2xl font-bold">{stats.students || "0"}+</p>
          <p className="text-gray-500 text-sm">Students</p>
        </div>

        <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-sky-50 p-6 rounded-xl shadow text-center">
          <Trophy className="mx-auto text-blue-600 mb-2"/>
          <p className="text-2xl font-bold">{stats.selections || "0"}+</p>
          <p className="text-gray-500 text-sm">Selections</p>
        </div>

        <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-sky-50 p-6 rounded-xl shadow text-center">
          <GraduationCap className="mx-auto text-blue-600 mb-2"/>
          <p className="text-2xl font-bold">{stats.courses || "0"}</p>
          <p className="text-gray-500 text-sm">Courses</p>
        </div>

        <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-sky-50 p-6 rounded-xl shadow text-center">
          <BookOpen className="mx-auto text-blue-600 mb-2"/>
          <p className="text-2xl font-bold">{stats.successRate || "0"}%</p>
          <p className="text-gray-500 text-sm">Success Rate</p>
        </div>

      </div>

    </AdminLayout>
  )
}
