import Banner from '@/app/ui/web/Banner'
import React from 'react'
import UnderBanner from '../components/UnderBanner'
import Board from '../components/Board'
import Features from '../components/Features'

const Page = () => {

  const board = {
    title: "Comprehensive Digital Marketing and Analytics Services to Grow Your Business",
    description: "Our digital marketing experts use data-driven strategies to enhance your online presence and drive growth. From SEO and PPC to social media and content marketing, we offer a full suite of services designed to increase your visibility and engagement.",
    image: "/img/banner/digitalmarketing-bg.png",
    cards: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Improve your search engine rankings and drive organic traffic to your website with our tailored SEO strategies. We focus on keyword research, on-page optimization, and link building to boost your visibility."
      },
      {
        title: "Pay-Per-Click (PPC) Advertising",
        description: "Maximize your ROI with targeted PPC campaigns. Our experts create and manage ad campaigns that drive relevant traffic to your site and increase conversions."
      },
      {
        title: "Social Media Marketing",
        description: "Engage with your audience and build your brand on social media. We develop and execute effective social media strategies to increase your reach and drive engagement."
      },
    ]
  }

  const features = [
    {
      title: 'Data-Driven Analytics',
      description: 'We leverage advanced analytics to track your performance and optimize your digital marketing efforts. Our insights help you make informed decisions and achieve your business goals.'
    },
    {
      title: 'Content Marketing',
      description: 'Our content marketing services help you create valuable, relevant content that attracts and retains your target audience. From blog posts to infographics, we produce content that resonates with your audience.'
    }
  ]

  return (
    <div>
      <Banner bannerImage='/img/banner/services-bg.png' title='Digital Marketing & Analytics' isShort />
      <UnderBanner title="Expert Digital Marketing Services for Enhanced Online Presence!" description="Our team provides SEO, PPC, social media, and content marketing services to boost your visibility and engagement." btnText="LET'S GROW YOUR BUSINESS" />
      <Board title={board.title} description={board.description} image={board.image} imageAlt={"Digital Marketing Service Image"} cards={board.cards} />
      <Features image='/img/services/computers.png' imageAlt='Image depicting digital marketing analytics' features={features}/>
    </div>
  )
}

export default Page
