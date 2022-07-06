import { ChevronDownIcon, ChevronRightIcon, InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import CardAbout from '../components/Cards/CardAbout'
import CardMarketing from '../components/Cards/CardMarketing'
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
        <p className="NoCardSize font-thin">Zarządzaj umowami, danymi osobowymi czy komunikacją, jaką będziesz otrzymywać od EuroDorex.</p>
        <div className="DefaultCard">
<CardProfileInfo/>
<div className="bg-gray-200 w-full h-0.5"/>
<CardProfileContact/>
<div className="flex justify-center font-bold border-t pt-5">Wyświetl całą umowę <ChevronDownIcon className="w-6"/> </div>
        </div>
        {/* <div className="DefaultCard">
<CardMarketing/>
        </div> */}
        <div>
          <CardAbout/>
        </div>
      </div>    
    </main>
</>
  )
}

export default Profil