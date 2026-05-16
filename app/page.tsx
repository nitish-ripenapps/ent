import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Author from "@/components/Author";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Categories />
      <Features />
      <Author />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
