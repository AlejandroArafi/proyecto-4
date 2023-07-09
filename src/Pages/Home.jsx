import React from 'react'
import './Home.css'
import { Carrusel } from '../Componentes/Carrusel/Carrusel'


export const Home = () => {
  return (
    <>
    <h1 className='logo'>Di Santi</h1>
    <p>Ristorante Italiano</p>
    <Carrusel/>
    <div className='parrafo-container clearfix'>
    <p className="parrafo" >"Ristorante Italiano Di Santi es un restaurante familiar con una trayectoria de muchos años y descendencia italiana. Nos especializamos en auténtica cocina italiana, ofreciendo una amplia selección de pastas, carnes, pescados, postres y vinos. Nuestro restaurante destaca por su exquisita comida preparada con recetas transmitidas a lo largo de generaciones, así como por su ambiente encantador que te transportará a Italia. Nuestro dedicado equipo ofrece un servicio excepcional para brindarte una experiencia gastronómica memorable. ¡Ven y disfruta de una verdadera experiencia culinaria en Di Santi!"</p>
    </div>

    </>
  )
}
