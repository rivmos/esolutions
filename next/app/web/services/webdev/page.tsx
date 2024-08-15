import Banner from '@/app/ui/web/Banner'
import React from 'react'
import UnderBanner from '../components/UnderBanner'
import Board from '../components/Board'
import Features from '../components/Features'

const Page = () => {

  const board = {
    title: "Built for Unique Experience",
    description: ["eSolutions has got a dedicated team of web developers who are always willing to work with you to make your business accessible through an engaging and functional website. We have built websites using the very best open source platforms keeping your business secure."],
    image: "/img/banner/webdev-bg.png",
    cards: [
      {
        title: "Experienced Developers",
        description: "No matter what your requirements are, our developers will get to grips with your project and deliver commendable results."
      },
      {
        title: "Custom Built",
        description: "Looking to build a website from scratch? Work with our in-house team to develop high-quality bespoke websites and applications to match the individual needs of your business."
      },
      {
        title: "Open-Source",
        description: "We believe and trust in best open source platforms therefore, we use Joomla, WordPress for the sites we develop. This means your website would be robust, and up-to-date to meet your business requirements."
      },
      {
        title: "Secure",
        description: "Online security is paramount in the development process and we know it is a priority for your business too. The websites we develop won't compromise on security and are completely secure."
      },
    ]
  }

  const features = [
    {
      title: 'WE ARE MORE THAN JUST DEVELOPMENT TEAM',
      description: 'We are here to help you gain traction from your online customers. From the start, we will take time learning about your business and understand your brand and objectives, so that we can design and develop the best website for your business!'
    },
    {
      title:"Why Choose eSolutions As Your Web Development Agency?",
      description:"We will help you shape experiences, by utilising the skills of our in-house experts. As web development experts we have developed various websites using a range of tools and state of the art technology. From simple CMS to straight forward sites to web portals and custom built apps, our web developers have successfully catered to all the requirements."
    }
  ]

  return (
    <div>
      <Banner bannerImage='/img/banner/services-bg1.png' title='Web Development' isShort />
      <UnderBanner title="WEB DEVELOPMENT SOLUTIONS!" description="You know what makes your business great and we will help you reflect it!
" btnText="START YOUR PROJECT" />
      <Board title={board.title} description={board.description} image={board.image} imageAlt={"Web Development Service Image"} cards={board.cards} />
      <Features image='https://res.cloudinary.com/dbgcgbsgh/image/upload/v1723403523/grpqbmwzawuapvwnnvyw.jpg' imageAlt='Image depicting a responsive website on various devices' features={features}/>
    </div>
  )
}

export default Page
