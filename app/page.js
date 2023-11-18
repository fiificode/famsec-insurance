import Image from "next/image";
import HeroSection from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Services />
      <Solutions />
      <Testimonials />
    </>
  );
}
