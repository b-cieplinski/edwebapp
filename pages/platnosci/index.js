import React from 'react'
import CardPMCount from '../../components/Cards/CardPMCount'
import CardPMInvoiceHistory from '../../components/Cards/CardPMInvoiceHistory'
import CardPMStatus from '../../components/Cards/CardPMStatus'
import CardPMPromo from '../../components/Cards/CardPMPromo'
import IndexHeader from '../../layouts/IndexHeader'
import IndexNavbar from '../../layouts/IndexNavbar'
import { InformationCircleIcon } from '@heroicons/react/outline'

const Platnosci = () => {
  return (
    <>
    <header>    
      <IndexHeader/>
      <IndexNavbar/>
    </header>  
    <main className="IndexLayout">

        <div className="space-y-10">
        <h1 className="IndexTitle">Płatności</h1>
        <div className="DefaultCard">
        <CardPMStatus/>
        </div>
        <div className="NoCardSize">
        <CardPMCount/>
        </div>
        <div className="DefaultCardP0">
        <CardPMInvoiceHistory/>
        </div>
        <div className="PromoCard">
        <CardPMPromo/>
        </div>
        <div className="w-11/12 md:w-10/12 justify-start rounded-lg mx-auto flex pl-4 pt-8 pb-12">
          <InformationCircleIcon className="h-5 w-5 pr-6"/>Warunki korzystania z serwisu EuroDorex
        </div>
        </div>
    </main>
    </>
  )
}

export default Platnosci