import { Changelog } from "@/components/Changelog"
import { Navbar } from "@/components/Navbar"
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <Navbar/>
      <Changelog />
    </div>
  )
}

