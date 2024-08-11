import Banner from '@/app/ui/web/Banner'
import React from 'react'
import UnderBanner from '../components/UnderBanner'
import Board from '../components/Board'
import Features from '../components/Features'

const Page = () => {

  const board = {
    title: "Cutting-Edge Mobile App Solutions Tailored to Your Business Goals",
    description: "Our team of skilled app developers delivers innovative mobile solutions that offer exceptional user experiences. We specialize in developing high-quality apps for both iOS and Android platforms, ensuring your app stands out in the competitive market.",
    image: "/img/banner/mobiledev-bg.png",
    cards: [
      {
        title: "iOS App Development",
        description: "We build sleek, intuitive, and high-performing iOS apps tailored to your business requirements. Our apps offer seamless performance on all Apple devices, providing an unparalleled user experience."
      },
      {
        title: "Android App Development",
        description: "Our Android apps are designed to be robust, scalable, and feature-rich. We ensure your app delivers excellent performance and functionality across various Android devices."
      },
      {
        title: "Cross-Platform Development",
        description: "Leverage the power of cross-platform development to reach a wider audience. Our cross-platform apps provide a consistent user experience and optimal performance on both iOS and Android devices."
      },
    ]
  }

  const features = [
    {
      title: 'User-Centric Design',
      description: 'We focus on delivering a superior user experience with intuitive design and navigation, ensuring your app is engaging and user-friendly.'
    },
    {
      title: 'Agile Development',
      description: 'Our agile development approach ensures timely delivery and flexibility to adapt to changing requirements, keeping your project on track and within budget.'
    }
  ]

  return (
    <div>
      <Banner bannerImage='/img/banner/services-bg.png' title='Mobile App Design & Development' isShort />
      <UnderBanner title="Innovative Mobile App Solutions for a Competitive Edge!" description="Our expert developers create custom mobile apps for iOS, Android, and cross-platform solutions tailored to your business needs." btnText="LET'S START BUILDING" />
      <Board title={board.title} description={board.description} image={board.image} imageAlt={"Mobile App Service Image"} cards={board.cards} />
      <Features image='https://res.cloudinary.com/dbgcgbsgh/image/upload/v1723403741/wvrjo8x1wdrr6rplxj7n.jpg' imageAlt='Image depicting mobile application development' features={features}/>
    </div>
  )
}

export default Page
