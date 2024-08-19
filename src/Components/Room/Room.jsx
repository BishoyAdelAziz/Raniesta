/* eslint-disable react/prop-types */
import "./Room.css";
import { CiWifiOn } from "react-icons/ci";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import { LuUsers2 } from "react-icons/lu";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

const Room = ({ item }) => {
  const isObject = (obj) => Object.keys(obj).length > 0;
  const fullAccses = (obj) => Object.keys(obj).length >= 5;
  const [checkinDate, setCheckinDate] = useState(``);
  const [checkoutDate, setCheckoutDate] = useState(``);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (new Date(checkinDate) > new Date(checkoutDate)) {
      alert("Check-Out Date Must be Same or Later than Check-in Date");
    } else if (new Date(checkinDate) <= new Date()) {
      alert("Check-in Date Must be Same or Later than Today");
    }
  };
  return (
    <div className="Room">
      <div className="photos-section">
        <Carousel
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          interval={2500}
          autoPlay={true}
          emulateTouch={true}
        >
          {item.roomPhoto.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} alt={index + 1} />
                <p></p>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="content-section">
        <div className="room-name">
          <h3>{item.roomName}</h3>
        </div>
        <div className="room-services">
          <div className="room-view">
            <h5>Room View: </h5>
            <p>{item.roomView}</p>
          </div>
          <div className="room-capacity">
            <h5>Room Capacity: </h5>
            <LuUsers2 />
          </div>
          <h4>Room Services</h4>
          <div className="dining">
            <h6>Dining: </h6>
            {item.roomServices.dining.breakFast ? <p>Breakfast</p> : <></>}
            {item.roomServices.dining.dinner ? <p>Dinner</p> : <></>}
            {item.roomServices.dining.lunch ? <p>Lunch</p> : <></>}
          </div>
          {isObject(item.roomServices.roomAccess) ? (
            <div className="accesses">
              <h6>Accesses: </h6>
              {Object.entries(item.roomServices.roomAccess).map(
                ([key, value]) =>
                  value && (
                    <p key={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </p>
                  )
              )}
            </div>
          ) : fullAccses(item.roomServices.roomAccess) ? (
            <div className="accesses">
              <h6>Accesses:</h6>
              <p>Full access</p>
            </div>
          ) : (
            <></>
          )}
          <div className="elements">
            <h6>Elements: </h6>
            {item.roomServices.beverages ? <BiDrink /> : <></>}
            {item.roomServices.tv ? <PiTelevisionSimpleLight /> : <></>}
            {item.roomServices.wifi ? <CiWifiOn /> : <></>}
          </div>
        </div>
      </div>
      <div className="booking-section">
        <form onSubmit={handlesubmit} action="" id="Booking-Form">
          <div>
            <label htmlFor="Checkin">Check-in Date</label>
            <input
              type="date"
              required
              name="Checkin"
              id="Checkin"
              value={checkinDate}
              onChange={(e) => setCheckinDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Checkout">Check-Out Date</label>
            <input
              type="date"
              id="Checkout"
              value={checkoutDate}
              onChange={(e) => setCheckoutDate(e.target.value)}
              name="Checkout"
            />
          </div>
          <input type="submit" value={"Book Now"} />
        </form>
      </div>
    </div>
  );
};

export default Room;
