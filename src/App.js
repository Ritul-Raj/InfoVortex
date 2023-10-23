
import React from 'react'
import NewsApp from './NewsApp'
import { Route, Routes } from 'react-router-dom'


import Science from './Science'
import Entertainment from './Entertainment'
import Business from './Business'
import Health from './Health'
import Technology from './Technology'
import Sports from './Sports'

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<NewsApp/>}   />
     
      <Route path="/science" element={<Science/>}   />
      <Route path="/sports" element={<Sports/>}   />
      <Route path="/entertainment" element={<Entertainment/>}   />
      <Route path="/technology" element={<Technology/>}   />
      <Route path="/bussiness" element={<Business/>}   />
      <Route path="/health" element={<Health/>}   />

    </Routes>
    
    </div>
  )
}

export default App