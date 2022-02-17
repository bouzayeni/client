import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";


import Planning from "./pages/Planning";
import Cours from "./pages/Cours";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
   
        
        <Route path="/Planning" element={<Planning />} />
        <Route path="/Cours" element={<Cours/>} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/Profile" element={<Profile />} />
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
