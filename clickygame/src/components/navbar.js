import React from "react";

function Navbar() {
  return (
    <nav className="navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Clicky Game
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}

export default Navbar;
