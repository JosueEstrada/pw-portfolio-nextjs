import Image from "next/image";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import Blog from "./components/Blog";
import BlogSection from "./components/BlogSection";
import EmailSection from "./components/EmailSection";
import ExperienceSection from "./components/ExperienceSection";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#171717]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ExperienceSection />
        <FeaturedProjectsSection />
        <BlogSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
