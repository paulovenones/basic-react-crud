import React from "react";

import { Link } from "react-router-dom";

import "./styles.css";

function PageHeader() {
  const currentPage = window.location.pathname;
  return (
    <header className="page-header">
      <Link
        to="/"
        className={`header-link ${currentPage === "/" ? "active" : ""}`}
      >
        Clientes
      </Link>

      <Link
        to="/add-client"
        className={`header-link ${
          currentPage === "/add-client" ? "active" : ""
        }`}
      >
        Adicionar cliente
      </Link>

      <div className="header-content"></div>
    </header>
  );
}

export default PageHeader;
