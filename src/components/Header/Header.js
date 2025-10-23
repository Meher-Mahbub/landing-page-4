import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/portfolio" className="active">
          portfolio
        </Link>
        <Link to="/about">about me</Link>
        <Link to="/blog">my blog</Link>
        <Link to="/reviews">reviews</Link>
        <Link to="/contact">contact me</Link>
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
