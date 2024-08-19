import { useContext } from "react";
import "./Loginpopup.css";
import { TfiClose } from "react-icons/tfi";
import { AppContext } from "../../../Context/AppContext";
import { useState } from "react";
import Signup from "../Signup/Signup";
const Loginpopup = () => {
  const { setShowLogin } = useContext(AppContext);
  const [ShowSignup, setShowSignup] = useState(false);
  return (
    <div className="Login-popup">
      {!ShowSignup ? (
        <form className="login-popup-container">
          <div className="Login-popup-title">
            <h2>Login</h2>
          </div>
          <TfiClose
            onClick={() => {
              setShowLogin((prev) => !prev);
            }}
            className="close-btn"
          />
          <label htmlFor="E-mail">Your E-mail: </label>
          <input
            type="email"
            name="E-mail"
            placeholder="Your E-mail"
            required
          />
          <label htmlFor="Password">Your Password :</label>
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign-in</button>
          <p>
            you dont have account ?{" "}
            <span onClick={() => setShowSignup(!ShowSignup)}>SignUp</span>
          </p>
        </form>
      ) : (
        <Signup
          setShowSignup={setShowSignup}
          ShowSignup={ShowSignup}
          setShowLogin={setShowLogin}
        />
      )}
    </div>
  );
};

export default Loginpopup;
