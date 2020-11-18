import React, { useEffect, useState } from "react";
import "../Styles/global.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Repositorios from "../Components/Repositorio/Repositorios";
import Home from "../Components/Home/Home";

export default function Landing() {
  return (
    <section className="landing">
      <Navbar />
      <Home />
      <Repositorios />
      <Footer />
    </section>
  );
}
