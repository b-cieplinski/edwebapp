import { InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import IndexHeader from '../components/Headers/IndexHeader'
import IndexNavbar from '../components/Navbar/IndexNavbar'

const Dlaciebie = () => {
  return (
    <main>
      <IndexHeader/>
      <IndexNavbar/>
      <div className="mx-auto container">
        <div className="mx-auto space-y-10">
        <h1 className="text-center pt-10 text-4xl">Prognozy</h1>
        <div className="grid grid-rows-1 md:grid-cols-3 justify-items-center">
          <div className="bg-blue-100 rounded-lg w-full px-6 mr-10 shadow-md h-52">Aktualne Ceny</div>
          <div className="bg-green-100 rounded-lg w-full px-6 mx-10 shadow-md">Prognoza</div>
          <div className="bg-yellow-100 rounded-lg w-full px-6 ml-10 shadow-md">Cena na Stracji</div>
        </div>
        <h2>Prognozy na 5 dni</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full bg-white shadow-md justify-center p-5 rounded-lg mx-auto">
        Lotos
        </div>
        <div className="w-full bg-white shadow-md justify-center p-5 rounded-lg mx-auto">
Orlen
        </div>
        </div>
        <h2>Historia (Ostatnie 30 dni)</h2>
        <div className="grid grid-cols-1 md:grid-cols-1">
        <div className="w-full bg-white shadow-md justify-center p-5 rounded-lg mx-auto">
        Lotos
        </div>
        <div className="w-full bg-white shadow-md justify-center p-5 rounded-lg mx-auto">
Orlen
        </div>
        </div>
        <div className="w-3/5 justify-start rounded-lg mx-auto flex pl-4 pt-8 pb-12">
          <InformationCircleIcon className="h-5 w-5 pr-6"/>Warunki korzystania z serwisu EuroDorex
        </div>
      </div>
      </div>
    
    </main>
  ) 
}

export default Dlaciebie