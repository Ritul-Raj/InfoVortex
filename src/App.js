



import React from 'react'
import NewsApp from './NewsApp'
import { Route, Routes } from 'react-router-dom'


import India from './india'
import Bollywood from './Bollywood'
import Business from './Business'
import Health from './Health'
import Politics from './Politics'
import Sports from './Sports'

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<NewsApp/>}   />
     
      <Route path="/india" element={<India/>}   />
      <Route path="/sports" element={<Sports/>}   />
      <Route path="/bollywood" element={<Bollywood/>}   />
      <Route path="/politics" element={<Politics/>}   />
      <Route path="/bussiness" element={<Business/>}   />
      <Route path="/health" element={<Health/>}   />

    </Routes>
    
    </div>
  )
}

export default App