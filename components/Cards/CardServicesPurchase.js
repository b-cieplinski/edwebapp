import Image from 'next/image'
import React from 'react'

const CardServicesPurchase = () => {
  return (
    <div>
            <h1 className="ml-6 mb-4 font-light text-xl">Dostawy</h1>
    <div className="md:grid-cols-2 lg:grid-cols-3 grid-rows sm:grid-cols-2 grid gap-8 mx-4 mb-6">

<div className="relative h-80 cursor-pointer place-content-center shadow-md rounded-2xl">
        <Image src="/img/olej-napedowy.jpg" layout="fill"
        objectFit="cover"
        className="rounded-2xl"/>

        <div className="absolute ml-4 bottom-4 w-[86%] bg-white rounded-lg py-4 px-5 hover:-translate-y-2 transition transform duration-500 ease-in-out shadow-lg h-44">
            <h3 className="text-xl font-light mb-3">Dostawa oleju napędowego</h3>
            <p className="text-xs truncate">sdfsdf</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">Zobacz Oferte</button>
        </div>
    </div>

    <div className="relative h-80 cursor-pointer place-content-center shadow-md rounded-2xl">
        <Image src="/img/opal.jpg" layout="fill"
        objectFit="cover"
        className="rounded-2xl"/>

        <div className="absolute ml-4 bottom-4 w-[86%] bg-white rounded-lg py-4 px-5 hover:-translate-y-2 transition transform duration-500 ease-in-out shadow-lg h-44">
            <h3 className="text-xl font-light mb-3">Dostawa oleju opałowego</h3>
            <p className="text-xs truncate">sdfsdf</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">Zobacz Oferte</button>
        </div>
    </div>
  
    </div>
    <h1 className="ml-6 mb-4 font-light text-xl">Usługi</h1>
<div className="md:grid-cols-2 lg:grid-cols-3 grid-rows sm:grid-cols-2 grid gap-8 mx-4 mb-6">

<div className="relative h-80 cursor-pointer place-content-center shadow-md rounded-2xl">
        <Image src="/img/card.jpg" layout="fill"
        objectFit="cover"
        className="rounded-2xl"/>

        <div className="absolute ml-4 bottom-4 w-[86%] bg-white rounded-lg py-4 px-5 hover:-translate-y-2 transition transform duration-500 ease-in-out shadow-lg h-44">
            <h3 className="text-xl font-light mb-3">Karta Flotowa EuroDurex</h3>
            <p className="text-xs truncate">sdfsdf</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">Zobacz Oferte</button>
        </div>
    </div>

        {/* <div className="justify-between mx-4 my-4 w-full bg-white shadow-md rounded-md">
            <div className="w-full relative h-80 rounded-lg">
            <Image src="/img/card.jpg" layout="fill"/>
            </div>
            <div className="bg-white px-4 py-2">
            <button className="bg-yellow-300 text-xs px-4 rounded-full mb-5">POZNAJ</button>
            <h2>Karta flotowa Eurodurex</h2>
            </div>
        </div> */}

    <div className="relative h-80 cursor-pointer place-content-center shadow-md rounded-2xl">
        <Image src="/img/zbiornik.jpg" layout="fill"
        objectFit="cover"
        className="rounded-2xl"/>

        <div className="absolute ml-4 bottom-4 w-[86%] bg-white rounded-lg py-4 px-5 hover:-translate-y-2 transition transform duration-500 ease-in-out shadow-lg h-44">
            <h3 className="text-xl font-light mb-3">Zbiornik na olej napędowy</h3>
            <p className="text-xs truncate">sdfsdf</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">Zobacz Oferte</button>
        </div>
    </div>
    <div className="relative h-80 cursor-pointer place-content-center shadow-md rounded-2xl">
        <Image src="/img/serwis.jpg" layout="fill"
        objectFit="cover"
        className="rounded-2xl"/>

        <div className="absolute ml-4 bottom-4 w-[86%] bg-white rounded-lg py-4 px-5 hover:-translate-y-2 transition transform duration-500 ease-in-out shadow-lg h-44">
            <h3 className="text-xl font-light mb-3">Serwis <br/>zbiorników</h3>
            <p className="text-xs truncate">prowadzi pełną obsługę serwisową, dzierżawionych i sprzedanych zbiorników do przewozu oraz magazynowania oleju</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 self-end">Zobacz Oferte</button>
        </div>
    </div>

    </div>
    <h1 className="ml-6 mb-4 font-light text-xl">Inne</h1>
<div className="md:grid-cols-2 lg:grid-cols-3 grid-rows sm:grid-cols-2 grid gap-8 mx-4">
    
    <div className="relative h-80 cursor-pointer place-content-center shadow-md rounded-2xl">
        <Image src="/img/oferta.jpg" layout="fill"
        objectFit="cover"
        className="rounded-2xl"/>

        <div className="absolute ml-4 bottom-4 w-[86%] bg-white rounded-lg py-4 px-5 hover:-translate-y-2 transition transform duration-500 ease-in-out shadow-lg h-44">
            <h3 className="text-xl font-light mb-3">Idywidulana <br/>oferta</h3>
            <p className="text-xs truncate">sdfsdf</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">Zobacz Oferte</button>
        </div>
    </div>
    <div className="relative h-80 cursor-pointer place-content-center shadow-md rounded-2xl">
        <Image src="/img/polec.jpg" layout="fill"
        objectFit="cover"
        className="rounded-2xl"/>

        <div className="absolute ml-4 bottom-4 w-[86%] bg-white rounded-lg py-4 px-5 hover:-translate-y-2 transition transform duration-500 ease-in-out shadow-lg h-44">
            <h3 className="text-xl font-light mb-3">Poleć i<br/> zyskaj</h3>
            <p className="text-xs truncate">sdfsdf</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">Zobacz Oferte</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default CardServicesPurchase