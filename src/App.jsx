import { useState } from 'react'
import { CardsContainer } from './components/CardsContainer'
import './style.css'

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 p-5 h-screen">
        <h1 className="text-3xl font-bold text-white">My Favourite Songs</h1>
        <CardsContainer />
      </div>
    </>
  )
}

export default App
