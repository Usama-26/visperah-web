import Footer from "@/components/footer";
import Header from "@/components/header";
import CTA from "@/components/home/cta";
import Features from "@/components/home/features";
import HomeHero from "@/components/home/hero";
import Process from "@/components/home/process";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import WhoWeAre from "@/components/home/who-we-are";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <WhoWeAre />
      <Services />
      <Process />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
