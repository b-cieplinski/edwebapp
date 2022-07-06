import { ChevronRightIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router';
import React from 'react'

const CardHelpPayment = () => {
    const router = useRouter();
  return (
    <div className="DefaultCard">
        <h1 className="font-bold">Masz pytania?</h1>
        <button className="flex items-center text-yellow-900 hover:underline" onClick={() => router.push('/pomoc')}>Przejdz do sekcji Pomocy <ChevronRightIcon className="h-4 ml-2"/></button>
    </div>
  )
}

export default CardHelpPayment