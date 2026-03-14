import React from "react"

interface AdminInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function AdminInput({ label, ...props }: AdminInputProps) {

  return (
    <div className="mb-4">

      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>

      <input
        {...props}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  )
}