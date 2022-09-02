import Hero from "../components/hero/Hero";
import { Container, ItemGrid } from "../components/styles";
import CardNotice from "../components/card/CardNotice";
import CardCircle from "../components/card/CardCircle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const Noticias = () => {
  const noticias = [
    {
      title: "1° Aniversario Drago 2022",
      fecha: "2022-08-08",
      img: "https://home.drago.pe/attachment/web/news/01-aniversario/main.webp",
      info: "Estamos pronto a cumplir un #1Año 😁 y en #Drago queremos #Celebrarlo contigo, sorteando 02 casacas, ¡uno para cada #Ganador! #Participa hasta antes del miércoles 17 de agosto",
    },
    {
      title: "2° Casting febrero 2022",
      fecha: "2022-02-28",
      img: "https://home.drago.pe/attachment/web/news/casting-feb-2022/main.webp",
      info: "Casting !Participa para ser la imagen de DRAGO este 2022..Te Esperamos en el Centro Comercial GAMA Moda Plaza - Semisòtano 128. La Victoria",
    },
    {
      title: "1° Casting diciembre 2021",
      fecha: "2021-01-05",
      img: "https://home.drago.pe/attachment/web/news/casting-dic-2021/main.webp",
      info: "ESTA OPORTUNIDAD ES PARA TI !! 😱 Te invitamos a ser parte de nuestra sesión de fotografías y modelar nuestra marca de ropa DRAGO.",
    },
  ];
  return (
    <Container className="mt-8">
      <ItemGrid>
        {noticias.map((noticia, n) => (
          <CardNotice data={noticia} key={n} />
        ))}
      </ItemGrid>
    </Container>
  );
};

export const Empresa = () => {
  const carouselData = [
    {
      img: "https://home.drago.pe/attachment/web/enterprise/tenemos-el-mejor-equipo.webp",
    },
  ];
  const empresas = [
    {
      img: "https://home.drago.pe/attachment/web/enterprise/logos/induamerica.webp",
    },
    {
      img: "https://home.drago.pe/attachment/web/enterprise/logos/kids-future.webp",
    },
    {
      img: "https://home.drago.pe/attachment/web/enterprise/logos/villa-rica.webp",
    },
    {
      img: "https://home.drago.pe/attachment/web/enterprise/logos/gran-chalan.webp",
    },
  ];
  return (
    <>
      <Hero items={carouselData} />
      <Container className="mt-3">
        <h1 className="center">CONFIAN EN NOSOTROS</h1>
        <hr />
        <div className="grid">
          {empresas.map((empresa, e) => (
            <CardCircle key={e} data={empresa} />
          ))}
        </div>
      </Container>
    </>
  );
};

export const Premium = () => {
  const carouselData = [
    {
      img: "https://home.drago.pe/attachment/web/premium/servicio-premium.webp",
    },
  ];
  return (
    <>
      <Hero items={carouselData} />
      <Container>
        <h3>PROXIMAMENTE</h3>
      </Container>
    </>
  );
};

export const Contacto = () => {
  return (
    <Container className="mt-8">
      <h2>CONTACTO</h2>
      <div className="flex">
        <div className="card-f box">
          <h3>SEDE PRINCIPAL</h3>
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
            <FontAwesomeIcon icon={faLocationDot} /> (Golden Plaza Giribaldi)
            Jirón Luis Giribaldi N° 738 / Local 313-315, La Victoria, Lima
          </p>
        </div>

        <div className="lg box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4139109005536!2d-77.01698927078382!3d-12.06719768799526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c98c751df453%3A0xec64f5ad0403ccaa!2sGolden%20Plaza%20Giribaldi!5e0!3m2!1ses-419!2spe!4v1661915972315!5m2!1ses-419!2spe"
            width="100%"
            height="100%"
            title="google maps"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Container>
  );
};
