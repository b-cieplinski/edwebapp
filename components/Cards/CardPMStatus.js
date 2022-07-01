import { ThumbUpIcon } from '@heroicons/react/outline'
import React from 'react'

const CardPMStatus = () => {
  return (
    <div className="flex flex-row p-2">
        <div className="rounded-full bg-green-300 ">
            <ThumbUpIcon className="h-8 w-8 text-white m-2"/>
        </div>
        <div className="ml-4">
            <p className="font-bold">Jesteś na czysto!</p>
            <p>Tak trzymaj</p>
        </div>
    </div>
  )
}

export default CardPMStatus