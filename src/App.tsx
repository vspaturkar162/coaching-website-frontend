
import { Routes, Route } from "react-router-dom"
import FloatingCTA from "./components/FloatingCTA"
import Home from "./pages/Home"
import Enroll from "./pages/Enroll"
import AllResults from "./pages/AllResults"
import AllDemoLectures from "./pages/AllDemoLectures"
import AllTestimonials from "./pages/AllTestimonials"
import Contact from "./pages/Contact"
import Dashboard from "./admin/pages/Dashboard"
import HeroManager from "./admin/pages/HeroManager"
import ResultsManager from "./admin/pages/ResultsManager"
import CoursesManager from "./admin/pages/CoursesManager"
import StatsManager from "./admin/pages/StatsManager"
import TestimonialsManager from "./admin/pages/TestimonialsManager"
import DemoLecturesManager from "./admin/pages/DemoLecturesManager"
import ContactManager from "./admin/pages/ContactManager"
import FooterManager from "./admin/pages/FooterManager"
import SettingsPage from "./admin/pages/SettingsPage"

function App() {
  return (
    <>
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/pages/enroll" element={<Enroll />} />

      <Route path="/pages/results" element={<AllResults />} />

      <Route path="/pages/demo-lectures" element={<AllDemoLectures />} />

      <Route path="/pages/testimonials" element={<AllTestimonials />} />

      <Route path="/pages/contact" element={<Contact />} />
      <Route path="/pages/floating-cta" element={<FloatingCTA />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/hero" element={<HeroManager />} />
      <Route path="/admin/results" element={<ResultsManager />} />
      <Route path="/admin/stats" element={<StatsManager />} />
      <Route path="/admin/testimonials" element={<TestimonialsManager />} />
      <Route path="/admin/demo" element={<DemoLecturesManager />} />
      <Route path="/admin/contact" element={<ContactManager />} />
      <Route path="/admin/footer" element={<FooterManager />} />
      <Route path="/admin/courses" element={<CoursesManager />} />
      <Route path="/admin/settings" element={<SettingsPage />} />

    </Routes>


        

    <FloatingCTA />
    </>
  )
}

export default App