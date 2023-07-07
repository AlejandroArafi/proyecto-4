import './App.css'
import { Footer } from './Componentes/Footer/Footer'
import { NavBar } from './Componentes/NavBar/NavBar'
import { MainRoutes } from './Routes/MainRoutes'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




function App() {
  //prop
  const nameRestaurant = 'Di Santi'
  

  return (
    <>
    <NavBar nombre={nameRestaurant} />
      <MainRoutes/>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
