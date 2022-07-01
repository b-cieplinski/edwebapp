import React from 'react'
import CardPMCount from '../components/Cards/CardPMCount'
import CardPMInvoiceHistory from '../components/Cards/CardPMInvoiceHistory'
import CardPMStatus from '../components/Cards/CARDPMStatus'
import CardPMPromo from '../components/Cards/CARDPMPromo'
import IndexHeader from '../components/Headers/IndexHeader'
import IndexNavbar from '../components/Navbar/IndexNavbar'
import { InformationCircleIcon } from '@heroicons/react/outline'

const Platnosci = () => {
  return (
    <main className="mx-auto container">
        <IndexHeader/>
        <IndexNavbar/>
        <div className="mx-auto space-y-10">
        <h1 className="text-center pt-10 text-4xl">PŁATNOŚCI</h1>
        <div className="w-3/5 bg-white shadow-md justify-center p-5 rounded-lg mx-auto">
        <CardPMStatus/>
        </div>
        <div className="w-3/5 justify-center rounded-lg mx-auto">
        <CardPMCount/>
        </div>
        <div className="w-3/5 bg-white shadow-md justify-center rounded-lg mx-auto">
        <CardPMInvoiceHistory/>
        </div>
        <div className="w-3/5 bg-white shadow-md justify-center rounded-lg mx-auto">
        <CardPMPromo/>
        </div>
        <div className="w-3/5 justify-start rounded-lg mx-auto flex pl-4 pt-8 pb-12">
          <InformationCircleIcon className="h-5 w-5 pr-6"/>Warunki korzystania z serwisu EuroDorex
        </div>
        </div>
    </main>
  )
}

export default Platnosci