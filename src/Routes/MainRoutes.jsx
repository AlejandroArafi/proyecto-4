import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Home, About, Menu, Reservas } from '../Pages'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/reservas' element={<Reservas/>} />
        <Route path='*' element={<Navigate to='/'/>} />


    </Routes>
  )
}
