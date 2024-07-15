import Banner from '@/app/ui/web/Banner'
import React from 'react'
import UnderBanner from './components/UnderBanner'
import Features from './components/Features'
import SubFeatures from './components/SubFeatures'

const Page = () => {
  return (
    <div>
        <Banner bannerImage='/img/banner/design-bg.png' title='Designing Services' isShort/>
        <UnderBanner />
        <Features />
        <SubFeatures />
    </div>
  )
}

export default Page