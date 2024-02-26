import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import { SpeedInsights } from "@vercel/speed-insights/next"
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <SpeedInsights />
      <Navbar />
      <div className="container mt-6 mx-auto px-12 py-6">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main >
  );
}
