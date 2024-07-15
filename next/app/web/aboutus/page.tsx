import Image from "next/image";
import UnderBanner from "./components/UnderBanner";
import Banner from "@/app/ui/web/Banner";
import WhyESolutions from "./components/WhyESolutions";
import HowItWorks from "./components/HowItWorks";

export default function Page() {
  return (
    <div>
      <Banner bannerImage="/img/banner/about-bg.png" bannerImageAlt="Banner image for about us page" title="About Us" isShort />
      <UnderBanner />
      <WhyESolutions />
      <HowItWorks />
    </div>
  );
}
