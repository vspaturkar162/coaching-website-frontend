import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Results from "../components/Results"
import Testimonials from "../components/Testimonials"
import DemoLectures from "../components/DemoLectures"
import Courses from "../components/Courses"
import Footer from "../components/Footer"

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Results />
      <Testimonials />
      <DemoLectures />
      <Courses />
      <Footer />
    </>
  )

}