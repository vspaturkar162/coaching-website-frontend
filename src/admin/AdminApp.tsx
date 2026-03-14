import { Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import HeroManager from "./pages/HeroManager"
import StatsManager from "./pages/StatsManager"
import ResultsManager from "./pages/ResultsManager"
import TestimonialsManager from "./pages/TestimonialsManager"
import DemoLecturesManager from "./pages/DemoLecturesManager"
import CoursesManager from "./pages/CoursesManager"
import ContactManager from "./pages/ContactManager"
import FooterManager from "./pages/FooterManager"
import SettingsPage from "./pages/SettingsPage"

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/hero" element={<HeroManager />} />
      <Route path="/stats" element={<StatsManager />} />
      <Route path="/results" element={<ResultsManager />} />
      <Route path="/testimonials" element={<TestimonialsManager />} />
      <Route path="/demo" element={<DemoLecturesManager />} />
      <Route path="/courses" element={<CoursesManager />} />
      <Route path="/contact" element={<ContactManager />} />
      <Route path="/footer" element={<FooterManager />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}