import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#portfolio" className="active">
          portfolio
        </a>
        <a href="#about">about me</a>
        <a href="#blog">my blog</a>
        <a href="#reviews">reviews</a>
        <a href="#contact">contact me</a>
      </nav>

      <div className="actions">
        <img src="/assets/search.png" alt="search" />
        <img src="/assets/basket.png" alt="basket" />
        <img src="/assets/person.png" alt="person" />
      </div>
    </header>
  );
}

export default Header;
