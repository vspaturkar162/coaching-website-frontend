

// import AdminLayout from "../components/AdminLayout"
// import {
//   Users,
//   Trophy,
//   Video,
//   BookOpen,
//   Calendar,
//   GraduationCap
// } from "lucide-react"

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer
// } from "recharts"

// const performanceData = [
//   { month: "Jan", students: 120 },
//   { month: "Feb", students: 180 },
//   { month: "Mar", students: 240 },
//   { month: "Apr", students: 300 },
//   { month: "May", students: 350 },
//   { month: "Jun", students: 420 },
// ]

// const resultsData = [
//   { exam: "SSC", result: 96 },
//   { exam: "JEE", result: 92 },
//   { exam: "NEET", result: 94 },
//   { exam: "Boards", result: 98 },
// ]

// export default function Dashboard() {

//   return (
//     <AdminLayout>

//       {/* Header */}
//       <div className="flex justify-between items-center">

//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">
//             Coaching Dashboard
//           </h1>

//           <p className="text-gray-500">
//             Overview of coaching institute performance
//           </p>
//         </div>

//       </div>


//       {/* STAT CARDS */}
//       <div className="grid grid-cols-4 gap-6">

//         <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Total Students</p>
//             <h2 className="text-2xl font-bold">1200+</h2>
//           </div>
//           <Users className="text-blue-600" size={32} />
//         </div>

//         <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Top Results</p>
//             <h2 className="text-2xl font-bold">95%</h2>
//           </div>
//           <Trophy className="text-blue-600" size={32} />
//         </div>

//         <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Demo Lectures</p>
//             <h2 className="text-2xl font-bold">42</h2>
//           </div>
//           <Video className="text-blue-600" size={32} />
//         </div>

//         <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Courses</p>
//             <h2 className="text-2xl font-bold">8</h2>
//           </div>
//           <BookOpen className="text-blue-600" size={32} />
//         </div>

//       </div>


//       {/* CHARTS SECTION */}
//       <div className="grid grid-cols-3 gap-6">

//         {/* Student Growth Chart */}
//         <div className="bg-white rounded-xl shadow p-6 col-span-2">

//           <h2 className="font-semibold mb-4">
//             Student Growth
//           </h2>

//           <ResponsiveContainer width="100%" height={250}>

//             <LineChart data={performanceData}>

//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />

//               <Line
//                 type="monotone"
//                 dataKey="students"
//                 stroke="#2563eb"
//                 strokeWidth={3}
//               />

//             </LineChart>

//           </ResponsiveContainer>

//         </div>


//         {/* Results Overview */}
//         <div className="bg-white rounded-xl shadow p-6">

//           <h2 className="font-semibold mb-4">
//             Exam Results
//           </h2>

//           {resultsData.map((r, i) => (
//             <div key={i} className="mb-4">

//               <div className="flex justify-between text-sm mb-1">
//                 <span>{r.exam}</span>
//                 <span className="font-semibold">{r.result}%</span>
//               </div>

//               <div className="w-full bg-gray-200 h-2 rounded">
//                 <div
//                   className="bg-blue-600 h-2 rounded"
//                   style={{ width: `${r.result}%` }}
//                 />
//               </div>

//             </div>
//           ))}

//         </div>

//       </div>


//       {/* LOWER PANELS */}
//       <div className="grid grid-cols-3 gap-6">

//         {/* Recent Results */}
//         <div className="bg-white rounded-xl shadow p-6">

//           <h2 className="font-semibold mb-4">
//             Recent Results
//           </h2>

//           <ul className="space-y-3">

//             <li className="flex justify-between">
//               <span>Rahul Sharma</span>
//               <span className="text-blue-600 font-semibold">98%</span>
//             </li>

//             <li className="flex justify-between">
//               <span>Priya Patel</span>
//               <span className="text-blue-600 font-semibold">97%</span>
//             </li>

//             <li className="flex justify-between">
//               <span>Aditya Verma</span>
//               <span className="text-blue-600 font-semibold">96%</span>
//             </li>

//           </ul>

//         </div>


//         {/* Upcoming Batches */}
//         <div className="bg-white rounded-xl shadow p-6">

//           <h2 className="font-semibold mb-4">
//             Upcoming Batches
//           </h2>

//           <div className="space-y-3">

//             <div className="flex items-center justify-between">
//               <span>10th SSC</span>
//               <Calendar className="text-blue-600" size={18}/>
//             </div>

//             <div className="flex items-center justify-between">
//               <span>12th Science</span>
//               <Calendar className="text-blue-600" size={18}/>
//             </div>

