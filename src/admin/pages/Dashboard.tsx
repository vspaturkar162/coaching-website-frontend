
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
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

//         <div>
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
//             Coaching Dashboard
//           </h1>

//           <p className="text-gray-500 text-sm sm:text-base">
//             Overview of coaching institute performance
//           </p>
//         </div>

//       </div>


//       {/* STAT CARDS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

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
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//         {/* Student Growth Chart */}
//         <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">

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
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

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



import { useEffect, useState } from "react"
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

// ── API endpoints ──────────────────────────────────────────
const BASE = "https://coaching-website-backend-0nk3.onrender.com/api"

// ── Types ──────────────────────────────────────────────────
interface Enrollment {
  _id: string
  name: string
  course: string
  status: "pending" | "approved" | "rejected"
  createdAt: string
}

interface Result {
  _id: string
  name: string
  className: string
  percentage: string
  createdAt: string
}

interface Course {
  _id: string
  name: string
}

interface DemoLecture {
  _id: string
}

interface StatsData {
  successRate: string
}

// ── Helpers ────────────────────────────────────────────────

// Group enrollments by month for the growth chart
const buildChartData = (enrollments: Enrollment[]) => {
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun",
                      "Jul","Aug","Sep","Oct","Nov","Dec"]

  const map: Record<string, number> = {}

  enrollments.forEach(e => {
    const d = new Date(e.createdAt)
    const key = `${d.getFullYear()}-${d.getMonth()}`
    map[key] = (map[key] || 0) + 1
  })

  // Sort by date and take last 6 months
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-6)
    .map(([key, count]) => {
      const [, month] = key.split("-")
      return { month: monthNames[Number(month)], students: count }
    })
}

