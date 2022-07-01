import { CheckCircleIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'

const CardPMInvoiceHistory = () => {
  return (
    <div>
        <h2 className="text-center py-8 text-2xl">Rozliczenia</h2>
        <div className="flex flex-row justify-between px-8 py-3 text-sm">
            <p>DO ZAPŁATY</p>
            <p>MOJE WPŁATY</p>
        </div>
        <div className="flex flex-cols-2 justify-between border-y px-5 py-5">
            <div className="flex-col">
                <p className="pb-4">Czerwiec 2022</p>
                <div className="flex flex-row">
                    <div className=""><CheckCircleIcon className="h-6 w-6 border text-white bg-green-600 rounded-full"/></div>
                    <div className="flex flex-col ml-2">
                        <p className="font-bold">Opłacono</p>
                        <p className="font-thin text-sm">Łącznie 58,98 zł</p>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-2 justify-items-end content-center">
                <div className="text-xl font-light">117,96 zł</div>
                <div><button><ChevronDownIcon className="w-8"/></button></div>
            </div>
        </div>
    </div>
  )
}

export default CardPMInvoiceHistory