import React from "react";

const Header = (props) => {
  return (
    <>
      <nav className="navbar header-bg fixed-top">
        <div className="container-fluid">
          <a href="/" className="header-logo nav-link active">
            <p className="header-logo">
              <span>M</span>masakin
            </p>
          </a>
          <button
            className="navbar-toggler navbar-light bg-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end header-bg-text"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title header-text-top" id="offcanvasNavbarLabel">
                  Main Menu
                </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="navbar-nav justify-content-end flex-grow-1 pe-3 header-text">
                <a href="/" className="header-button header-text">
                  Home
                </a>
                <a href="/tips" className="header-button">
                  Tips
                </a>
                <a href="/recipe" className="header-button">
                  Recipe
                </a>
                <a href="/comment" className="header-button">
                  Comment
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
