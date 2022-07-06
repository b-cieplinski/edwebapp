import { CashIcon, ChartBarIcon, HomeIcon, InformationCircleIcon, TruckIcon, UserIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router';
import React from 'react'

const IndexNavbarMobile = () => {
    const router = useRouter();
  return (
    <div className="md:hidden">
    <div className="fixed w-full h-20 bottom-0 z-50 border-t-2 bg-white z-50 bg-opacity-80 backdrop-filter backdrop-blur-lg">
        <div className="grid grid-cols-6 place-items-center gap-x-4 py-4">
            <div className="flex flex-col cursor-pointer" onClick={() => router.push('/')}>
                <HomeIcon className="h-7"/>
                <p className="text-xs">Start</p>
            </div>
            <div className="flex flex-col cursor-pointer" onClick={() => router.push('/platnosci')}>
                <CashIcon className="h-7"/>
                <p className="text-xs">Płatności</p>
            </div>
            <div className="flex flex-col cursor-pointer" onClick={() => router.push('/uslugi')}>
                <TruckIcon className="h-7"/>
                <p className="text-xs">Zamówienia</p>
            </div>
            <div className="flex flex-col cursor-pointer" onClick={() => router.push('/prognozy')}>
                <ChartBarIcon className="h-7"/>
                <p className="text-xs">Prognozy</p>
            </div>
            {/* <div className="flex flex-col cursor-pointer" onClick={() => router.push('/profil')}>
                <UserIcon className="h-7"/>
                <p className="text-xs">Profil</p>
            </div> */}
            <div className="flex flex-col cursor-pointer" onClick={() => router.push('/pomoc')}>
                <InformationCircleIcon className="h-7"/>
                <p className="text-xs">Pomoc</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default IndexNavbarMobile