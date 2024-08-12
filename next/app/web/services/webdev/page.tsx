import Banner from '@/app/ui/web/Banner'
import React from 'react'
import UnderBanner from '../components/UnderBanner'
import Board from '../components/Board'
import Features from '../components/Features'

const Page = () => {

  const board = {
    title: "Innovative Web Development Solutions Crafted For Your Unique Business Needs",
    description: "Our seasoned developers excel at creating robust, high-performing websites that drive engagement and conversions. From e-commerce platforms to content management systems, we tailor our development services to meet your specific requirements, ensuring your online presence is not only functional but also impressive.",
    image: "/img/banner/webdev-bg.png",
    cards: [
      {
        title: "Custom Web Development",
        description: "Our team builds custom websites that are not only visually appealing but also feature-rich, scalable, and secure. We prioritize performance and user experience to help you achieve your business goals."
      },
      {
        title: "E-commerce Solutions",
        description: "We create powerful e-commerce platforms tailored to your business needs, equipped with intuitive navigation, secure payment gateways, and a seamless shopping experience to boost your online sales."
      },
      {
        title: "Content Management Systems",
        description: "Manage your website with ease using our customized content management systems (CMS). Our solutions are user-friendly, flexible, and designed to streamline your content workflows."
      },
    ]
  }

  const features = [
    {
      title: 'SEO Optimization',
      description: 'We integrate SEO best practices into your website development to enhance your search engine visibility and drive organic traffic. Our techniques ensure your site ranks well and attracts the right audience.'
    },
    {
      title: 'Responsive Web Development',
      description: 'Our responsive web development ensures your site looks great and functions perfectly on all devices, providing an optimal user experience regardless of the screen size or browser.'
    }
  ]

  return (
    <div>
      <Banner bannerImage='/img/banner/services-bg1.png' title='Web Development' isShort />
      <UnderBanner title="Comprehensive Web Development Services to Elevate Your Online Presence!" description="Our expert developers provide customized solutions for websites, e-commerce, and content management systems tailored to your business needs." btnText="START YOUR PROJECT" />
      <Board title={board.title} description={board.description} image={board.image} imageAlt={"Web Development Service Image"} cards={board.cards} />
      <Features image='https://res.cloudinary.com/dbgcgbsgh/image/upload/v1723403523/grpqbmwzawuapvwnnvyw.jpg' imageAlt='Image depicting a responsive website on various devices' features={features}/>
    </div>
  )
}

export default Page
