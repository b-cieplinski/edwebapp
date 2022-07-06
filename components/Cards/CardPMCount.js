import React from 'react'

const CardPMCount = () => {
  return (
    <div>
        <div className="flex flex-col">
        <div className="px-8 border-4 border-green-500 w-48 rounded-full text-center py-6 mx-auto z-10 bg-white shadow-2xl">
        <p className="text-sm">Do zapłaty</p>
        <p className="text-3xl">0,00 zł</p>
        </div></div>
        <div className="bg-[url('/img/happy.jpg')] h-72 w-full bg-cover bg-center bg-no-repeat rounded-lg -translate-y-14 shadow-md"></div>
    </div>
  )
}

export default CardPMCount