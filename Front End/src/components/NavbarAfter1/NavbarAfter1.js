import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavLogo from "../icon.png";
import "./NavbarAfter1.css";

const Navbar1 = () => {
  let navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={NavLogo} alt="fdf" />
        TalkHarmony
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a
              className="nav-manu"
              onClick={() => {
                navigate("/Home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="nav-manu"
              onClick={() => {
                navigate("/Dashboard");
              }}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              className="nav-manu"
              onClick={() => {
                navigate("/profile");
              }}
            >
              Profile
            </a>
          </li>
          {/* <li>
            <a
              className="nav-manu"
              onClick={() => {
                navigate("/setting");
              }}
            >
              Setting
            </a>
          </li> */}
          <li>
            <a
              className="nav-manu"
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="nav-manu"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
