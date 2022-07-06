import { InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import CardAbout from '../components/Cards/CardAbout'
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
            <div>
              <CardAbout/>
            </div>
        </div>
    </main>
    </>
  )
}

export default Uslugi