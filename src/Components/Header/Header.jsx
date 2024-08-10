import { Link } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { useRef } from "react";
import "./Header.css";
const Header = () => {
  const navRef = useRef(null);
  const ShowNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <header>
      <h1>Raniesta Resort</h1>
      <nav ref={navRef}>
        <Link to={"/"}>Home</Link>
        <hr />
        <Link to={"/about"}>About</Link>
        <hr />
        <Link to={"Booking"}>Book Now</Link>
        <hr />
        <button className="Log-in">Log-in</button>
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
