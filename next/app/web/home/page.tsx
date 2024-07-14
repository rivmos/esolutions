import Image from "next/image";
import Banner from "./components/Banner";
import About from "./components/About"
import Services from "./components/Services"
import CaseStudies from "./components/CaseStudies"
import Insights from "./components/Insights";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <CaseStudies />
      <Insights />
    </main>
  );
}
