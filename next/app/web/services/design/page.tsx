import Banner from '@/app/ui/web/Banner'
import React from 'react'
import UnderBanner from '../components/UnderBanner'
import Board from '../components/Board'
import Features from '../components/Features'

const Page = () => {

  const board = {
    title: "State-Of-The-Art Designs Tailored To Your Business Vision And Requirements",
    description: " We are a team of experienced designers focused on how the project looks, performs, and works to engage with the end-users. Our experts plan and deliver exceptional designs, from bespoke web designs to graphics and videos. Through close collaboration, our specialists work together to provide a comprehensive package of design services, allowing us to deliver consistent branding and quality which means we can support you with all of your design needs under one roof.",
    image: "/img/services/design.png",
    cards: [
      {
        title: "Website Design Services",
        description: "We will provide you with an engaging, easy to navigate website that is focused towards your target audience. The strong design, and a carefully planned user journey will help turn visitors into customers and would push them to take action."
      },
      {
        title: "Graphic Designs",
        description: "Our designers will work to produce high-quality designs that are based on the unique requirements of your business. Giving you the ability to connect with your target audience through empowering and appealing designs."
      },
      {
        title: "Video & Photography",
        description: "We help you create compelling videos and photographs that drive growth for your business. Connect with our experts to achieve more with your content by harnessing the power of video and photographs to create more impactful messaging."
      },
    ]
  }

  const features = [
    {
      title:'UX Web Design',
      description: 'Put users at the heart of the website design by delivering user experience that will enhance satisfaction and interaction with your website. We provide you with creative designs that are tested effectively for usability and accessibility.'
    },
    {
      title: 'Responsive Web Designs',
      description: 'Mobile phones are the most popular devices which users use to access the website. So obviously you would want the website to be responsive and user friendly plus scalable to various screen sizes and browsers that are available. At eSolutions, our expert designers cater to all kinds of responsive website requirements.'
    }
  ]

  return (
    <div>
      <Banner bannerImage='/img/banner/design-bg.png' title='Design' isShort />
      <UnderBanner title="Exceptional Design Services for Exceptional User Experience!" description="Our expert designers provide web design, graphic design, 3D modelling, video and animation services to suit your business needs." btnText="LETS GET STARTED!" />
      <Board title={board.title} description={board.description} image={board.image} imageAlt={"Design Service Image"} cards={board.cards} />
      <Features image='/img/services/computers.png' imageAlt='Image depicting application in various screen sizes' features={features}/>
    </div>
  )
}

export default Page