import Link from "next/link"
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/moving-border";
import CustomButton from "@/app/ui/common/CustomButton";


const About = () => {
  return (
    <div className="container mx-auto py-10 md:py-20 lg:py-32 px-6 text-center">
      <SectionTitle title="About Us" />
      <p className="text-base md:text-xl lg:text-2xl mb-8">
        eSolutions&apos; story began with one mission– “to develop effective solutions and deliver creative strategies for businesses who want to grow their customer base and get more leads.”
      </p>
      <p className="text-sm md:text-base lg:text-lg mb-8 w-full md:px8 lg:px-16 mx-auto">
        As a dedicated digital marketing services company, we stand at the forefront in marketing the business, paving the way for public awareness, and revenue generation. Our services are focused on not only generating ROI but also building relations based on authenticity, honesty, trust, and personal touch that the customers are looking for.
      </p>
      <CustomButton href="/web/aboutus">
        Read More
      </CustomButton>
    </div>

  )
}

export default About
