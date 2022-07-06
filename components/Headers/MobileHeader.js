import React, { useState } from 'react'
import { CogIcon, BellIcon, UserCircleIcon, MenuAlt1Icon, XIcon, ArrowLeftIcon, ChartBarIcon } from '@heroicons/react/outline'

import Image from 'next/image'
import { useRouter } from 'next/router';

const IndexHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  return (
    <header className="fixed flex flex-row w-full h-20 md:h-24 mx-auto px-12 md:hidden bg-white z-50 bg-opacity-20 backdrop-filter backdrop-blur-lg py-4 shadow-md">
    <div className="flex-1 flex flex-row justify-start items-center">
    <div className="flex items-center h-1 cursor-pointer my-auto">
    {/* This image below is a img but convered into webp with dom lub fom next/image*/}
    <Image onClick ={() => { router.push('/')}} src="/img/logo-slim.svg" width={42} height={42}/>
</div>
<div className="flex font-light text-xs ml-2">Dzien Dobry, Brandon</div>
    </div>
    <div className="flex-1 flex flex-row justify-end items-center space-x-4">
    <div onClick={() => router.push('/prognozy')} className="cursor-pointer"><ChartBarIcon className="h-6 md:h-8 text-gray-600"/></div>
    <div onClick={() => router.push('/ustawienia-serwisu')} className="cursor-pointer"><CogIcon className="h-7 md:h-8 text-gray-600"/></div>
    <div onClick={() => router.push('/powiadomienia')} className="cursor-pointer"><BellIcon className="h-6 md:h-7 text-gray-600"/></div>
    {/* <div onClick={() => router.push('/profil')} className="cursor-pointer"><UserCircleIcon className="h-7 md:h-8 text-gray-600"/></div> */}
    </div>




      <div
        className={`top-0 right-0 w-full mx-auto bg-white p-10 pr-20 text-white fixed h-full z-40 ease-in-out duration-200 ${
          showSidebar ? "translate-y-0" : "-translate-y-[200rem]"
        }`}
      >
        <h3 className="mt-4 text-4xl font-thin text-black font-widest bg-contain bg-no-repeat bg-right ">
          <div className="space-y-8">
          <li className="list-none"><button className="hover:underline" onClick={() => router.push('/') && setShowSidebar(!showSidebar)}>Strona główna</button></li>
          <li className="list-none"><button className="hover:underline" onClick={() => router.push('/platnosci')}>Płatności</button></li>
          <li className="list-none"><button className="hover:underline" onClick={() => router.push('/uslugi')}>Zamówienia</button></li>
          <li className="list-none"><button className="hover:underline" onClick={() => router.push('/prognozy')}>Prognozy</button></li>
          <li className="list-none"><button className="hover:underline" onClick={() => router.push('/profil')}>Profil</button></li>
          <li className="list-none"><button className="hover:underline" onClick={() => router.push('/pomoc')}>Pomoc</button></li>
          </div>
        </h3>
      </div>

</header>
  )
}

export default IndexHeader