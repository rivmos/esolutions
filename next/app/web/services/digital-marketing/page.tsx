import Banner from '@/app/ui/web/Banner'
import React from 'react'
import UnderBanner from '../components/UnderBanner'
import Board from '../components/Board'
import Features from '../components/Features'

const Page = () => {

  const board = {
    title: "Give Your Brand a Boost with our Digital Marketing Services!",
    description: ["eSolutions is one of the leading Digital Marketing Companies helping businesses achieve their desired result and stand out in the crowd of millions with our comprehensive digital marketing services. We utilize our digital marketing experience and world-class expertise to help businesses reach their full potential and ensure steady growth. For this, we have a team of highly dedicated digital marketing geeks.", "Our transparent and reliable digital marketing services speak for themselves. With our passionate, personal and customized services, we will always help you no matter how small or big your business is! Our team keeps up-to-date with the latest trends to create innovative, out-of-the-box solutions to drive desired results for your business. If you are looking for a digital partner to achieve your dreams, let's connect and see how we can help you!"],
    image: "/img/banner/digitalmarketing-bg.png",
    cards: [
      {
        title: "SPECIALIZED DIGITAL MARKETING SERVICES",
        description: "Being a pioneer in the market, we have worked closely with several clients across the UK, the US, and Europe since our inception. Our exceptional digital strategies have helped businesses reach out to their targeted audience across verticals and geographies."
      },
      {
        title: "SEO - Search Engine Optimization",
        description: "Enhance your online presence and divert relevant traffic to your business with our customized SEO strategies and services."
      },
      {
        title: "SMM - Social Media Strategy",
        description: "Engage with your target audience more creatively and spread brand awareness by opting for our effective social media marketing services."
      },
      {
        title: "PPC- Pay Per Click",
        description: "Significantly increase your revenue and grow your business with our expertly designed and result-oriented PPC Campaigns."
      },
      {
        title: "Display Advertising",
        description: "Grab attention online by displaying your brand in the right place. Avail the benefit of our display advertising services to have your brand presence everywhere."
      },
      {
        title: "Content Marketing",
        description: "Get access to the content that defines your business and share your story with the world- who you are and what you stand for with our impressive content marketing services."
      },
    ]
  }

  const features = [
    {
      title: 'HOW WE WORK?',
      description: 'We offer our clients 360-degree and affordable digital solutions. Since our inception, we have carved a niche as a well-known and reliable company with our out-of-the-box approach and immense market experience. We utilize all the elements to help businesses transform their identity and easily solve complex business problems.'
    },
    {
      title: 'BUSINESS INTELLIGENCE AND ANALYTICS',
      description: 'We assist brands in merging performance analytics with marketing data to capture true marketing ROI, drive profitability and better compete in challenging markets. Part of our approach is to dive deep into search behavior, digital campaign performance, and website data for insights that tell a story. We then measure this against your business strategy and goals to build a marketing analytics dashboard and deliver actionable insights.'
    }
  ]

  return (
    <div>
      <Banner bannerImage='/img/banner/services-bg1.png' title='Digital Marketing & Analytics' isShort />
      <UnderBanner title="Best Digital Marketing & Analytics Services!" description="Result Oriented, Data Driven, Affordable- SEO, SMM, PPC Services and more.
" btnText="LET'S GROW YOUR BUSINESS" />
      <Board title={board.title} description={board.description} image={board.image} imageAlt={"Digital Marketing Service Image"} cards={board.cards} />
      <Features image='https://res.cloudinary.com/dbgcgbsgh/image/upload/v1723403818/ruik2o7fp8lwzpitpyw2.jpg' imageAlt='Image depicting digital marketing analytics' features={features} slugToExclude='digital-marketing'/>
    </div>
  )
}

export default Page
