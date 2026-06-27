import ScrollProgress from "@/components/studio/ScrollProgress";
import Nav from "@/components/studio/Nav";
import Hero from "@/components/studio/Hero";
import Services from "@/components/studio/Services";
import VelocityMarquee from "@/components/studio/VelocityMarquee";
import Work from "@/components/studio/Work";
import Process from "@/components/studio/Process";
import Pricing from "@/components/studio/Pricing";
import FAQ from "@/components/studio/FAQ";
import About from "@/components/studio/About";
import ContactCTA from "@/components/studio/ContactCTA";
import Footer from "@/components/studio/Footer";
import StickyCta from "@/components/studio/StickyCta";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Services />
        <VelocityMarquee />
        <Work />
        <Process />
        <Pricing />
        <FAQ />
        <About />
        <ContactCTA />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
