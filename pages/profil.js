import { ChevronRightIcon, InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import CardAbout from '../components/Cards/CardAbout'
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
        <div>
          <CardAbout/>
        </div>
      </div>    
    </main>
</>
  )
}

export default Profil