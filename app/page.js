import Image from "next/image";
import HeroSection from "./components/Hero";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
    </>
  );
}
