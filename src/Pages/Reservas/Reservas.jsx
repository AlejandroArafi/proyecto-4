import moment from "moment"
import { useState } from "react"
import './Reservas.css'
import { toast } from "react-toastify"
import { dataBase } from "../../Firebase/firebase"

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
  const enviarFormulario = async (event)=>{
    event.preventDefault()
    console.log(formState)
    await dataBase.collection('reservas').add(formState)
    toast.success('Reserva exitosa')

    //reinciar formulario
    setFormState(initialForm)
  }

  const handleInputChange = ({target})=>{
    const {name, value} = target
    setFormState({
      ...formState,
      [name]: value
    })



  

  }


  return (
    <>
    <h1 className="titulo">Reservas</h1>
    <div className="reservas h-100">
    <form className='tarjeta' onSubmit={enviarFormulario} >
      <input onChange={handleInputChange} type="text" name="nombre" placeholder='ingrese su nombre' value={formState.nombre}/>
      <input onChange={handleInputChange} type="text" name="rut" placeholder='ingrese su rut'value={formState.rut}/>
      <input onChange={handleInputChange} type="number" name="comensales" min={2} max={10} placeholder="Cantidad de personas" value={formState.comensales}/>
      <input onChange={handleInputChange} type="datetime-local" name="fecha" min={moment().format('YYYY-MM-DD hh:mm')} max={moment().add( 3, 'months').format('YYYY-MM-DD hh:mm')} value={formState.fecha}/>
      <input onChange={handleInputChange} type="tel" name="telefono" placeholder="+56 9 1234567" value={formState.telefono}/>
      <input onChange={handleInputChange} type="email" name="correo" placeholder="reservas@disanti.cl" value={formState.correo} />
      <button type="submit">enviar</button>
    </form>
    </div>
    </>
  )
}


