import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Booking from "./Pages/Booking/Booking";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <Routes>
          <Route path={"/about"} element={<About />} />
          <Route path={"/booking"} element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
