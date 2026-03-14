import { Link } from "react-router-dom"

export default function Testimonials() {

  const testimonials = [
    {
      name: "Mr. Sanjay Patil",
      role: "Father of Sachin (97%)",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "My son scored 97% because of the excellent teaching at ABC Coaching Classes. The teachers are very dedicated."
    },
    {
      name: "Mrs. Kavita Joshi",
      role: "Mother of Shruti (97%)",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "We are extremely happy with coaching our daughter, Shruti, received here. She scored 97%."
    },
    {
      name: "Mr. Rajesh Sharma",
      role: "Father of Aman (95%)",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      text: "ABC Coaching Classes provide the best education. My daughter secured 95% in her 10th SSC board exams. Thank you!"
    }
  ]

  return (
    <section id="testimonials" className="bg-white w-full py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          What Parents Say About Us
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 rounded-3xl gap-6">

          {testimonials.map((t, index) => (

            <div
              key={index}
              className="bg-blue-50 rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
            >

              {/* Header */}
              <div className="flex items-center bg-white rounded-2xl gap-3 mb-3">

                <img
                  src={t.image}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {t.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {t.role}
                  </p>
                </div>

              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “ {t.text} ”
              </p>

            </div>

          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">

          <Link to="pages/testimonials" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg shadow-md transition">
            View All Videos
          </Link>

        </div>

      </div>

    </section>
  )
}