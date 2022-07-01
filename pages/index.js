import React from 'react'
import Head from 'next/head';
import IndexHeader from '../components/Headers/IndexHeader'
import CardHPPayment from '../components/Cards/CardHPPayment'
import CardHPPromo from '../components/Cards/CardHPPromo'
import { InformationCircleIcon } from '@heroicons/react/solid';
import IndexNavbar from '../components/Navbar/IndexNavbar';

const index = () => {
  return (
    <div>
    <main>
      <IndexHeader/>
      <IndexNavbar/>
      <div className="mx-auto container">
        <div className="mx-auto space-y-10">
        <h1 className="text-center pt-10 text-4xl">Strona główna</h1>
        <div className="w-3/5 bg-white shadow-md justify-center p-5 rounded-lg mx-auto">
        <CardHPPayment/>
        </div>
        <div className="w-3/5 bg-white shadow-md justify-center rounded-lg mx-auto">
        <CardHPPromo/>
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

export default index