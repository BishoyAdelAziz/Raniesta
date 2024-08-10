import { useState } from "react";
import "./Loginpopup.css";
import { TfiClose } from "react-icons/tfi";
const Loginpopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Signup");
  return (
    <div className="Login-popup">
      <form className="login-popup-container">
        <div className="Login-popup-title">
          <h2>{currState}</h2>
          <TfiClose onClick={() => setShowLogin((prev) => !prev)} />
          <input type="text" placeholder="Your E-mail" required />
          <input type="password" placeholder="Password" required />
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Loginpopup;
