import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function AllDemoLectures() {

  const videos = [
    {
      title: "Trigonometry Basics",
      teacher: "Prof. Balaji Sampath",
      url: "https://www.youtube.com/embed/anqu3ul9WiI"
    },
    {
      title: "Organic Chemistry Rearrangement",
      teacher: "Prof. D.P. Sankaran",
      url: "https://www.youtube.com/embed/_l_GOioLd2Q"
    },
    {
      title: "Fundamental Theorem of Arithmetic",
      teacher: "Prof. Sudha Sridhar",
      url: "https://www.youtube.com/embed/CSjFOGh9gkk"
    },
    {
      title: "Algebra Concepts",
      teacher: "Prof. Balaji Sampath",
      url: "https://www.youtube.com/embed/grnP3mduZkM"
    }
  ]

  return (
    <>
    <Navbar />
    <section className="py-20 bg-gray-100 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-blue-900">
            Free Demo Lectures
          </h1>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore our free demo classes to understand our teaching approach.
            Our experienced faculty focus on conceptual clarity, exam strategies,
            and interactive learning so students can perform confidently in exams.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-10">

          {/* Videos Section */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">

            {videos.map((video, i) => (

              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >

                <iframe
                  src={video.url}
                  className="w-full h-60"
                  allowFullScreen
                />

                <div className="p-4">

                  <h3 className="font-semibold text-gray-800">
                    {video.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {video.teacher}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">

            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Why Watch Our Demo Lectures?
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">

              <li>✔ Understand our unique teaching methodology</li>
              <li>✔ Learn how complex topics are simplified</li>
              <li>✔ Experience interactive classroom style</li>
              <li>✔ Build confidence before joining the course</li>
              <li>✔ See how our faculty guide students step-by-step</li>

            </ul>

            <div className="mt-8">

              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Our Expert Faculty
              </h3>

              <p className="text-gray-600 text-sm">
                Our faculty members have years of experience in guiding
                students for board exams and competitive exams. Their
                teaching focuses on strong conceptual understanding and
                problem-solving skills.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
    <Footer />
    </>
  )
}