import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'

const LoginData = () => {
  return (
    <>
    <div className="space-y-4 relative DefaultCard mb-8">
        <button className=" absolute right-4 flex bg-green-200 text-green-600 rounded-full text-center px-5 py-1 text-xs">OK</button>
        <div className="text-sm">Login</div>
        <div className="font-bold text-xl">brandon.246@gmail.com</div>
        <div className="thin-light text-sm">Twój login do Strefy klienta EuroDurex</div>
        <div className="flex justify-center items-end h-12 border-t">
          <button className="flex items-center ">Zmień login <ChevronRightIcon className="w-5"/></button>
        </div>
    </div>
        <div className="space-y-4 relative DefaultCard mb-8">
        <button className="absolute right-4 flex bg-green-200 text-green-600 rounded-full text-center px-5 py-1 text-xs">OK</button>
        <div className="text-sm">Hasło</div>
        <div className="font-bold text-xl space-x-4">*********</div>
        <div className="thin-light text-sm">Bezpieczne hasło pomaga chronić Twoje dane w serwisie Strefy Klienta</div>
        <div className="flex justify-center items-end h-12 border-t">
          <button className="flex items-center ">Zmień hasło <ChevronRightIcon className="w-5"/></button>
        </div>
    </div>
    <div className="space-y-4 relative DefaultCard mb-8">
        <button className="absolute right-4 flex bg-green-200 text-green-600 rounded-full text-center px-5 py-1 text-xs">OK</button>
        <div className="text-sm">Numer telefonu do resetu hasła</div>
        <div className="font-bold text-xl">574 100 654</div>
        <div className="thin-light text-sm">Dodaj swój numer telefonu, a w każdej chwili będziesz mógł szybko zresetować hasło.</div>
        <div className="flex justify-center items-end h-12 border-t">
          <button className="flex items-center ">Zmień numer <ChevronRightIcon className="w-5"/></button>
        </div>
    </div>
    </>
  )
}

export default LoginData