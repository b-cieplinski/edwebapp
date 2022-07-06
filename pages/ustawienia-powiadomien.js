import { ArrowLeftIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import IndexHeader from '../layouts/IndexHeader'
import IndexNavbar from '../layouts/IndexNavbar'
import { useRouter } from 'next/router'

const Ustawieniapowiadomien = () => {
    const router = useRouter();
  return (
    <main className="mx-auto container">
        <IndexHeader/>
        <IndexNavbar/>
        <div className="mx-auto space-y-10">
          <div className="grid grid-cols-3 w-3/5 mx-auto items-center content-center">
              <div className=" flex justify-start cursor-pointer" onClick={() => router.back()}><ArrowLeftIcon className="w-8"/></div>
              <div className="flex items-center w-[400px]"><h1 className="IndexTitle">Ustawienia Powiadomień</h1></div>
              <div></div>
          </div>
       
        <div className="w-10/12 md:w-3/5 bg-white shadow-md justify-center px-5 rounded-lg mx-auto max-w-2xl py-10">
            <h1 className="text-center text-xl font-bold my-4">Przypomnienia o płatnościach</h1>
            <p className="font-light text-center">To lista Twoich urządzeń, na których włączono przypomnienia o płatnościach. Pamiętaj o włączeniu przeglądarki na komputerze. Bez tego nie skorzystasz z przypomnień</p>
            <div className="flex w-full items-center mt-12">
                <div className="basis-1/6 justify-center flex"><CheckCircleIcon className="w-6 bg-green-600 text-white rounded-full justify-self-center"/></div>
                <div className="basis-full">
                    <h3 className="font-bold">Komputer</h3>
                    <p>Windows, Google Chrome</p>
                </div>
                <div className="basis-2/6 text-right justify-center flex">
                    <button className="text-rose-900 font-bold ">Wyłącz</button>
                </div>
            </div>
        </div>

        <div className="w-3/5 justify-start rounded-lg mx-auto flex pl-4 pt-8 pb-12">
          <InformationCircleIcon className="h-5 w-5 pr-6"/>Warunki korzystania z serwisu EuroDorex
        </div>
        </div>
    </main>
  )
}

export default Ustawieniapowiadomien