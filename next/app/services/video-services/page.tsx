import Banner from '@/app/ui/web/Banner'
import React from 'react'
import UnderBanner from '../components/UnderBanner'
import Board from '../components/Board'
import Features from '../components/Features'

const Page = () => {

  const board = {
    title: "Engaging Video and Animation Services to Elevate Your Brand",
    description: ["eSolutions is a creative video animation company that has been in the video animation arena for years. We work with a dedicated client-centric approach and offer custom video animation services, including 2D, 3D, explainers, motion graphic videos and much more. Our priority is always you, so we craft solutions that take your marketing and digital presence to the next level."],
    image: "/img/banner/video-bg.png",
    cards: [
      {
        title: "Logo animation",
        description: "We are a creative logo animation company specializing in the art of the animation logos to enhance your brand's visual appeal and hook the audience at glance. From 2D to 3D logos and more, eSolutions animation experts have the expertise to create all. As your business logo is a crucial component of your brand’s visual identity- make it more memorable, creative through our logo animation services."
      },
      {
        title: "Motion graphics",
        description: "Motion graphics animation is a visually appealing way to connect with your target audiences. It combines text, and digital images to create the illusion of movement or rotation, making it an effective medium for engagingly conveying complex information. At eSolutions, we craft captivating 2D and 3D that effectively fascinates viewers. They help simplify complex concepts, making them easier for your clients to understand and increase customer engagement."
      },
      {
        title: "Video Editing Service",
        description: "eSolutioins is a professional video editing services company, doing all kinds of video editing with raw footage. If you are looking for trustworthy video editing company to have your videos professionally edited, we will gladly fulfill the task. You can send us any kind of raw video footage and our experts would guarantee the results that will surely exceed your expectations. You can order for our video editing services without worrying that your file format isnt accepted, as we edit the footage recorded on any type of device. Knowing how the video editing industry is evolving, we have developed skills and boosted our knowledge, so you can be sure your footage is in safe hands."
      },
      {
        title: "Promotional Videos",
        description: "Promotional videos are a fantastic way to target specific audiences and instantly engage them. Our promotional video production services ensure that your brand and product is represented in the best possible light. At eSolutions, we pride ourselves on our flexibility. We have delivered impactful promo videos for a wide range of our clients with a diverse range of business objectives. Explore our showcase of video promotional services and see how we can help you tell a story through powerful videos."
      },
      {
        title: "Explainer Video Ads",
        description: "People are likely to buy a product if they first see the explainer video. It helps increase the conversion rate by as much as 30%. With our customized explainer videos, you can tell your story to the target audience with a personalized script. It will eventually turn your customers into faithful brand ambassadors. It will help set you apart from competitors by displaying unique features of your product or services. The catchier and more creative the video is, the more customers will remember your company."
      },
      {
        title: "Corporate Video Ads",
        description: "Top performing video ads and commercials for YouTube, Instagram, and Facebook to increase the sales, leads and engagement. With our corporate video ads, target prospective customers with conversion driving video advertising content. Promote your brand’s products and services with our dedicated high-performing corporate video ads. No matter whether you are an entrepreneur, small business owner or a global corporation, corporate video ads are an essential aspect of any marketing campaign. At eSolutions, we will help you craft creative videos to maximize your results and improve ROI."
      },
      {
        title: "App Explainer Video",
        description: "The App store is highly crowded with hundreds of apps, and it has become challenging to stand out from the competition. You may ask how to draw the mobile user's attention and motivate people to download the app? An animated app explainer video can be the answer. At eSolution, we create world-class animation to creatively introduce our digital product and describe the key features. Our experts can help you trigger more app downloads using short, creative and eye catching mobile app explainer videos that combine cool animation, excellent voiceover, and a persuasive script."
      },
      {
        title: "Website Explainer Ads",
        description: "Turn more visitors into customers with engaging website explainer ads perfectly designed to enhance your product pages and entice prospects. With website explainer videos, you can make messaging clear and super easy to understand. It will help capture attention and show all the ins and outs of your product in just a few seconds. For brands with complex products, a large range of features or the use cases, website explainer ad videos are a great dream come true as it speaks to your audience emotions keeping the USP straightforward."
      },
      {
        title: "Youtube Video Editing",
        description: "YouTibe is a strategic platform that can help you reach your target customers effectively. It serves as a platform to generate revenue by running a dedicated channel. Whether you need simple editing to eliminate distracting elements or are seeking complete production requiring voice over, graphics, titles and subtitles, we can help produce deliverables tailor made to suit your requirements. At eSolutions, we offer professional and high quality YouTube editing services that are completely customized and are delivered in standard or high definition format."
      },
      {
        title: "Animation Video Ads",
        description: "eSolutions is a creative video animation company that has been in the animation game industry for years. We offer customized animation video ads as per your business requirements. At eSolutions, we deliver different types of video animation services including 2D animation, frame by frame videos, 3D animation, educational videos, corporate videos, animated music videos, and more."
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
      <Banner bannerImage='/img/banner/services-bg1.png' title='Video & Animation' isShort />
      <UnderBanner title="High-Quality Video Animation Services" description="Our expert team creates promotional, explainer, and corporate videos tailored to your business needs." btnText="Get Free Consultation Today
" />
      <Board title={board.title} description={board.description} image={board.image} imageAlt={"Video Animation Service Image"} cards={board.cards} />
      <Features image='https://res.cloudinary.com/dbgcgbsgh/image/upload/v1723403681/awbm3lreqtcw12qj6jun.jpg' imageAlt='Image depicting video production process' features={features} slugToExclude='video-services'/>
    </div>
  )
}

export default Page
