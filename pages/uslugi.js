import { InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import IndexHeader from '../components/Headers/IndexHeader'
import IndexNavbar from '../components/Navbar/IndexNavbar'

const Uslugi = () => {
  return (
    <main className="mx-auto container">
    <IndexHeader/>
    <IndexNavbar/>
    <div className="mx-auto space-y-10">
    <h1 className="text-center pt-10 text-4xl">MOJE USŁUGI</h1>
    <div>
        Podstawowe
    <div className="w-3/5 bg-white shadow-md justify-center p-5 rounded-lg mx-auto">
    SFDSDF
    </div>
    </div>
    Dodatkowe
    <div className="w-3/5 bg-white shadow-md justify-center rounded-lg mx-auto">
    ASDD
    </div>
    <div className="w-3/5 justify-start rounded-lg mx-auto flex pl-4 pt-8 pb-12">
      <InformationCircleIcon className="h-5 w-5 pr-6"/>Warunki korzystania z serwisu EuroDorex
    </div>
    </div>
</main>
  )
}

export default Uslugi