import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/header/Header";
import LandingPage from "./LandingPage";
import { Empresa, Premium, Noticias, Contacto } from "./Pages";
import Filter from "./Filter";
import Details from "./details/Details";
import RedesFooter from "../components/footer/RedesFooter";
import Footer from "../components/footer/Footer";

export default function Rutas() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          
          <Route exact path="/" element={<LandingPage />} />

          <Route path="/moda/:Genero/:Categoria" element={<Filter />} />
          <Route path="/p/:Path/:Color" element={<Details />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/empresas" element={<Empresa />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element="" />
        </Routes>
        <RedesFooter/>
        <Footer />
      </Router>
    </div>
  );
}
