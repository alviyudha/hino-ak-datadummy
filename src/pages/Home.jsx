/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarBootstrap from '../components/NavbarBootstrap'
import CarouselBootstrap from '../components/CarouselBootstrap'
import TabProdukComp from '../components/TabProdukComp'
import FeaturedComp from '../components/FeaturedComp'
import FindDealer from '../components/findDealer'
import Footer from '../components/Footer'
import ReactFloatingWspComp from '../components/ReactFloatingWspComp'

export default function Home() {
  return (
  <>
  <NavbarBootstrap />
  <CarouselBootstrap />
  <FeaturedComp/>
  <TabProdukComp/>
  <FindDealer/>
  <ReactFloatingWspComp />
  <Footer />
  </>
  )
}
