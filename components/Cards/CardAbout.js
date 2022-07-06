import { InformationCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';
import React from 'react'

const CardAbout = () => {
    const router = useRouter();
  return (
    <div className="NoCardSize flex pb-12 pt-4 space-x-2 cursor-pointer" onClick={() => router.push('/')}>
        <InformationCircleIcon className="h-5 w-5 pr-6 ml-4"/> <p>Warunki korzystania z serwisu EuroDorex</p>
    </div>
  )
}

export default CardAbout