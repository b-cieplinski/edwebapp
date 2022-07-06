import { CheckCircleIcon, ChevronRightIcon, DocumentTextIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';
import React from 'react'

const CardPMInvoiceHistory = () => {
    const router = useRouter();
  return (
    <div>
        <h2 className="text-center py-8 text-2xl">Rozliczenia</h2>
        <div className="flex flex-row justify-between px-8 py-3 text-sm">
            <p>DO ZAPŁATY</p>
            <p>MOJE WPŁATY</p>
        </div>
        <div className="flex flex-cols-2 justify-between border-y px-6 py-12">
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
        <div className="bg-gray-200 shadow-inner px-4">
            <div className="flex justify-between px-3 py-10 border-b border-gray-300">
                <div>
                    <h2>Moje wpłaty</h2>
                    <p>11.04.2022</p>
                </div>
                <div className="items-center flex">
                    <p className="font-bold">117,96 zł</p>
                </div>
            </div>
            <div className="flex justify-between px-3 py-10 border-b border-gray-300">
                <div>
                    <h2>Zaległość</h2>
                </div>
                <div className="">
                    <p className="font-bold">117,96 zł</p>
                </div>
            </div>
            <div className="flex flex-row justify-between px-3 py-10 border-b border-gray-300">
                <div className="">
                    <h2 className="font-bold">Rachunek</h2>
                    <p>Data wystawienia</p>
                    <p>Termin płatności</p>
                    <p>Numer dokumentu</p>
                </div>
                <div className="text-right">
                    <p className="font-bold">117,96 zł</p>
                    <p className="font-thin">07.04.2022</p>
                    <p className="font-thin">22.04.2022</p>
                    <p className="font-thin">100121432426</p>
                </div>
            </div>
            <div className="flex flex-col justify-between px-1 py-10 space-y-6">
                <div className="flex justify-between cursor-pointer hover:underline">
                    <div className="flex" onClick={() => router.push('/platnosci/szczegoly/id')}><DocumentTextIcon className="h-5"/><p className="ml-3">Zobacz szczegóły rachunku</p></div>
                    <div className="flex"><ChevronRightIcon className="h-5"/></div>
                </div>
                <div className="flex justify-between cursor-pointer hover:underline">
                    <div className="flex"><DocumentTextIcon className="h-5"/><p className="ml-3">Pobierz rachunek (PDF)</p></div>
                </div>
            </div>
        </div>
        <div className="h-12 bg-white border-b px-4"/>
        <div className="flex justify-center py-5">
            Więcej <ChevronDownIcon className="w-6"/>
        </div>
    </div>
  )
}

export default CardPMInvoiceHistory