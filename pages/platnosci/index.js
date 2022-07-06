import React from 'react'
import CardPMCount from '../../components/Cards/CardPMCount'
import CardPMInvoiceHistory from '../../components/Cards/CardPMInvoiceHistory'
import CardPMStatus from '../../components/Cards/CardPMStatus'
import CardPMPromo from '../../components/Cards/CardPMPromo'
import IndexHeader from '../../layouts/IndexHeader'
import IndexNavbar from '../../layouts/IndexNavbar'
import { InformationCircleIcon } from '@heroicons/react/outline'
import CardAbout from '../../components/Cards/CardAbout'

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
        <div>
          <CardAbout/>
        </div>
        </div>
    </main>
    </>
  )
}

export default Platnosci