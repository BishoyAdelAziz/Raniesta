import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Booking from "./Pages/Booking/Booking";
import { useContext } from "react";
import Loginpopup from "./Components/Formpopup/Login/Loginpopup";
import { AppContext } from "./Context/AppContext";
function App() {
  const { ShowLogin, setShowLogin } = useContext(AppContext);
  return (
    <>
      <BrowserRouter>
        {ShowLogin ? <Loginpopup setShowLogin={setShowLogin} /> : <></>}
        <div className="App">
          <Header setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
