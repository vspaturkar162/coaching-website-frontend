import React from "react"

interface AdminCardProps {
  title: string
  children: React.ReactNode
}

export default function AdminCard({ title, children }: AdminCardProps) {
  return (
    <div className="rounded-lg shadow p-6 mb-6">

      <h2 className="text-xl font-semibold mb-4">
        {title}
      </h2>

      {children}

    </div>
  )
}