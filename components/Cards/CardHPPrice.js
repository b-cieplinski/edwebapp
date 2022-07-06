import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChevronDownIcon, ChevronRightIcon, FireIcon, TrendingDownIcon, TrendingUpIcon, VariableIcon } from '@heroicons/react/outline'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import React from 'react'

const CardHPPrice = () => {
  return (
    <div>
    <div className="p-5 rounded-lg grid md:grid-cols-2 gap-4">
        <div className="p-4 flex bg-white shadow-md rounded-2xl">
            <div className="flex flex-col w-full">
                <div className="flex">
                <div className="border rounded-2xl py-5 px-2.5 border-dashed shadow-md bg-green-100">Pb 95</div>
                <div className="mt-3 ml-3">
                    <p>Bęzyna</p>
                    <p className="font-thin text-sm">12 Lipiec 2022 - 15:45</p>
                    </div>
                    <div className="my-auto ml-auto">
                        <ChevronRightIcon className="w-10"/>
                    </div>
                </div>
                <div className="flex flex-cols-3 text-center justify-around mt-4">
                    <div>
                    <p className="font-thin text-sm">Hurt</p>
                    <p className="flex"><ArrowDownIcon className="w-4 text-green-500"/>8.40 zł/l</p>
                    </div>
                    <div>
                    <p className="font-thin text-sm">Detal</p>
                    <p className="flex"><ArrowUpIcon className="w-4 text-red-500"/>8.40 zł/l</p>
                    </div>
                    <div>
                    <p className="font-thin text-sm">Ty zapłacisz</p>
                    <p>8.40 zł/l</p>
                    </div>
                </div>
                <div className="text-xs font-thin text-right mt-4">
                    <p>*ceny podane Netto</p>
                </div>
            </div>
        <div>
        </div>
        </div>
        <div className="p-4 flex bg-white shadow-md rounded-2xl">
            <div className="flex flex-col w-full">
                <div className="flex">
                <div className="border rounded-2xl p-5 border-dashed shadow-md bg-black text-white">ON</div>
                <div className="mt-3 ml-3">
                    <p>Olej Napędowy</p>
                    <p className="font-thin text-sm">12 Lipiec 2022 - 15:45</p>
                    </div>
                    <div className="my-auto ml-auto">
                        <ChevronRightIcon className="w-10"/>
                    </div>
                </div>
                <div className="flex flex-cols-3 text-center justify-around mt-4">
                    <div>
                    <p className="font-thin text-sm">Hurt</p>
                    <p className="flex"><ArrowDownIcon className="w-4 text-green-500"/>8.40 zł/l</p>
                    </div>
                    <div>
                    <p className="font-thin text-sm">Detal</p>
                    <p className="flex"><ArrowUpIcon className="w-4 text-red-500"/>8.40 zł/l</p>
                    </div>
                    <div>
                    <p className="font-thin text-sm">Ty zapłacisz</p>
                    <p>8.40 zł/l</p>
                    </div>
                </div>
                <div className="text-xs font-thin text-right mt-4">
                    <p>*ceny podane Netto</p>
                </div>
            </div>
        <div>
        </div>
        </div>
        <div className="p-4 flex bg-white shadow-md rounded-2xl">
            <div className="flex flex-col w-full">
                <div className="flex">
                <div className="border rounded-2xl p-5 border-dashed shadow-md bg-orange-100"><FireIcon className="w-5"/></div>
                <div className="mt-3 ml-3">
                    <p>Olej Opałowy</p>
                    <p className="font-thin text-sm">12 Lipiec 2022 - 15:45</p>
                    </div>
                    <div className="my-auto ml-auto">
                        <ChevronRightIcon className="w-10"/>
                    </div>
                </div>
                <div className="flex flex-cols-3 text-center justify-around mt-4">
                    <div>
                    <p className="font-thin text-sm">Hurt</p>
                    <p className="flex"><ArrowDownIcon className="w-4 text-green-500"/>8.40 zł/l</p>
                    </div>
                    <div>
                    <p className="font-thin text-sm">Detal</p>
                    <p className="flex"><ArrowUpIcon className="w-4 text-red-500"/>8.40 zł/l</p>
                    </div>
                    <div>
                    <p className="font-thin text-sm">Ty zapłacisz</p>
                    <p>8.40 zł/l</p>
                    </div>
                </div>
                <div className="text-xs font-thin text-right mt-4">
                    <p>*ceny podane Netto</p>
                </div>
            </div>
        <div>
        </div>
        </div>
        <div className="p-4 flex bg-white shadow-md rounded-2xl">
            <div className="flex flex-col w-full">
                <div className="flex">
                <div className="border rounded-2xl p-5 border-dashed shadow-md bg-cyan-500 text-white"><VariableIcon className="w-5"/></div>
                <div className="mt-3 ml-3">
                    <p>AdBlue</p>
                    <p className="font-thin text-sm">12 Lipiec 2022 - 15:45</p>
                    </div>
                    <div className="my-auto ml-auto">
                        <ChevronRightIcon className="w-10"/>
                    </div>
                </div>
                <div className="flex flex-cols-3 text-center justify-around mt-4">
                    <div>
                    <p className="font-thin text-sm">Hurt</p>
                    <p className="flex"><ArrowDownIcon className="w-4 text-green-500"/>8.40 zł/l</p>
                    </div>
                    <div>
                    <p className="font-thin text-sm">Detal</p>
                    <p className="flex"><ArrowUpIcon className="w-4 text-red-500"/>8.40 zł/l</p>
                    </div>
                    <div>
                    <p className="font-thin text-sm">Ty zapłacisz</p>
                    <p>8.40 zł/l</p>
                    </div>
                </div>
                <div className="text-xs font-thin text-right mt-4">
                    <p>*ceny podane Netto</p>
                </div>
            </div>
        <div>
        </div>
        </div>

    </div>
    <div className="flex justify-center">
            <button className="flex items-center">Więcej Informacji<ChevronDownIcon className="h-5"/></button>
        </div>
    </div>
  )
}

export default CardHPPrice