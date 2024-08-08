"use client"
import Link from "next/link"
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/moving-border";


const About = () => {
  return (
    <div className="container mx-auto py-12 md:py-24 lg:py-36 px-6 text-center">
      <SectionTitle title="About Us"/>
      <p className="text-base md:text-lg lg:text-xl mb-8">
        eSolutions&apos; story began with one mission– “to develop effective solutions and deliver creative strategies for businesses who want to grow their customer base and get more leads.”
      </p>
      <p className="text-sm md:text-base lg:text-lg mb-8 w-full md:w-3/4 lg:w-2/3 mx-auto">
        As a dedicated digital marketing services company, we stand at the forefront in marketing the business, paving the way for public awareness, and revenue generation. Our services are focused on not only generating ROI but also building relations based on authenticity, honesty, trust, and personal touch that the customers are looking for.
      </p>
      <Link href="/web/aboutus">
        <Button className="bg-white text-gray-800 rounded-md px-4 py-2 sm:px-6 sm:py-3 hover:bg-blue-600-dark transition-colors duration-300 hover:text-blue-400 border-blue-400"> 
          Read More
        </Button>
      </Link>
    </div>

  )
}

export default About
