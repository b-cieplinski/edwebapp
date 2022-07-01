import React from 'react'
import { CogIcon, BellIcon, UserCircleIcon } from '@heroicons/react/solid'

import Image from 'next/image'

const IndexHeader = () => {
  return (
    <header className="sticky flex flex-row container md:h-14 bg-gray mx-auto">
    <div className="flex-1 flex flex-row justify-start items-center">
    <div className="flex items-center h-1 cursor-pointer my-auto">
    {/* This image below is a img but convered into webp with dom lub fom next/image*/}
    <Image onClick ={() => { router.push('/')}} src="/img/logo-slim.svg" width={42} height={42}/>
</div>
    <div className="flex">Greetings</div>
    </div>
    <div className="flex-1 flex flex-row justify-end items-center">
    <div><CogIcon className="h-5 w-5 text-blue-500"/></div>
    <div><BellIcon className="h-5 w-5 text-blue-500"/></div>
    <div><UserCircleIcon className="h-5 w-5 text-blue-500"/></div>
    </div>

</header>
  )
}

export default IndexHeader