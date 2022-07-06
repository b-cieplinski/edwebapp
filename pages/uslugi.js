import { InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import CardServicesActive from '../components/Cards/CardServicesActive'
import CardServicesPurchase from '../components/Cards/CardServicesPurchase'
import IndexHeader from '../layouts/IndexHeader'
import IndexNavbar from '../layouts/IndexNavbar'

const Uslugi = () => {
  return (
    <>
    <header>
      <IndexHeader/>
      <IndexNavbar/>
    </header>
    <main className="IndexLayout">

        <div className="mx-auto space-y-10">
        <h1 className="IndexTitle">Zamówienia</h1>
        <div className="flex flex-col">
            <div>
              <CardServicesPurchase/>
            </div>
        </div>
        <div>
            <h1 className="ml-4 mb-4 font-light text-xl">Moje usługi</h1>
              <CardServicesActive/>
            </div>
        <div className="w-3/5 justify-start rounded-lg mx-auto flex pl-4 pt-8 pb-12">
          <InformationCircleIcon className="h-5 w-5 pr-6"/>Warunki korzystania z serwisu EuroDorex
        </div>
        </div>
    </main>
    </>
  )
}

export default Uslugi