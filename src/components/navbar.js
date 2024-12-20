import { useLocation } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage";
import { Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [SignedInUser] = useLocalStorage("SignedInUser");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container" style={{ paddingTop: "10px" }}>
        <Image
          mr={{ base: "3px", md: "10px" }}
          mt="-15px"
          w="50px"
          h="auto"
          src={logo}
        />
        <a className="navbar-brand" href="/">
          <p style={{ textAlign: "center !importsnt" }}>
            Adebisi Akande <br />
            FOUNDATION
          </p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${location.pathname === "/" && "active"}`}>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/about" && "active"
              }`}
            >
              <a href="/about" className="nav-link">
                About Us
              </a>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/our-work" && "active"
              }`}
            >
              <a href="/our-work" className="nav-link">
                Our Work
              </a>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/events" && "active"
              }`}
            >
              <a href="/events" className="nav-link">
                Events
              </a>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/leaderships" && "active"
              }`}
            >
              <a href="/leaderships" className="nav-link">
                Leadership Programs
              </a>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/news" && "active"
              }`}
            >
              <a href="/news" className="nav-link">
                News
              </a>
            </li>
            {Boolean(SignedInUser) && (
              <li
                className={`nav-item ${
                  location.pathname === "/admin" && "active"
                }`}
              >
                <a href="/admin" className="nav-link">
                  Admin
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
