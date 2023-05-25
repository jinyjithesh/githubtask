import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

import "./home.css";
import { Searchlist } from "../searchlist/Searchlist";
import { Container } from "../../components/container/Container";
import { Navbar } from "../../components/navbar/Navbar";


export const Home = () => {
  return (
    <div>
      <Header />
      
      <Searchlist />


      <div className="homeContainer">
        <Footer />
      </div>
    </div>
  );
};
