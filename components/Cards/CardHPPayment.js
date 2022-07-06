import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router';

const CardHomePage = () => {
  const router = useRouter();
  return (
    <div className="space-y-3 bg-black-300 cursor-pointer" onClick={() => router.push('/platnosci')}>
      <div className="flex flex-row justify-between"><p className="text-sm border px-3 py-1 rounded-full">JESTEŚ NA CZYSTO!</p> <div className="my-auto"><CheckCircleIcon className="h-5 w-5 text-blue-500"/></div></div>
      <div className="flex flex-row justify-between"><p>Zobacz Faktury</p><div><ChevronRightIcon className="h-5 w-5 text-blue-500"/></div></div>
    </div>
  )
}

export default CardHomePage