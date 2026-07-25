import OrganizationSchema from "@/components/seo/OrganizationSchema";
import ScrollAnchorHandler from "@/components/ScrollAnchorHandler";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ShowcaseTabs from "@/components/home/ShowcaseTabs";
import RecentProjects from "@/components/home/RecentProjects";
import ScrollBanner from "@/components/home/ScrollBanner";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <ScrollAnchorHandler />
      <Navbar />
      <Hero />
      <About />
      <ShowcaseTabs />
      <RecentProjects />
      <ScrollBanner />
      <Services />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
