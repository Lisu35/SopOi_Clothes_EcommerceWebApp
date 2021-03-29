import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheets/Header.css";

import brandIcon from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/cart.svg";
import searchIcon from "../../assets/images/search.svg"

const Header = ({ triggerRegForm, triggerLogForm }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid row navCoin">
        <div class="d-none col-lg-4 d-lg-flex flex-row justify-content-center w-25">
          <div className="searchCon">
            <input type="text" />
            <img src={searchIcon}/>
          </div>
        </div>
        <div class="d-none col-sm-6 col-lg-4 d-sm-flex flex-row justify-content-center">
          <a className="mb-2" href="#">
            <img src={brandIcon} alt="" />
          </a>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 d-flex flex-row justify-content-center">
          <button
            className="regBtn"
            data-bs-toggle="modal"
            data-bs-target="#formModal"
            type="button"
            onClick={() => triggerRegForm((prev) => !prev)}>
            Register
          </button>
          <button
            onClick={() => triggerLogForm((prev) => !prev)}
            className="mx-3 logBtn">
            Log In
          </button>
          <button className=" cartBtn">
            <img src={cartIcon} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