//             <div className="flex items-center justify-between">
//               <span>JEE Foundation</span>
//               <Calendar className="text-blue-600" size={18}/>
//             </div>

//           </div>

//         </div>


//         {/* Courses Panel */}
//         <div className="bg-white rounded-xl shadow p-6">

//           <h2 className="font-semibold mb-4">
//             Popular Courses
//           </h2>

//           <div className="space-y-3">

//             <div className="flex items-center gap-3">
//               <GraduationCap className="text-blue-600"/>
//               <span>10th SSC</span>
//             </div>

//             <div className="flex items-center gap-3">
//               <GraduationCap className="text-blue-600"/>
//               <span>11th Science</span>
//             </div>

//             <div className="flex items-center gap-3">
//               <GraduationCap className="text-blue-600"/>
//               <span>JEE Preparation</span>
//             </div>

//           </div>

//         </div>

//       </div>


//     </AdminLayout>
//   )
// }



import AdminLayout from "../components/AdminLayout"
import {
  Users,
  Trophy,
  Video,
  BookOpen,
  Calendar,
  GraduationCap
} from "lucide-react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const performanceData = [
  { month: "Jan", students: 120 },
  { month: "Feb", students: 180 },
  { month: "Mar", students: 240 },
  { month: "Apr", students: 300 },
  { month: "May", students: 350 },
  { month: "Jun", students: 420 },
]

const resultsData = [
  { exam: "SSC", result: 96 },
  { exam: "JEE", result: 92 },
  { exam: "NEET", result: 94 },
  { exam: "Boards", result: 98 },
]

export default function Dashboard() {

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Coaching Dashboard
          </h1>

          <p className="text-gray-500 text-sm sm:text-base">
            Overview of coaching institute performance
          </p>
        </div>

      </div>


      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Students</p>
            <h2 className="text-2xl font-bold">1200+</h2>
          </div>
          <Users className="text-blue-600" size={32} />
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Top Results</p>
            <h2 className="text-2xl font-bold">95%</h2>
          </div>
          <Trophy className="text-blue-600" size={32} />
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Demo Lectures</p>
            <h2 className="text-2xl font-bold">42</h2>
          </div>
          <Video className="text-blue-600" size={32} />
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Courses</p>
            <h2 className="text-2xl font-bold">8</h2>
          </div>
          <BookOpen className="text-blue-600" size={32} />
        </div>

      </div>


      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Student Growth Chart */}
        <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">

          <h2 className="font-semibold mb-4">
            Student Growth
          </h2>

          <ResponsiveContainer width="100%" height={250}>

            <LineChart data={performanceData}>

              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="students"
                stroke="#2563eb"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>


        {/* Results Overview */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="font-semibold mb-4">
            Exam Results
          </h2>

          {resultsData.map((r, i) => (
            <div key={i} className="mb-4">

              <div className="flex justify-between text-sm mb-1">
                <span>{r.exam}</span>
                <span className="font-semibold">{r.result}%</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-600 h-2 rounded"
                  style={{ width: `${r.result}%` }}
                />
              </div>

            </div>
          ))}

        </div>

      </div>


      {/* LOWER PANELS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Recent Results */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="font-semibold mb-4">
            Recent Results
          </h2>

          <ul className="space-y-3">

            <li className="flex justify-between">
              <span>Rahul Sharma</span>
              <span className="text-blue-600 font-semibold">98%</span>
            </li>

            <li className="flex justify-between">
              <span>Priya Patel</span>
              <span className="text-blue-600 font-semibold">97%</span>
            </li>

            <li className="flex justify-between">
              <span>Aditya Verma</span>
              <span className="text-blue-600 font-semibold">96%</span>
            </li>

          </ul>

        </div>


        {/* Upcoming Batches */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="font-semibold mb-4">
            Upcoming Batches
          </h2>

          <div className="space-y-3">

            <div className="flex items-center justify-between">
              <span>10th SSC</span>
              <Calendar className="text-blue-600" size={18}/>
            </div>

            <div className="flex items-center justify-between">
              <span>12th Science</span>
              <Calendar className="text-blue-600" size={18}/>
            </div>

            <div className="flex items-center justify-between">
              <span>JEE Foundation</span>
              <Calendar className="text-blue-600" size={18}/>
            </div>

          </div>

        </div>


        {/* Courses Panel */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="font-semibold mb-4">
            Popular Courses
          </h2>

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <GraduationCap className="text-blue-600"/>
              <span>10th SSC</span>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="text-blue-600"/>
              <span>11th Science</span>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="text-blue-600"/>
              <span>JEE Preparation</span>
            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  )
}

