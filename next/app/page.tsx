import Banner from "./home/components/Banner";
import About from "./home/components/About"
import Services from "./home/components/Services"
import CaseStudies from "./home/components/CaseStudies"
import Testimonials from "./home/components/Testimonials";
import Insights from "./home/components/Insights";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services title="Our Services"/>
      <CaseStudies title="Case Studies"/>
      <Testimonials />
      <Insights />
    </main>
  );
}
