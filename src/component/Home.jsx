import React from 'react'
import Carousel from './Carousel'
import Cards from "./Cards"
import Clinic from "./Clinic"
import Count from './Count'
import "../App.css"


function Home() {
  return (
    <div>
        <Carousel/>
      <Cards/>
      <Clinic/>
      <Count/>

    </div>
  )
}

export default Home
