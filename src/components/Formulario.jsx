/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function Formulario({mostrarAlerta}) {
  const [nombre,setNombre] = useState('');
  const [email,setEmail]=useState('');
  const [contraseña,setContraseña]=useState('');
  const [recontraseña,setRecontraseña]=useState('');
  const correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contraseñaMinimo = /^(.{8,})$/


  const validarInput = (e)=>{
    e.preventDefault();

    if(nombre==='' || email===''|| contraseña===''|| recontraseña===''){
      mostrarAlerta({
        mensaje:"Se Deben Llenar Todos Los Campos",
        color:'danger'
    })
      return;
    }else if(contraseña!==recontraseña){
      mostrarAlerta({
        mensaje:"contraseñas no coinciden",
        color:'danger'
      })
      return;
    }else if(!correo.test(email)){
      mostrarAlerta({
        mensaje:'correo no valido',
        color:'danger'
      })
      return;
    }else if(!contraseñaMinimo.test(contraseña)){
      mostrarAlerta({
        mensaje:'La contraseña debe contener mínimo 8 caracteres',
        color:'danger'
      })
      return;
    }
    else{
      mostrarAlerta({
        mensaje:'Registro Con Exito',
        color:'success'
      })
    }
    setNombre('')
    setEmail('')
    setContraseña('')
    setRecontraseña('')
    return;

  }
  return (
    <>
      <Form onSubmit={validarInput}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            value={nombre}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="tuemailejemplo.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={(e) => {
              setContraseña(e.target.value);
            }}
            value={contraseña}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Control
            type="password"
            placeholder="Confirma tu Contraseña"
            onChange={(e) => {
              setRecontraseña(e.target.value);
            }}
            value={recontraseña}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Registrate
        </Button>
      </Form>
    </>
  );
}

export default Formulario;