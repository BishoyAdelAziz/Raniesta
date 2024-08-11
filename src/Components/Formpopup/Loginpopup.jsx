import { useContext } from "react";
import "./Loginpopup.css";
import { TfiClose } from "react-icons/tfi";
import { AppContext } from "../../Context/AppContext";
const Loginpopup = () => {
  const { setShowLogin } = useContext(AppContext);
  return (
    <div className="Login-popup">
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
        <input type="email" name="E-mail" placeholder="Your E-mail" required />
        <label htmlFor="Password">Your Password :</label>
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign-in</button>
        <p>
          you dont have account ? <span>SignUp</span>
        </p>
      </form>
    </div>
  );
};

export default Loginpopup;
