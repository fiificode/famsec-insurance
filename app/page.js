import Image from "next/image";
import HeroSection from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Services />
    </>
  );
}
