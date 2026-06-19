import About from "@/components/About";
import AuditCTA from "@/components/AuditCTA";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import StickyContact from "@/components/StickyContact";
import WhyWebsite from "@/components/WhyWebsite";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyWebsite />
        <AuditCTA />
        <Pricing />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}
