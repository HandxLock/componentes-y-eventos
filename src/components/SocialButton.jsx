/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SocialButton = (props) => {
  return (
    <>
      <FontAwesomeIcon className="svg" icon={props.facebook} size="2xl" />
      <FontAwesomeIcon className="svg" icon={props.github} size="2xl" />
      <FontAwesomeIcon className="svg" icon={props.linkedin} size="2xl" />
      <p>O usa tu nombre para registrarte</p>
    </>
  );
};
export default SocialButton;
