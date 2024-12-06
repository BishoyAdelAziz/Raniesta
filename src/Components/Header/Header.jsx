import { NavLink } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { useContext, useRef } from "react";
import "./Header.css";
import { AppContext } from "../../Context/AppContext";
const Header = () => {
  const { setShowLogin } = useContext(AppContext);
  const navRef = useRef(null);
  const ShowNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <header>
      <h1>Raniesta Resort</h1>
      <nav ref={navRef}>
        <NavLink
          className={({ isActive }) => (isActive ? "activ e" : "")}
          onClick={ShowNavBar}
          to="/"
        >
          Home
        </NavLink>
        <hr />
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={ShowNavBar}
          to="/about"
        >
          About
        </NavLink>
        <hr />
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={ShowNavBar}
          to="/booking"
        >
          Book Now
        </NavLink>
        <hr />
        <button
          onClick={() => {
            setShowLogin((prev) => !prev);
            ShowNavBar();
          }}
          className="Log-in"
        >
          Log-in
        </button>
        <div className="Nav-Btn Close-Btn">
          <TfiClose onClick={ShowNavBar} />
        </div>
      </nav>
      <div className="Nav-Btn" onClick={ShowNavBar}>
        <FiAlignRight />
      </div>
    </header>
  );
};

export default Header;
