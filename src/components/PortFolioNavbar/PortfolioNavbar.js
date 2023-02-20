import React, { useState } from "react";
import "./PortfolioNavbar.scss";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export const PortfolioNavbar = () => {
  const [open, setOpen] = useState(false);

  const showMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="portfolio-nav-container">
        <div>
          <h1 className="portfolio-nav-title">Jevelin</h1>
        </div>
        <div onClick={showMenu}>
          {open ? (
            <RxCross1 className="portfolio-nav-icon" />
          ) : (
            <RxHamburgerMenu className="portfolio-nav-icon" />
          )}
        </div>
      </nav>
      {open ? (
        <div className="nav-menu-container">
          <p className="nav-menu-content nav-active-menu-content">Home</p>
          <p className="nav-menu-content">Projets</p>
          <p className="nav-menu-content">News</p>
          <p className="nav-menu-content nav-menu-last-content">Contact</p>
        </div>
      ) : null}
    </>
  );
};
