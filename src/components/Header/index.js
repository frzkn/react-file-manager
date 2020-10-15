import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import ReactLogo from "../../assets/svg/react";
import { getToken } from "../../services/api";

import { useSelector } from "react-redux";

const Header = () => {
  const { hasToken } = useSelector((s) => s.auth);
  return (
    <header className="header-wrapper">
      <div className="header">
        <Link to="/" className="header__logo">
          <ReactLogo className="header__logo" />
          <h1>File Manager</h1>
        </Link>
        <div className="header__links">
          {(getToken() || hasToken) && (
            <Link to="/login" style={{ display: "flex", alignItems: "center" }}>
              <svg
                height={"1.52rem"}
                width={"1.52rem"}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ paddingRight: "10px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <p>Logout</p>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
