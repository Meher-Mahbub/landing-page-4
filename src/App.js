import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="container">
          <Header />
          <Hero />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
