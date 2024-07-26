import Banner from "@/app/ui/web/Banner";
import About from "./components/About"
import Services from "./components/Services"
import CaseStudies from "./components/CaseStudies"
import Insights from "./components/Insights";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner overlayImage="/img/banner/home-o.png" overlayImageAlt="Banner overlay image for effect" bannerImage="/img/banner/home-bg.png" bannerImageAlt="Banner image showing people discussing IT solutions" title="Innovative Digital Marketing Solution to Unlock Growth" description="A modern growth marketing firm offering data-driven & result-oriented digital marketing services!" btnText="Contact Us" btnPath="/web/contactus" isShort={false}/>
      <About />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Insights />
    </main>
  );
}
