import React from 'react'
import CardHomePage from '../components/Cards/CardHPPayment'

const IndexLayout = () => {
  return (
    <main className="container mx-auto">
    <div className="flex justify-center">Strona Głowna</div>
<div className="w-3/5 bg-black-300 my-10 mx-auto p-5 rounded-lg"><CardHomePage/></div>
<div className="w-3/5 bg-gray-300 my-10 mx-auto">Chart</div>
<div className="w-3/5 bg-gray-300 my-10 mx-auto">card promo</div>
<div className="w-3/5 mx-auto">About this service</div>

</main>
  )
}

export default IndexLayout