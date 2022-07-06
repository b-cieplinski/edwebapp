import { UserCircleIcon } from '@heroicons/react/outline'
import React from 'react'

const CardProfileInfo = () => {
  return (
    <div className="flex flex-col mb-4">
        <div><UserCircleIcon className="w-20 bg-green-600 rounded-full text-white"/></div>
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
            <div className="flex font-bold text-xl">
                <p className="flex flex-row">STEFANA ŻEROMSKIEGO</p> - <p>1/281</p>
            </div>
            <div className="flex font-bold text-xl">
                <p className="flex">01-887</p>-<p>WARSZAWA</p>
            </div>
        </div>
    </div>
  )
}

export default CardProfileInfo