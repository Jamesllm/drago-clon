import "./footer.scss";
import { Link } from "react-router-dom";
import { Container } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <Container className="footerDrago">
        <div>
          <span>COLECCIONES</span>
          <hr />
          <Link to="/moda/mujer/polos-basicos">Mujer</Link>
          <br />
          <br />
          <Link to="/moda/hombre/polos-basicos">Hombre</Link>
          <br />
          <br />
          <Link to="">Youtube</Link>
          <br />
          <br />
          <Link to="">Tiktok</Link>
          <br />
          <br />
          <Link to="/contacto">Contacto</Link>
        </div>
        <div>
          <span>MI CUENTA</span>
          <hr />
          <Link to="">Login</Link>
          <br />
          <br />
          <Link to="">Crear tu cuenta</Link>
          <br />
          <br />
          <Link to="">Iniciar sesión</Link>
          <br />
          <br />
          <Link to="">¿Olvidaste tu contraseña?</Link>
          <br />
          <br />
        </div>
        <div>
          <span>TE AYUDAMOS</span>
          <hr />
          <Link to="">Términos y condiciones</Link>
          <br />
          <br />
          <Link to="">Política de privacidad</Link>
          <br />
          <br />
          <Link to="">Cambios y devoluciones</Link>
          <br />
          <br />
          <Link to="">Preguntas frecuentes</Link>
          <br />
          <br />
        </div>
        <div>
          <span>CONTACTO</span>
          <hr />
          <div className="flex">
            <div className="card-f">
              <p>
                <FontAwesomeIcon icon={faCalendar} /> Horario de Atención:
              </p>
              <div className="flex mt-1">
                <div>Lunes a Viernes:</div>
                <div>09:00 AM - 07:00 PM</div>
              </div>
              <div className="flex mb-1">
                <div>Sábado:</div>
                <div>09:00 AM - 01:00 PM</div>
              </div>
              <div className="mb-1">
                <p>
                  <FontAwesomeIcon icon={faPhone} /> (+51) 980 547 955
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> (+51) 925 011 474
                </p>
              </div>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> contacto@drago.pe
              </p>
              <p className="mt-1">
                <FontAwesomeIcon icon={faLocationDot} /> (Golden Plaza
                Giribaldi) Jirón Luis Giribaldi N° 738 / Local 313-315, La
                Victoria, Lima
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="targets">
          <div>
            <img src="https://drago.pe/_nuxt/img/b_visa.6ddeea9.png" alt="" />
          </div>
          <div>
            <img
              src="https://drago.pe/_nuxt/img/b_master_card.a719103.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://drago.pe/_nuxt/img/b_american-express.68b4da4.png"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="center">Copyright 2021 DRAGO S.A.C Todos los derechos reservados.</div>
      </Container>
    </footer>
  );
};

export default Footer;
