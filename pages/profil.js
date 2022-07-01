import { InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import IndexHeader from '../components/Headers/IndexHeader'
import IndexNavbar from '../components/Navbar/IndexNavbar'

const Profil = () => {
  return (
    <div>
        <main>
      <IndexHeader/>
      <IndexNavbar/>
      <div className="mx-auto container">
        <div className="mx-auto space-y-10">
        <h1 className="text-center pt-10 text-4xl">Profil</h1>
        <p className="mx-auto text-center w-1/2 font-thin">Zarządzaj swoimi danymi osobowymi i komunikacją, jaką będziesz otrzymywać od EuroDorex.</p>
        <div className="w-3/5 bg-white shadow-md justify-center p-5 rounded-lg mx-auto">
asdasd
        </div>
        <div className="w-3/5 bg-white shadow-md justify-center rounded-lg mx-auto">
asdas
        </div>
        <div className="w-3/5 justify-start rounded-lg mx-auto flex pl-4 pt-8 pb-12">
          <InformationCircleIcon className="h-5 w-5 pr-6"/>Warunki korzystania z serwisu EuroDorex
        </div>
      </div>
      </div>
    
    </main>
    </div>
  )
}

export default Profil