import './App.css'
import { Footer } from './Componentes/Footer/Footer'
import { NavBar } from './Componentes/NavBar/NavBar'
import { MainRoutes } from './Routes/MainRoutes'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"



function App() {
  
  return (
    <>
    <NavBar/>
      <MainRoutes/>
      <Footer/>
    </>
  )
}

export default App
