import "./Booking.css";
import { Rooms } from "../../assets/Assets";
import Room from "../../Components/Room/Room";
const Booking = () => {
  return (
    <div className="Booking">
      <div className="Booking-Entry">
        <h1>The key to happiness is in your hands</h1>
        <p>
          A group of different rooms that meet your desires to ensure an
          enjoyable time at our resort
        </p>
      </div>
      <div className="Booking-Section">
        <div className="Rooms">
          {Rooms.map((item, index) => {
            return <Room item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Booking;
