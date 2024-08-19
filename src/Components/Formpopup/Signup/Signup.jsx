import { TfiClose } from "react-icons/tfi";
/* eslint-disable react/prop-types */

const Signup = ({ setShowSignup, ShowSignup, setShowLogin }) => {
  return (
    <div className="Signup">
      <form action="">
        <form className="Signup-popup-container">
          <div className="Signup-popup-title">
            <h2>Signup</h2>
          </div>
          <TfiClose
            className="close-btn"
            onClick={() => {
              setShowLogin(false);
            }}
          />
          <label htmlFor="userName">username: </label>
          <input
            type="text"
            name="userName"
            placeholder="Enter Your Full Name"
            required
          />
          <label htmlFor="email">Your E-mail :</label>
          <input type="email" placeholder="E-mail" required />
          <label htmlFor="password">Your Password :</label>
          <input type="password" name="password" placeholder="Your Password" />
          <label htmlFor="password">Confirm Password :</label>
          <input type="password" name="password" placeholder="Confirm" />
          <button type="submit">Sign-Up</button>
          <p>
            You Already Have An Account ?
            <span onClick={() => setShowSignup(!ShowSignup)}>Sign-in</span>
          </p>
        </form>
      </form>
    </div>
  );
};

export default Signup;
