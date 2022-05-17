import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Footer from "./pages/Home/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import RequireAuth from "./pages/Login/RequireAuth";
import NavBar from "./pages/Shared/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
