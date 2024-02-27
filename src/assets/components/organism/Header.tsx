import React from "react"

function Header() {
  return (
    <header className=" header d-flex flex-row align-items-center">
      <i className="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img src="src\assets\images\logo.jpg" alt="" />
        <h1>Cook Formation CDA</h1>
      </div>
      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-basket-shopping mr-5"></i>
          <span>panier</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
}

export default Header;