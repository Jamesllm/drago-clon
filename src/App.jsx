/* eslint-disable jsx-a11y/anchor-is-valid */
//react
import React from "react";
import "./App.scss";
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faReact, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

//Rutas
import Rutas from "./pages/Rutas";

library.add(fas, faReact, faFontAwesome);

export default function App() {
  return (
    <div>
      <Rutas />
    </div>
  );
}
