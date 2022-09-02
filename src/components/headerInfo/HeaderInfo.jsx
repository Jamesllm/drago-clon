import "./headerInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function HeaderInfo() {
  return (
    <div className="header__info">
      <div>
        ENVÍO GRATIS A PARTIR DE S/ 199.90 · 7 DÍAS PARA CAMBIO O REEMPLAZO
      </div>
      <div className="shop">
        COMPRAS POR WHATSAPP (+51) 980 547 955
        <div className="icon">
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
    </div>
  );
}
