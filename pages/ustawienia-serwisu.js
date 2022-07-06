import { LogoutIcon } from '@heroicons/react/outline'
import React from 'react'
import CardAbout from '../components/Cards/CardAbout'
import CardSetLoginData from '../components/Cards/CardSetLoginData'
import LoginData from '../components/Settings/LoginData'
import IndexHeader from '../layouts/IndexHeader'
import IndexNavbar from '../layouts/IndexNavbar'

const Ustawieniaserwisu = () => {
  return (
    <>
    <header>
      <IndexHeader/>
      <IndexNavbar/>
    </header>
    <main className="IndexLayout">
      <h1 className="IndexTitle">Ustawienia Serwisu</h1>
      <div className="DefaultCard mt-8 font-bold text-red-700 flex">
        <LogoutIcon className="w-6"/> <p className="ml-4">Wyloguj Mnie</p>
      </div>
      <div className="NoCardSize py-8">
      <h1 className="py-3">Dane logowania</h1>
        <h3 className="my-4 font-thin">Twój login i hasło do Aplikacji Strefa Klienta EuroDorex. </h3>
        <h3 className="font-thin">Jeśli zapomnisz hasła, możesz je zresetować podczas logowania do Strefy Klienta, za pomocą poniższych danych.</h3>
</div>
<div className="pb-8">
            <LoginData/>
        </div>
        <div>
          <CardAbout/>
        </div>
    </main>
    </>
  )
}

export default Ustawieniaserwisu