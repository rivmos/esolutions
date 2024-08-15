import Banner from '@/app/ui/web/Banner'
import React from 'react'
import UnderBanner from '../components/UnderBanner'
import Board from '../components/Board'
import Features from '../components/Features'

const Page = () => {

  const board = {
    title: "Assisting Global Brands in Design and Build Superior Digital Products!",
    description: ["eSolutions focuses on enabling seamless user experiences across all modern platforms and devices. If you are looking to transform your unique ideas into successful mobile apps, you are at the right place! We help you with custom, native iOS, Android or hybrid mobile apps per your business requirements.", "Whether your idea is to complement your existing business or is the basis of a brand new business, we have the right skills, experience and team to be your real mobile app design and development team."],
    image: "/img/banner/mobiledev-bg.png",
    cards: [
      {
        title: "MOBILE APP DESIGN AND DEVELOPMENT PLATFORMS",
        description: "Our passion lies in crafting mobile experiences that cater to users across diverse platforms. Since every platform has its own standard, we work with a tailored approach to build platform-specific apps that seamlessly adapt and perform well across the spectrum."
      },
      {
        title: "Mobile App Design",
        description: "At eSolutions, our designers create sleek and intuitive UX and visually appealing UI to ensure enhanced conversion, engagement and easy adoption across platforms."
      },
      {
        title: "iOS App Development",
        description: "eSolution commands extensive expertise in iOS application development. We pride ourselves in designing and creating top iOS applications that have reigned well over the app stores. Our high-caliber teams are full-stack domain experts specializing in iPhone app development, designing, and building code right up to support and maintenance."
      },
      {
        title: "Android App Development",
        description: "The world of Android Development is highly versatile, and eSolution is an expert in developing Android Apps tailored to your business objectives. Our experts are highly skilled in creating and maintaining the complete lifecycle of Android projects. Our mobile app developers are always by your side from conception to delivery of the project."
      },
      {
        title: "Cross-Platform App Development",
        description: "If you are planning to develop cross-platform mobile apps that are capable of running on multiple platforms, then eSolution is your partner of choice. With our cross-platform app development services, you can easily reduce cost and time to market with exemplary user reach for Android, iOS and other operating systems."
      },
      {
        title: "Progressive Web App Development",
        description: "As a leading progressive web app development company, eSolution builds progressive web apps that bring together the best technical solutions for both web and mobile platforms. Highly beneficial for extensive user reach, our expertise lies in creating robust PWAs that are fast and responsive and provide an intuitive experience on any device with a browser."
      },
    ]
  }

  const features = [
    {
      title: 'Why Choose Us?',
      description: 'At eSolution, we deliver app development services for our clients with predictable outcomes. For this, we have an excellent team of app designers and developers delivering projects on time while maintaining top-notch coding standards.'
    },
  ]

  return (
    <div>
      <Banner bannerImage='/img/banner/services-bg1.png' title='Mobile App Design & Development' isShort />
      <UnderBanner title="Delivering Stellar Mobile App Design & Development Services" description="Our expert developers create custom mobile apps for iOS, Android, and cross-platform solutions tailored to your business needs." btnText="LET'S START BUILDING" />
      <Board title={board.title} description={board.description} image={board.image} imageAlt={"Mobile App Service Image"} cards={board.cards} />
      <Features image='https://res.cloudinary.com/dbgcgbsgh/image/upload/v1723403741/wvrjo8x1wdrr6rplxj7n.jpg' imageAlt='Image depicting mobile application development' features={features}/>
    </div>
  )
}

export default Page
