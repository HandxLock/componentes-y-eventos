/* eslint-disable react/prop-types */
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alerta from "./Alert";
import {faFacebook,faGithub,faLinkedin,} from "@fortawesome/free-brands-svg-icons";

const Registro = ({mostrarAlerta,mensaje}) => {
  return (
    <>
      <h1>Crea Una Cuenta</h1>
      <SocialButton
        facebook={faFacebook}
        github={faGithub}
        linkedin={faLinkedin}
      />
      <Formulario mostrarAlerta={mostrarAlerta}/>
      <Alerta mensaje={mensaje.mensaje} color={mensaje.color}/>
    </>
  );
};

export default Registro;
