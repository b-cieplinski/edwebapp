import React from 'react'
import CardAbout from '../components/Cards/CardAbout'
import CardSetLoginData from '../components/Cards/CardSetLoginData'
import LoginData from '../components/Settings/LoginData'
import IndexHeaderBack from '../layouts/IndexHeaderBack'
import IndexNavbar from '../layouts/IndexNavbar'

const Ustawieniaserwisu = () => {
  return (
    <>
    <header>
      <IndexHeaderBack/>
      <IndexNavbar/>
    </header>
    <main className="IndexLayout">
      <h1 className="IndexTitle">Dane Logowania</h1>
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