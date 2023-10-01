/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Registro from "./components/Registro.jsx";
import { useState } from "react";
function App() {
  const [mensaje,setMensaje]= useState({
    mensaje:'',
    color:''
  });
  const mostrarMensaje= (alerta)=>{
    setMensaje(alerta)

  }


  return (
    <div>
      <Registro mostrarAlerta={mostrarMensaje} mensaje={mensaje}/>
    </div>
  );
}

export default App;
