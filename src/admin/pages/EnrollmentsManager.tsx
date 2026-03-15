import { useEffect, useState } from "react"
import AdminLayout from "../components/AdminLayout"
import { Trash, CheckCircle, XCircle, Pencil, X } from "lucide-react"

const API = "https://coaching-website-backend-0nk3.onrender.com/api/enrollments"

interface Enrollment {
  _id: string
  name: string
  phone: string
  email: string
  course: string
  status: "pending" | "approved" | "rejected"
  createdAt: string
}

interface EditForm {
  name: string
  phone: string
  email: string
  course: string
}

export default function EnrollmentsManager() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("all")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<EditForm>({
    name: "", phone: "", email: "", course: ""
  })

  useEffect(() => {
    fetchEnrollments()
  }, [])

  const fetchEnrollments = () => {
    setLoading(true)
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setEnrollments(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error loading enrollments:", err)
        setLoading(false)
      })
  }

  const updateStatus = async (
    id: string,
    status: "approved" | "rejected"
  ) => {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      })
      if (!res.ok) throw new Error("Failed to update")
      const updated = await res.json()
      setEnrollments(prev =>
        prev.map(e => e._id === updated._id ? updated : e)
      )
    } catch (err) {
      console.error("Error updating status:", err)
      alert("Failed to update status.")
    }
  }

  const startEdit = (enrollment: Enrollment) => {
    setEditingId(enrollment._id)
    setEditForm({
      name: enrollment.name,
      phone: enrollment.phone,
      email: enrollment.email,
      course: enrollment.course
    })
  }

  const saveEdit = async () => {
    if (!editingId) return
    try {
      const res = await fetch(`${API}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm)
      })
      if (!res.ok) throw new Error("Failed to save")
      const updated = await res.json()
      setEnrollments(prev =>
        prev.map(e => e._id === updated._id ? updated : e)
      )
      setEditingId(null)
      alert("Enrollment updated successfully!")
    } catch (err) {
      console.error("Error saving edit:", err)
      alert("Failed to save changes.")
    }
  }

  const deleteEnrollment = async (id: string, name: string) => {
    if (!confirm(`Delete enrollment for "${name}"?`)) return
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" })
      setEnrollments(prev => prev.filter(e => e._id !== id))
    } catch (err) {
      console.error("Error deleting:", err)
      alert("Failed to delete.")
    }
  }

  const filtered = enrollments.filter(e =>
    filter === "all" ? true : e.status === filter
  )

  // Counts for badges
  const counts = {
    all: enrollments.length,
    pending: enrollments.filter(e => e.status === "pending").length,
    approved: enrollments.filter(e => e.status === "approved").length,
    rejected: enrollments.filter(e => e.status === "rejected").length
  }

  const statusStyle = (status: string) => {
    if (status === "approved") return "bg-green-100 text-green-700 border border-green-300"
    if (status === "rejected") return "bg-red-100 text-red-700 border border-red-300"
    return "bg-yellow-100 text-yellow-700 border border-yellow-300"
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })
  }

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-white to-blue-100 p-4 rounded-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Enrollments Manager
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          View, approve, reject and manage student enrollments.
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white rounded-xl shadow p-4 text-center border-t-4 border-blue-500">
          <p className="text-3xl font-bold text-blue-600">{counts.all}</p>
          <p className="text-gray-500 text-sm mt-1">Total</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center border-t-4 border-yellow-400">
          <p className="text-3xl font-bold text-yellow-600">{counts.pending}</p>
          <p className="text-gray-500 text-sm mt-1">Pending</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center border-t-4 border-green-500">
          <p className="text-3xl font-bold text-green-600">{counts.approved}</p>
          <p className="text-gray-500 text-sm mt-1">Approved</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center border-t-4 border-red-400">
          <p className="text-3xl font-bold text-red-500">{counts.rejected}</p>
          <p className="text-gray-500 text-sm mt-1">Rejected</p>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap gap-2 mt-6">
        {(["all", "pending", "approved", "rejected"] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition ${
              filter === tab
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-gray-600 border hover:bg-blue-50"
            }`}
          >
            {tab} ({counts[tab]})
          </button>
        ))}

        <button
          onClick={fetchEnrollments}
          className="ml-auto px-4 py-2 rounded-full text-sm font-medium bg-white border text-gray-600 hover:bg-gray-50"
        >
          🔄 Refresh
        </button>
      </div>

      {/* TABLE */}
      <div className="rounded-xl shadow mt-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50 border-b">
              <tr className="text-left text-sm text-gray-600">
                <th className="px-4 py-3 font-semibold">Student</th>
                <th className="px-4 py-3 font-semibold">Contact</th>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-gray-400">
                    Loading enrollments...
                  </td>
                </tr>
              )}

              {!loading && filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-gray-400">
                    No {filter === "all" ? "" : filter} enrollments found.
                  </td>
                </tr>
              )}

              {filtered.map(enrollment => (
                <tr
                  key={enrollment._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {/* Student Name */}
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-800">
                      {enrollment.name}
                    </p>
                  </td>

                  {/* Contact */}
                  <td className="px-4 py-3">
                    <p className="text-sm text-gray-700">{enrollment.phone}</p>
                    <p className="text-sm text-gray-500">{enrollment.email}</p>
                  </td>

                  {/* Course */}
                  <td className="px-4 py-3">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-200">
                      {enrollment.course}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {formatDate(enrollment.createdAt)}
                  </td>

                  {/* Status Badge */}
                  <td className="px-4 py-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${statusStyle(enrollment.status)}`}>
                      {enrollment.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">

                      {/* Approve */}
                      {enrollment.status !== "approved" && (
                        <button
                          onClick={() => updateStatus(enrollment._id, "approved")}
                          title="Approve"
                          className="text-green-600 hover:text-green-800 transition"
                        >
                          <CheckCircle size={18} />
                        </button>
                      )}

                      {/* Reject */}
                      {enrollment.status !== "rejected" && (
                        <button
                          onClick={() => updateStatus(enrollment._id, "rejected")}
                          title="Reject"
                          className="text-red-500 hover:text-red-700 transition"
                        >
                          <XCircle size={18} />
                        </button>
                      )}

                      {/* Edit */}
                      <button
                        onClick={() => startEdit(enrollment)}
                        title="Edit"
                        className="text-blue-500 hover:text-blue-700 transition"
                      >
                        <Pencil size={18} />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => deleteEnrollment(enrollment._id, enrollment.name)}
                        title="Delete"
                        className="text-gray-400 hover:text-red-600 transition"
                      >
                        <Trash size={18} />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* EDIT MODAL */}
      {editingId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative">

            <button
              onClick={() => setEditingId(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-red-500"
            >
              <X size={22} />
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Edit Enrollment
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  Full Name
                </label>
                <input
                  value={editForm.name}
                  onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  Phone
                </label>
                <input
                  value={editForm.phone}
                  onChange={e => setEditForm({ ...editForm, phone: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  Email
                </label>
                <input
                  value={editForm.email}
                  onChange={e => setEditForm({ ...editForm, email: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  Course
                </label>
                <input
                  value={editForm.course}
                  onChange={e => setEditForm({ ...editForm, course: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={saveEdit}
                className="flex-1 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white py-2 rounded-lg font-medium"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  )
}