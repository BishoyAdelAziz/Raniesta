import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <Routes>
          <Route path={"/about"} />
          <Route path={"/booking"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
