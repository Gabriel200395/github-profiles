import React, { useEffect, useState } from "react";
import "../Styles/global.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Repositorios from "../Components/Repositorio/Repositorios";
import Home from "../Components/Home/Home";
import { useParams } from "react-router-dom";

export default function Profiles() {
  const { userName } = useParams();
  return (
    <section className="landing">
      <Navbar />
      <Home userName={userName} />
      <Repositorios userName={userName} />
      <Footer />
    </section>
  );
}
