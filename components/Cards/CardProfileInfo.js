import { DocumentTextIcon, UserCircleIcon } from '@heroicons/react/outline'
import React from 'react'

const CardProfileInfo = () => {
  return (
    <div className="flex flex-col mb-4">

        <div className="mt-6">
            <div className="text-md font-light">Numer Umowy</div>
            <div className="text-xl font-bold">000000000</div>
        </div>
        <div className="mt-6">
            <div className="text-md font-light">Podstawa Umowy</div>
            <div className="text-xl font-bold">Dostawa 1000 litrów oleju opałowego miesięcznie</div>
        </div>
        <div className="mt-6">
            <div className="text-md font-light">Adres Dostawy</div>
            <div className="text-xl font-bold">Westfield Arkadia, Aleja Jana Pawła II 82 00-175 Warszawa, Polska.</div>
        </div>

        <div className="mt-6">
            <div className="text-md font-light">Właściciel umowy</div>
            <div className="text-xl font-bold">Brandon Cieplinski</div>
        </div>
        <div className="mt-6">
            <div className="text-md font-light">Numer Klienta</div>
            <div className="text-xl font-bold">000000000</div>
        </div>
        <div className="mt-6">
            <div className="text-md font-light">Siedziba firmy</div>
            <div className="font-bold text-xl">Westfield Arkadia, Aleja Jana Pawła II 82 00-175 Warszawa, Polska.</div>
        </div>
    </div>
  )
}

export default CardProfileInfo