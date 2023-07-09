import React from 'react'
import './Menu.css'

export const Menu = () => {

  
  return (
    <>
  <h1 className='titulo-container'>carta</h1>
    
  <div className="container-1">

<div class="row">
  <div class="col">
    <h1>entradas</h1>
    <ul>
    <li>Calamares a la romana</li>
      <p> Calamares apanados y fritos</p>

      <li>Carpaccio Filete</li>
      <p>Carpaccio de filete de res</p>

      <li>Carpaccio Salmón</li>
      <p>Carpaccio de Salmón</p>

      <li>Gambas fritas y salsa Livornesa</li>
      <p></p>

      <li>Gamberi pil-pil</li>
      <p>Camarones al pil-pil</p>

      <li>Belvedere</li>
      <p>Mariscos en hojas de espinaca, salsa aioli</p>

      <li>Caprese di sempre</li>
      <p>Mozzarella de búfala en salsa de tomate tibia albahaca, rúcula y bruschettas</p>
      </ul>
  </div>


{/* pastas */}
  <div class="col">
    <h1>pastas</h1>
    <li>SPAGHETTI POMODORO</li>
  <p>Con tomate italiano natural y albahaca.</p>

  <li>SPAGHETTI NAPOLITANA</li>
  <p>CON SALSA DE TOMATES ARTESANAL LE DUE TORRI</p>

  <li>SPAGHETTI AL PESTO</li>
  <p>SPAGHETTI CON PESTO NATURAL ARTESANAL</p>

  <li>SPAGHETTI PUTTANESCA</li>
  <p>TOMATE ITALIANO, ANCHOAS, ALCAPARRAS, ACEITUNAS, UN LEVE TOQUE DE CACHO DE CABRA</p>
  </div>
</div>
</div>


    </>
  )
}