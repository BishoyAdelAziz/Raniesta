import "./Home.css";
import { Gym_Photos } from "../../assets/Assets";
import { useEffect } from "react";
import { useState } from "react";
const Home = () => {
  const ChangePhoto = () => {};
  return (
    <div className="Home">
      <div className="Welcome-Message">
        <h3>
          Welcome To <span>Raniesta Resort</span>
        </h3>
      </div>
      <section className="Section-1">
        <h4>Services</h4>
        <div className="Services-Container">
          <div className="service">
            <div className="Service-Content">
              <h5>GYM</h5>
              <p>
                Our certified trainers lead a variety of sessions for all
                levels, from HIIT to yoga. Train on your own schedule with the
                latest equipment and stunning views. Elevate your stay with
                fitness at <span className="Resort-name">Raniesta Resort</span>.
              </p>
            </div>
            <div className="Service-Photos">
              <img src={Gym_Photos[0].Photo} alt="Gym Photos" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
