import { aiServices, webServices } from "@/config/site";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { ServiceDivision } from "@/components/ServiceDivision";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Lab } from "@/components/Lab";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-violet focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problems />
        <ServiceDivision
          id="ai-solutions"
          index="01"
          eyebrow="Division one"
          title="AI Solutions &"
          accent="Business Automation"
          description="Let technology handle repetitive work while your team focuses on growing the business."
          services={aiServices}
          cta="Discuss Your Automation Needs"
          tone="alt"
        />
        <ServiceDivision
          id="web-development"
          index="02"
          eyebrow="Division two"
          title="Full-Stack"
          accent="Web Development"
          description="Turn your idea into a professional digital experience built for your business."
          services={webServices}
          cta="Discuss Your Website Project"
        />
        <Pricing />
        <Process />
        <Lab />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
