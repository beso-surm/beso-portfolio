import Nav from "@/components/studio/Nav";
import Hero from "@/components/studio/Hero";
import Services from "@/components/studio/Services";
import Marquee from "@/components/studio/Marquee";
import Work from "@/components/studio/Work";
import Process from "@/components/studio/Process";
import Pricing from "@/components/studio/Pricing";
import FAQ from "@/components/studio/FAQ";
import About from "@/components/studio/About";
import ContactCTA from "@/components/studio/ContactCTA";
import Footer from "@/components/studio/Footer";
import { type Lang } from "@/lib/copy";

// გვერდის ერთიანი კომპოზიცია — ორივე ენისთვის (/ და /en) ერთი და იგივე სტრუქტურა.
// სექციების თანმიმდევრობა ზუსტად handoff-ის მიხედვით.
export default function SiteContent({ lang }: { lang: Lang }) {
  return (
    <div lang={lang} className="relative min-h-screen bg-base text-cream">
      <Nav lang={lang} />
      <main id="top">
        <Hero lang={lang} />
        <Services lang={lang} />
        <Marquee lang={lang} />
        <Work lang={lang} />
        <Process lang={lang} />
        <Pricing lang={lang} />
        <FAQ lang={lang} />
        <About lang={lang} />
        <ContactCTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
