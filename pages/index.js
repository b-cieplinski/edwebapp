import React from 'react'
import Head from 'next/head';
import IndexHeader from '../layouts/IndexHeader'
import CardHPPayment from '../components/Cards/CardHPPayment'
import CardHPPromo from '../components/Cards/CardHPPromo'
import { InformationCircleIcon } from '@heroicons/react/solid';
import IndexNavbar from '../layouts/IndexNavbar';
import CardHPPrice from '../components/Cards/CardHPPrice';
import Buffer from '../layouts/Buffer'

const index = () => {
  return (
  <>
      <header>      
      <IndexHeader/>
      <IndexNavbar/>
      </header>
    <main className="IndexLayout">
        <div className="mx-auto space-y-10">
        <h1 className="IndexTitle">Strona główna</h1>
        <div className="DefaultCard">
        <CardHPPayment/>
        </div>

        <div className="w-11/12 md:w-10/12 mx-auto md:max-w-4xl">
          <h1 className="w-11/12 md:w-10/12 ml-10">Aktualne Ceny</h1>
        <CardHPPrice/>
        </div>
        <div className="w-10/12 md:w-3/5 bg-white shadow-md justify-center rounded-lg mx-auto max-w-2xl">
        <CardHPPromo/>
        </div>
        <div className="w-3/5 justify-start rounded-lg mx-auto flex pl-4 pt-8 pb-12 max-w-2xl">
          <InformationCircleIcon className="h-5 w-5 pr-6"/>Warunki korzystania z serwisu EuroDorex
        </div>
      </div>
    </main>
    </>
  )
}

export default index