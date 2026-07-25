import OrganizationSchema from "@/components/seo/OrganizationSchema";
import ScrollAnchorHandler from "@/components/ScrollAnchorHandler";
import RevealOnScroll from "@/components/RevealOnScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FarmLiving from "@/components/home/FarmLiving";
import About from "@/components/home/About";
import WhyInvest from "@/components/home/WhyInvest";
import ShowcaseTabs from "@/components/home/ShowcaseTabs";
import CityVsFarm from "@/components/home/CityVsFarm";
import LeisureFeatures from "@/components/home/LeisureFeatures";
import RecentProjects from "@/components/home/RecentProjects";
import LocationAdvantages from "@/components/home/LocationAdvantages";
import ForestGuide from "@/components/home/ForestGuide";
import ScrollBanner from "@/components/home/ScrollBanner";
import InvestmentHub from "@/components/home/InvestmentHub";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <ScrollAnchorHandler />
      <RevealOnScroll />
      <Navbar />
      <Hero />
      <FarmLiving />
      <About />
      <WhyInvest />
      <ShowcaseTabs />
      <CityVsFarm />
      <LeisureFeatures />
      <RecentProjects />
      <LocationAdvantages />
      <ForestGuide />
      <ScrollBanner />
      <InvestmentHub />
      <Services />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
