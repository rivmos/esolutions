import Link from "next/link"

const About = () => {
   return (
    <div className="container mx-auto py-12 md:py-24 lg:py-36 px-6 text-center">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h2>
      <p className="text-base md:text-lg lg:text-xl mb-8">
        eSolutions' story began with one mission– “to develop effective solutions and deliver creative strategies for businesses who want to grow their customer base and get more leads.”
      </p>
      <p className="text-sm md:text-base lg:text-lg mb-8 w-full md:w-3/4 lg:w-2/3 mx-auto">
        As a dedicated digital marketing services company, we stand at the forefront in marketing the business, paving the way for public awareness, and revenue generation. Our services are focused on not only generating ROI but also building relations based on authenticity, honesty, trust, and personal touch that the customers are looking for.
      </p>
      <Link href="/web/aboutus">
          <button className='text-white bg-primaryColor rounded-md py-3 px-6'>
            Read More
          </button>
      </Link>
    </div>
  )
}

export default About