// ── Component ──────────────────────────────────────────────
export default function Dashboard() {

  const [enrollments, setEnrollments]     = useState<Enrollment[]>([])
  const [results, setResults]             = useState<Result[]>([])
  const [courses, setCourses]             = useState<Course[]>([])
  const [demoLectures, setDemoLectures]   = useState<DemoLecture[]>([])
  const [stats, setStats]                 = useState<StatsData | null>(null)
  const [loading, setLoading]             = useState(true)

  useEffect(() => {
    // Fetch all data in parallel — if one fails it won't block others
    Promise.allSettled([
      fetch(`${BASE}/enrollments`).then(r => r.json()),
      fetch(`${BASE}/results`).then(r => r.json()),
      fetch(`${BASE}/courses`).then(r => r.json()),
      fetch(`${BASE}/demo-lectures`).then(r => r.json()),
      fetch(`${BASE}/stats`).then(r => r.json())
    ]).then(([enRes, reRes, coRes, dlRes, stRes]) => {
      if (enRes.status === "fulfilled" && Array.isArray(enRes.value))
        setEnrollments(enRes.value)

      if (reRes.status === "fulfilled" && Array.isArray(reRes.value))
        setResults(reRes.value)

      if (coRes.status === "fulfilled" && Array.isArray(coRes.value))
        setCourses(coRes.value)

      if (dlRes.status === "fulfilled" && Array.isArray(dlRes.value))
        setDemoLectures(dlRes.value)

      if (stRes.status === "fulfilled" && stRes.value)
        setStats(stRes.value)

      setLoading(false)
    })
  }, [])

  // ── Derived values ───────────────────────────────────────

  // Stat cards
  const totalEnrolled   = enrollments.length
  const approvedCount   = enrollments.filter(e => e.status === "approved").length
  const pendingCount    = enrollments.filter(e => e.status === "pending").length
  const totalCourses    = courses.length
  const totalLectures   = demoLectures.length

  // Top result percentage across all saved results
  const topResult = results.length > 0
    ? Math.max(...results.map(r => Number(r.percentage) || 0))
    : null

  // Success rate — prefer stats manager value, fallback to calculated
  const successRate = stats?.successRate
    ? `${stats.successRate}%`
    : topResult
      ? `${topResult}%`
      : "N/A"

  // Chart data — monthly enrollment growth
  const chartData = buildChartData(enrollments)

  // If no enrollments yet, keep original placeholder data so chart isn't empty
  const performanceFallback = [
    { month: "Jan", students: 0 },
    { month: "Feb", students: 0 },
    { month: "Mar", students: 0 },
    { month: "Apr", students: 0 },
    { month: "May", students: 0 },
    { month: "Jun", students: 0 },
  ]
  const chartDisplayData = chartData.length > 0 ? chartData : performanceFallback

  // Exam results bars — built from saved results grouped by className
  const examMap: Record<string, number[]> = {}
  results.forEach(r => {
    const key = r.className.includes("10") ? "SSC"
              : r.className.includes("12") ? "HSC"
              : r.className.includes("11") ? "11th"
              : "Other"
    if (!examMap[key]) examMap[key] = []
    examMap[key].push(Number(r.percentage) || 0)
  })

  const resultsChartData = Object.entries(examMap).map(([exam, percents]) => ({
    exam,
    result: Math.round(percents.reduce((a, b) => a + b, 0) / percents.length)
  }))

  // Fallback if no results saved yet
  const resultsFallback = [
    { exam: "SSC",    result: 96 },
    { exam: "JEE",    result: 92 },
    { exam: "NEET",   result: 94 },
    { exam: "Boards", result: 98 },
  ]
  const resultsDisplayData = resultsChartData.length > 0
    ? resultsChartData
    : resultsFallback

  // Recent results — top 3 by percentage
  const recentResults = [...results]
    .sort((a, b) => Number(b.percentage) - Number(a.percentage))
    .slice(0, 3)

  // Upcoming batches — latest 3 courses
  const upcomingBatches = courses.slice(0, 3)

  // Popular courses — same list
  const popularCourses = courses.slice(0, 3)

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

        {/* Total Enrolled Students */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Students</p>
            <h2 className="text-2xl font-bold">
              {loading ? "..." : `${totalEnrolled}`}
            </h2>
            {!loading && pendingCount > 0 && (
              <p className="text-xs text-yellow-500 mt-1">
                {pendingCount} pending
              </p>
            )}
          </div>
          <Users className="text-blue-600" size={32} />
        </div>

        {/* Top Result */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Top Results</p>
            <h2 className="text-2xl font-bold">
              {loading ? "..." : successRate}
            </h2>
          </div>
          <Trophy className="text-blue-600" size={32} />
        </div>

        {/* Demo Lectures */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Demo Lectures</p>
            <h2 className="text-2xl font-bold">
              {loading ? "..." : totalLectures}
            </h2>
          </div>
          <Video className="text-blue-600" size={32} />
        </div>

        {/* Courses */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Courses</p>
            <h2 className="text-2xl font-bold">
              {loading ? "..." : totalCourses}
            </h2>
          </div>
          <BookOpen className="text-blue-600" size={32} />
        </div>

      </div>

      {/* Approved vs Pending indicator */}
      {!loading && enrollments.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{approvedCount}</p>
            <p className="text-sm text-gray-500">Approved</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-yellow-500">{pendingCount}</p>
            <p className="text-sm text-gray-500">Pending</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-red-500">
              {enrollments.filter(e => e.status === "rejected").length}
            </p>
            <p className="text-sm text-gray-500">Rejected</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{results.length}</p>
            <p className="text-sm text-gray-500">Results Added</p>
          </div>
        </div>
      )}

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Student Growth Chart — from real enrollment data */}
        <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
          <h2 className="font-semibold mb-1">Student Growth</h2>
          {chartData.length > 0 && (
            <p className="text-xs text-gray-400 mb-4">
              Based on enrollment submissions (last 6 months)
            </p>
          )}

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartDisplayData}>
              <XAxis dataKey="month" />
              <YAxis allowDecimals={false} />
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

        {/* Results Overview — from real results data */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Exam Results</h2>

          {resultsDisplayData.map((r, i) => (
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

        {/* Recent Results — dynamic from API */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Recent Results</h2>
          <ul className="space-y-3">
            {recentResults.length > 0 ? (
              recentResults.map(r => (
                <li key={r._id} className="flex justify-between">
                  <span>{r.name}</span>
                  <span className="text-blue-600 font-semibold">
                    {r.percentage}%
                  </span>
                </li>
              ))
            ) : (
              // Original fallback content
              <>
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
              </>
            )}
          </ul>
        </div>

        {/* Upcoming Batches — dynamic from courses */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Upcoming Batches</h2>
          <div className="space-y-3">
            {upcomingBatches.length > 0 ? (
              upcomingBatches.map(c => (
                <div key={c._id} className="flex items-center justify-between">
                  <span>{c.name}</span>
                  <Calendar className="text-blue-600" size={18} />
                </div>
              ))
            ) : (
              // Original fallback content
              <>
                <div className="flex items-center justify-between">
                  <span>10th SSC</span>
                  <Calendar className="text-blue-600" size={18} />
                </div>
                <div className="flex items-center justify-between">
                  <span>12th Science</span>
                  <Calendar className="text-blue-600" size={18} />
                </div>
                <div className="flex items-center justify-between">
                  <span>JEE Foundation</span>
                  <Calendar className="text-blue-600" size={18} />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Popular Courses — dynamic from courses */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Popular Courses</h2>
          <div className="space-y-3">
            {popularCourses.length > 0 ? (
              popularCourses.map(c => (
                <div key={c._id} className="flex items-center gap-3">
                  <GraduationCap className="text-blue-600" />
                  <span>{c.name}</span>
                </div>
              ))
            ) : (
              // Original fallback content
              <>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-600" />
                  <span>10th SSC</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-600" />
                  <span>11th Science</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-600" />
                  <span>JEE Preparation</span>
                </div>
              </>
            )}
          </div>
        </div>

      </div>

    </AdminLayout>
  )
}