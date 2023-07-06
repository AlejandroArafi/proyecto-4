import moment from "moment"
import { useState } from "react"
import './Reservas.css'

export const Reservas = () => {
  const initialForm = {
    nombre: "",
    rut:'',
    comensales:'',
    fecha: '',
    telefono:'',
    correo:''
  }
  const [formState, setFormState]= useState(initialForm)
  const enviarFormulario = (event)=>{
    event.preventDefault()
    console.log('formulario enviado')
  }


  return (
    <>
    <h1 className="titulo">Reservas</h1>
    <div className="reservas">
    <form className='tarjeta' onSubmit={enviarFormulario} >
      <input type="text" name="nombre" placeholder='ingrese su nombre'/>
      <input type="text" name="rut" placeholder='ingrese su rut'/>
      <input type="number" name="comensales" min={2} max={10} placeholder="Cantidad de personas"/>
      <input type="datetime-local" name="fecha" min={moment().format('YYYY-MM-DD hh:mm')} max={moment().add( 3, 'months').format('YYYY-MM-DD hh:mm')}/>
      <input type="tel" name="telefono" placeholder="+56 9 1234567" />
      <input type="email" name="correo" placeholder="reservas@disanti.cl" />
      <button type="submit">enviar</button>
    </form>
    </div>
    </>
  )
}


