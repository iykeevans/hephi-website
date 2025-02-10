"use client";

import NavBar from "@/app/components/home/nav-bar"
import Hero from "@/app/components/home/hero"
import About from "@/app/components/home/about"
import MarqueeSection from "@/app/components/home/marquee-section"
import ServicesSection from "@/app/components/home/services-section"
import RecentWork from "@/app/components/home/recent-work"
import ProcessSection from "@/app/components/home/process-section"
import TestimonialSection from "@/app/components/home/testimonial-section"
import FAQSection from "@/app/components/home/faq-section"
import Footer from "@/app/components/home/footer"


export default function Home() {
  return (
    <main className="sm:py-4">
      
      <NavBar />

      <Hero />

      <About />

      <MarqueeSection />

      <ServicesSection />

      <RecentWork />

      <ProcessSection />

      <TestimonialSection />

      <FAQSection />

      <Footer />
      
    </main>
  );
}
