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
import { type Lang } from "@/lib/copy";

// გვერდის ერთიანი კომპოზიცია — ორივე ენისთვის ერთი და იგივე სტრუქტურა.
// lang={...} გადადის ცალკეულ სექციებში, რომლებიც lib/copy.ts-დან კითხულობენ ტექსტს.
export default function SiteContent({ lang }: { lang: Lang }) {
  return (
    <div lang={lang}>
      <ScrollProgress />
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <VelocityMarquee lang={lang} />
        <Work lang={lang} />
        <Process lang={lang} />
        <Pricing lang={lang} />
        <FAQ lang={lang} />
        <About lang={lang} />
        <ContactCTA lang={lang} />
      </main>
      <Footer lang={lang} />
      <StickyCta lang={lang} />
    </div>
  );
}
