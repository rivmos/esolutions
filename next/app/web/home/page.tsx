import Banner from "./components/Banner";
import About from "./components/About"
import Services from "./components/Services"
import CaseStudies from "./components/CaseStudies"
import Insights from "./components/Insightss";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Insights";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services title="Our Services"/>
      <CaseStudies title="Case Studies"/>
      <Testimonials />
      {/* <Insights /> */}
      <Blogs />
    </main>
  );
}
