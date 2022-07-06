import { InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import CardAbout from '../components/Cards/CardAbout'
import IndexHeader from '../layouts/IndexHeader'
import IndexNavbar from '../layouts/IndexNavbar'

const Dlaciebie = () => {
  return (
    <>
    <header>
      <IndexHeader/>
      <IndexNavbar/>
    </header>
    <main className="IndexLayout">
        <div className="mx-auto space-y-10">
        <h1 className="IndexTitle">Prognozy</h1>
        <div className="grid grid-rows-1 md:grid-cols-3 justify-items-center">
          <div className="bg-blue-100 rounded-lg w-full px-6 mr-10 shadow-md h-52">Aktualne Ceny</div>
          <div className="bg-green-100 rounded-lg w-full px-6 mx-10 shadow-md">Prognoza</div>
          <div className="bg-yellow-100 rounded-lg w-full px-6 ml-10 shadow-md">Cena na Stracji</div>
        </div>
        <h2>Prognozy na 5 dni</h2>
<div className="DefaultCard">
  asdo
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
        <div>
          <CardAbout/>
        </div>
      </div>
    </main>
    </>
  ) 
}

export default Dlaciebie