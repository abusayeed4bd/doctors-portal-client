import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Footer from "./pages/Home/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NavBar from "./pages/Shared/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
