import React from 'react'

const CardPMDetails = () => {
  return (
    <div>
        <div className="DefaultCard">
        <div className="grid grid-rows-5">
        <p className="mb-5 mt-1 font-thin">01.06.2022 - 30.06.2022</p>
        <h1 className="font-bold text-xl">Opłaty biezące za czerwiec</h1>
        <h3 className="mb-10">To Twój pełny miesiąc korzystania z usług:</h3>
        <h4 className="mb-6">Internet</h4>
        <li classsName="">INTERNET ŚWIATŁOWODOWY DO 750 Mb/s</li>
        </div>
        <div className="bg-gray-200 h-0.5 rounded-full"></div>
        <div className="flex flex-row justify-between my-6">
            <div className="space-y-4">
                <h2 className="font-bold text-xl">Razem brutto</h2>
                <p className="font-thin text-sm">Opłaty biezące za czerwiec</p>
            </div>
            <div className="font-bold text-lg">
                58,98 zł
            </div>
        </div>
        </div>
        <div className="NoCardSize">
          <div className="text-xl my-6 font-bold">
          <h1>Łącznie brutto</h1>
          <h1>58,98 zł</h1>  
          </div>
          <div className="space-y-4">
          <div className="flex flex-row justify-between">
                <div>Data wystawienia rachunku</div>
                <div>07.06.2022</div>
          </div>
          <div className="flex flex-row justify-between">
                <div>Termin płatności rachunku</div>
                <div>23.06.2022</div>
          </div>
          <div className="flex flex-row justify-between">
                <div>Numer dokumentu</div>
                <div>100124440516</div>
          </div>
          </div>
        </div>
    
    </div>
  )
}

export default CardPMDetails