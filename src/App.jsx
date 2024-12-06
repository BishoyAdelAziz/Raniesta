import "./App.css";
import { lazy, Suspense } from "react";
import Header from "./Components/Header/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import Loginpopup from "./Components/Formpopup/Login/Loginpopup";
import { AppContext } from "./Context/AppContext";
function App() {
  const { ShowLogin, setShowLogin } = useContext(AppContext);
  const Home = lazy(() => import("./Pages/Home/Home"));
  const About = lazy(() => import("./Pages/About/About"));
  const Booking = lazy(() => import(`./Pages/Booking/Booking`));
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading..</div>}>
          {ShowLogin ? <Loginpopup setShowLogin={setShowLogin} /> : <></>}
          <div className="App">
            <Header setShowLogin={setShowLogin} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
