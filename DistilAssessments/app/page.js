import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HRManagement from "@/components/HRManagement";
import JobCategories from "@/components/JobCategories";
import Navbar from "@/components/Navbar";
import SplitSectionCarousel from "@/components/SplitSectionCarousel";
import StepsSection from "@/components/StepSection";
import ValuablePartner from "@/components/ValuablePartner";
import dynamic from "next/dynamic"; // For lazy loading

const LazyBlogs = dynamic(() => import("@/components/Blogs"));
const LazyTestimonials = dynamic(() => import("@/components/Testimonials"));

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <SplitSectionCarousel />
        <section>
          <HRManagement />
        </section>
        <section>
          <StepsSection />
        </section>
        <section>
          <JobCategories />
        </section>
        <section>
          <ValuablePartner />
        </section>
        <section>
          <LazyTestimonials />
        </section>
        <section>
          <LazyBlogs />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
