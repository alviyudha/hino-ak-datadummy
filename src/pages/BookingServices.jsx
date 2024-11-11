/* eslint-disable no-unused-vars */
import React from 'react'
import FormServiceComp from '../components/FormServicesComp'
import NavbarBootstrap from '../components/NavbarBootstrap'
import ReactFloatingWspComp from '../components/ReactFloatingWspComp'
import Footer from '../components/Footer'
export default function BookingServices() {
  return (
    <>
    <NavbarBootstrap />
    <main className='BookingServices'>
      <div className="box-form shadow-lg ">
        <h1 className='text-color-primary'>Form Booking Service</h1>
        <p className='text-color-gray'>
          Untuk Booking tanggal service, Silahkan lengkapi data Anda pada form Booking Service dibawah ini.
        </p>
        <FormServiceComp />
      </div>
    </main>
    <ReactFloatingWspComp />
    <Footer />
    </>
  )
}
