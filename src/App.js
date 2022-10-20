import React from 'react'
import Header from './Components/Header'
import CardDetails from './Components/CardDetails'
import Cards from './Components/Cards'
import {Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>} />
        <Route path='/cart/:id' element={<CardDetails/>} />
      </Routes>
    </>
  )
}

export default App
