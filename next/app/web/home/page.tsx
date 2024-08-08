import Banner from "./components/Banner";
import About from "./components/About"
import Services from "./components/Services"
import CaseStudies from "./components/CaseStudies"
import Insights from "./components/Insights";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <CaseStudies />
      <Testimonials />
      {/* <Insights /> */}
      <Blogs />
    </main>
  );
}
