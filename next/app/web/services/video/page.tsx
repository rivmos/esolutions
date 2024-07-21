import Banner from '@/app/ui/web/Banner'
import React from 'react'
import UnderBanner from '../components/UnderBanner'
import Board from '../components/Board'
import Features from '../components/Features'

const Page = () => {

  const board = {
    title: "Engaging Video and Animation Services to Elevate Your Brand",
    description: "Our team specializes in creating compelling videos and animations that captivate your audience and communicate your message effectively. From promotional videos to animated explainer videos, we tailor our services to meet your specific needs and drive engagement.",
    image: "/img/services/design.png",
    cards: [
      {
        title: "Promotional Videos",
        description: "Boost your brand visibility with high-quality promotional videos that highlight your products or services. Our videos are crafted to capture attention and inspire action."
      },
      {
        title: "Animated Explainer Videos",
        description: "Simplify complex concepts with engaging animated explainer videos. Our animations are designed to be both informative and visually appealing, making it easy for your audience to understand your message."
      },
      {
        title: "Corporate Videos",
        description: "Enhance your corporate image with professionally produced videos. Whether it's a corporate profile, training video, or event coverage, we deliver content that resonates with your target audience."
      },
    ]
  }

  const features = [
    {
      title: 'Creative Storytelling',
      description: 'Our creative storytelling techniques ensure your video content is not only visually appealing but also engaging and memorable, effectively conveying your brand message.'
    },
    {
      title: 'High-Quality Production',
      description: 'We use state-of-the-art equipment and techniques to produce high-quality videos that meet your expectations and stand out in the competitive market.'
    }
  ]

  return (
    <div>
      <Banner bannerImage='/img/banner/design-bg.png' title='Video & Animation' isShort />
      <UnderBanner title="Captivating Video and Animation Services for Maximum Impact!" description="Our expert team creates promotional, explainer, and corporate videos tailored to your business needs." btnText="START YOUR PROJECT" />
      <Board title={board.title} description={board.description} image={board.image} imageAlt={"Video Animation Service Image"} cards={board.cards} />
      <Features image='/img/services/computers.png' imageAlt='Image depicting video production process' features={features}/>
    </div>
  )
}

export default Page
