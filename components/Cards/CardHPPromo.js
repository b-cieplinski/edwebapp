import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/outline'

const CardPromo = () => {
  return (
<div>
<div className=""><img src="/img/promo.jpg" className='rounded-t-lg w-full'></img></div>
<div className="flex flex-row p-8">
<div className="basis-11/12">
  <button className="bg-yellow-300 text-sm px-4 rounded-full mb-5">POZNAJ</button>
  <h1 className="text-xl mb-3">Zyskaj nowy abonement EuroDorex za darmo</h1>

  <p>Wyjątkowa promocja tylko dla stałych klientów ED</p>
</div>
<div className="basis-1/12 items-center flex mx-auto">
  <ChevronRightIcon className="h-5 text-center"/>
</div>
</div>
</div>
  )
}

export default CardPromo