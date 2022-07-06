import { ArrowLeftIcon, CogIcon, InformationCircleIcon, TrashIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React from 'react'
import CardAbout from '../components/Cards/CardAbout'
import IndexHeaderBack from '../layouts/IndexHeaderBack'
import IndexNavbar from '../layouts/IndexNavbar'

const Powiadomienia = () => {
  const router = useRouter();
  return (
    <>
    <header>
              <IndexHeaderBack/>
        <IndexNavbar/>
    </header>
<main className="IndexLayout">
        <div className="mx-auto space-y-10">
        <h1 className="IndexTitle md:hidden">Powiadomienia</h1>
          <div className="md:grid grid-cols-3 w-3/5 mx-auto items-center content-center hidden">
              <div className="flex justify-start cursor-pointer" onClick={() => router.back()}><ArrowLeftIcon className="w-8"/></div>
              <div className="flex items-center "><h1 className="IndexTitle">Powiadomienia</h1></div>
              <div className="flex justify-end cursor-pointer" onClick={() => router.push('/ustawienia-powiadomien')}><CogIcon className="w-8"/></div>
          </div>

          <div className="text-center w-3/5 mx-auto flex justify-center space-x-4">
            <div className="px-4 bg-white shadow-md py-2 text-xl rounded-lg">Alerty</div>
            <div className="px-4 bg-white shadow-md py-2 text-xl rounded-lg">Ogólne</div>
            <div className="px-4 bg-yellow-300 shadow-md py-2 text-xl rounded-lg ">Wszystkie</div>
          </div>

          <div className="w-11/12 md:w-3/5 mx-auto flex justify-end max-w-2xl">
              <button className="py-2 px-4 bg-white shadow-md rounded-lg flex justify-self-end"><TrashIcon className="w-5"/>Usuń wszystkie</button>
          </div>
        <div className="DefaultCard">
          <div className="flex justify-between">
          <button className="text-sm px-4 rounded-full border-2 border-red-300 flex text-rose-700"><InformationCircleIcon className="w-5 mr-1"/>USŁUGA ZAWIESZONA</button>
          <button className="px-4 text-gray-600"><TrashIcon className="w-6"/></button>
          </div>
          <div className="space-y-3 my-6">
            <h1 className="text-xl">Z powodu braku wpłaty zablokowaliśmy Karte</h1>
            <p className="font-light">Zapłać online to włączymy ponownie w ciągu minuty</p>
            <p className="text-xs font-light">08.06.2022</p>
          </div>
          <div className="flex justify-end mx-4"><button className="flex justify-end">Zapłać teraz</button></div>
          
        </div>

          <div>
            <CardAbout/>
          </div>
        </div>
    </main>
    </>
  )
}

export default Powiadomienia