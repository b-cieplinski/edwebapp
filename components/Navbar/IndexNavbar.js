import React from 'react'
import { useRouter } from 'next/router'

const IndexNavbar = () => {
  const router = useRouter();
  return (
    <main className="flex flex-row justify-center space-x-10 py-12">
        <button className="hover:underline" onClick={() => router.push('/')}>Strona główna</button>
        <button className="hover:underline" onClick={() => router.push('/platnosci')}>Płatności</button>
        <button className="hover:underline" onClick={() => router.push('/prognozy')}>Prognozy</button>
        <button className="hover:underline" onClick={() => router.push('/uslugi')}>Moje usługi</button>
        <button className="hover:underline" onClick={() => router.push('/profil')}>Profil</button>
        <button className="hover:underline" onClick={() => router.push('/pomoc')}>Pomoc</button>
    </main>
  )
}

export default IndexNavbar