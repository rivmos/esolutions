import React from 'react'
import Testimonials from './components/Testimonials'
import Banner from './components/Banner'
import About from './components/About'
import Stats from './components/Stats'
import ShopByArtist from './components/ShopByArtist'
import Newsletter from './components/Newsletter'
import { injectReducer } from '@/store'
import reducer from './store'
import ShopByTheme from './components/ShopByTheme'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Insights from './components/Insights'

injectReducer('home', reducer)

const Home = () => {

  return (
    <>
      <Banner />
      <About />
      <Services />
      <CaseStudies />
      <Insights />
      {/* <Testimonials /> */}
      {/* <ShopByArtist /> */}
      {/* <Stats /> */}
      {/* <ShopByTheme /> */}
      <Newsletter />
    </>
  )
}

export default Home