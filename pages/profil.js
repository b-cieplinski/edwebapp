import { ChevronRightIcon, InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import CardProfileContact from '../components/Cards/CardProfileContact'
import CardProfileInfo from '../components/Cards/CardProfileInfo'
import IndexHeader from '../layouts/IndexHeader'
import IndexNavbar from '../layouts/IndexNavbar'

const Profil = () => {
  return (
<>
      <header>
        <IndexHeader/>
        <IndexNavbar/>
      </header>
        <main className="IndexLayout">
        <div className="mx-auto space-y-10">
        <h1 className="IndexTitle">Profil</h1>
        <p className="NoCardSize font-thin">Zarządzaj swoimi danymi osobowymi i komunikacją, jaką będziesz otrzymywać od EuroDorex.</p>
        <div className="DefaultCard">
<CardProfileInfo/>
<div className="bg-gray-200 w-full h-0.5"/>
<CardProfileContact/>
      <div className="py-10 px-10 flex my-auto border-y justify-between">
        <p>Zgody aboneta</p>
        <div className><ChevronRightIcon className="w-5"/></div>
        </div>
        </div>
        <div className="w-3/5 bg-white shadow-md justify-center rounded-lg mx-auto">

        </div>
        <div className="w-3/5 justify-start rounded-lg mx-auto flex pl-4 pt-8 pb-12">
          <InformationCircleIcon className="h-5 w-5 pr-6"/>Warunki korzystania z serwisu EuroDorex
        </div>
      </div>    
    </main>
</>
  )
}

export default Profil