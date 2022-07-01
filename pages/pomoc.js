import { CakeIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import IndexHeader from '../components/Headers/IndexHeader'
import IndexNavbar from '../components/Navbar/IndexNavbar'

const Pomoc = () => {
  return (
    <div>
        <IndexHeader/>
        <IndexNavbar/>
        <main className="mx-auto w-3/5">
        <button className='py-6 px-2 w-full text-left flex bg-white rounded-2xl shadow-md my-4'>
            <CakeIcon className="w-8 h-8 p-1 rounded-full bg-yellow-700 text-white"/>
            <p className="text-xl">Sprawdź co nowego w serwisie</p>
            <ChevronRightIcon className="w-5"/>
        </button>
        <button className='py-6 px-2 w-full text-left flex bg-white rounded-2xl shadow-md my-4'>
            <CakeIcon className="w-8 h-8 p-1 rounded-full bg-yellow-700 text-white"/>
            <p className="text-xl">Sprawdź co nowego w serwisie</p>
            <ChevronRightIcon className="w-5"/>
        </button>
        <button className='py-6 px-2 w-full text-left flex bg-white rounded-2xl shadow-md my-4'>
            <CakeIcon className="w-8 h-8 p-1 rounded-full bg-yellow-700 text-white"/>
            <p className="text-xl">Sprawdź co nowego w serwisie</p>
            <ChevronRightIcon className="w-5"/>
        </button>
        <button className='py-6 px-2 w-full text-left flex bg-white rounded-2xl shadow-md my-4'>
            <CakeIcon className="w-8 h-8 p-1 rounded-full bg-yellow-700 text-white"/>
            <p className="text-xl">Sprawdź co nowego w serwisie</p>
            <ChevronRightIcon className="w-5"/>
        </button>
        </main>
        
    </div>
  )
}

export default Pomoc