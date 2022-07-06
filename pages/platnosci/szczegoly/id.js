import { ArrowLeftIcon, InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import CardPMPromo from '../../../components/Cards/CardPMPromo'
import IndexHeaderBack from '../../../layouts/IndexHeaderBack'
import IndexNavbar from '../../../layouts/IndexNavbar'
import { useRouter } from 'next/router'
import CardPMDetails from '../../../components/Cards/CardPMDetails'
import CardHelpPayment from '../../../components/Cards/CardHelpPayment'
import CardAbout from '../../../components/Cards/CardAbout'

const Szczegoly = () => {
    const router = useRouter();
  return (
    <>
    <header>
      <IndexHeaderBack/>
      <IndexNavbar/>
    </header>
    <main className="IndexLayout">
    <div className="mx-auto space-y-10">
    <div className="grid grid-cols-3 pt-10 ">
        <button className="flex justify-center" onClick={() => router.push('/')}><ArrowLeftIcon className="w-8"/></button>
        <h1 className="IndexTitle">SZCZEGÓŁY</h1>
        <div/>
    </div>
    <div className="bg-yellow-400 px-12 py-8 w-52 justify-center mx-auto rounded-full text-center">
            <p className="text-sm text-gray-700">Rachunek</p>
            <h1 className="text-2xl font-bold text-gray-700">58,98 zł</h1>
        </div>
    <div className="">
      <CardPMDetails/>
    </div>
    <div className="h-0.5 bg-gray-200 w-96 mx-auto"/>
    <div className="">
    <CardHelpPayment/>
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

export default Szczegoly