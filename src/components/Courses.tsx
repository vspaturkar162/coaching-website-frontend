
import { Link } from "react-router-dom"
export default function Courses() {

  const courses = [
    {
      title: "8th",
      subtitle: "Foundation",
      icon: "📘"
    },
    {
      title: "9th",
      subtitle: "Foundation",
      icon: "📙"
    },
    {
      title: "10th",
      subtitle: "1st SSC",
      icon: "☀️"
    },
    {
      title: "11th",
      subtitle: "Science",
      icon: "📗"
    },
    {
      title: "12th",
      subtitle: "Science",
      icon: "📚"
    }
  ]

  return (
    <section id="courses" className="bg-white w-full py-16">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          Available Courses
        </h2>

        {/* Course Cards */}
        <div className="flex flex-wrap justify-center gap-6">

          {courses.map((course, i) => (

            <div
              key={i}
              className="bg-gray-100 flex items-center gap-3 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            >

              {/* Icon */}
              <div className="text-3xl">
                {course.icon}
              </div>

              {/* Text */}
              <div className="text-left">

                <h3 className="font-semibold text-gray-800">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {course.subtitle}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Enroll Button */}
        <div className="mt-10">

          <Link to="/pages/enroll" className="bg-gradient-to-b from-orange-500 to-orange-700 text-white font-bold text-lg px-10 py-3 rounded-lg shadow-lg hover:scale-105 transition">
            Enroll Now!
          </Link>

        </div>

      </div>

    </section>
  )
}