import React, { useEffect, useRef } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import CartModal from "../modals/CartModal";
import useModal from "../../hooks/useModal";

export const Dropdow = (props) => {
  const links = props.links;
  const title = props.title;

  return (
    <div className="dropdown">
      <div className="dropbtn">{title}</div>
      <div className="dropdown-content">
        {links.map((link, l) => (
          <Link key={l} to={link.to}>
            {link.display}
          </Link>
        ))}
      </div>
    </div>
  );
};

const mujer = [
  {
    display: "Polos basicos",
    to: "moda/mujer/polos-basicos/",
  },
  {
    display: "Polos estampados",
    to: "moda/mujer/polos-estampados/",
  },
  {
    display: "Casacas",
    to: "moda/mujer/casacas/",
  },
  {
    display: "Polos rip",
    to: "moda/mujer/polos-rip/",
  },
  {
    display: "Blusas",
    to: "moda/mujer/blusas/",
  },
  {
    display: "Capas",
    to: "moda/mujer/capas/",
  },
];
const hombre = [
  {
    display: "Polos basicos",
    to: "moda/hombre/polos-basicos",
  },
  {
    display: "Polos estampados",
    to: "moda/hombre/polos-estampados",
  },
  {
    display: "Casacas",
    to: "moda/hombre/casacas",
  },
];
const redes = [
  {
    display: "Facebook",
    to: "",
  },
  {
    display: "Instagram",
    to: "",
  },
  {
    display: "Twitter",
    to: "",
  },
  {
    display: "Linkedin",
    to: "",
  },
  {
    display: "Youtube",
    to: "",
  },
  {
    display: "Tiktok",
    to: "",
  },
];

const headerNav = [
  {
    display: "Inicio",
    path: "/",
  },
  {
    display: <Dropdow links={mujer} title="mujer" />,
    path: "#",
  },
  {
    display: <Dropdow links={hombre} title="hombre" />,
    path: "#",
  },
  {
    display: "Noticias",
    path: "/noticias",
  },
  {
    display: "Empresas",
    path: "/empresas",
  },
  {
    display: "Premiun",
    path: "/premium",
  },
  {
    display: <Dropdow links={redes} title="redes sociales" />,
    path: "#",
  },
  {
    display: "Contacto",
    path: "/contacto",
  },
];

export default function Header() {
  let { pathname } = useLocation();
  const headerRef = useRef(null);
  const refToggle = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  useEffect(() => {
    const element = refToggle.current;

    const navMenu = document.querySelector(".header__links");
    element.addEventListener("click", () => {
      navMenu.classList.toggle("header__links-visible");
    });
  }, []);

  const [isOpenModal, openModal, closeModal] = useModal();

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="header__nav">
          <div className="logo">
            <Link to="/"> DRAGO</Link>
          </div>
          <div className="header__nav__items">
            <input
              className="seacrh"
              type="text"
              placeholder="¿Qué estas buscando?"
            />

            <button className="openModalBtn" onClick={openModal}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <CartModal isOpen={isOpenModal} closeModal={closeModal} />

            <Link to="">
              <div className="login">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </Link>
          </div>
        </div>

        <div ref={refToggle} className="nav__toggle">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className="header__links">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
