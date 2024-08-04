import { Link } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

import "./Header.css";
import { useState } from "react";
const Header = () => {
  const [ShowSide, setShowSide] = useState(false);
  return (
    <div className="Header">
      <nav className="Header-Container">
        <div className={ShowSide ? "hide" : "Left-Side"}>
          <h1>Raniesta Resort</h1>
        </div>
        <div className="Center-Side">
          <Link>Home</Link>
          <Link>Book Now</Link>
          <Link>About-us</Link>
        </div>
        <div className="Right-Side">
          <button>Sign-In</button>
        </div>
        <div className="Menu-Btn">
          <FiAlignRight
            className={ShowSide ? "hide" : "Btn"}
            onClick={() => setShowSide(!ShowSide)}
          />
        </div>
      </nav>
      <div className={ShowSide ? "Column-Nav" : "hide"}>
        <div className="Close-BTn">
          <TfiClose onClick={() => setShowSide(!ShowSide)} />
        </div>
        <div className="Col-Container">
          <div className="Col-First">
            <h1>Raniesta Resort</h1>
          </div>
          <div className="Col-Second">
            <Link onClick={() => setShowSide(!ShowSide)}>Home</Link>
            <Link onClick={() => setShowSide(!ShowSide)}>Book Now</Link>
            <Link onClick={() => setShowSide(!ShowSide)}>About-us</Link>
          </div>
          <div className="Col-Third">
            <button>Sign-In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
