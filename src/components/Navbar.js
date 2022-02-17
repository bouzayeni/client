import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../components/components.css";
import { logout } from "../slices/userSlice";
const Navbar = () => {
  const { isAuth, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <header>
      
      <div className="nav">
      <div>
        <img className="logo" src="https://www.pngmart.com/files/21/Gym-Equipment-PNG-Image.png"/>
      </div>
    
      <Link to="/" className="Mylink">
        Home
      </Link>
      {isAuth && role === "admin" ? (
        <>
          <Link to="/Dashboard" className="Mylink">
            Dashboard
          </Link>
          <Link to="/Profile" className="Mylink">
            Profile
          </Link>
        </>
      ) : isAuth && role === "user" ? (
        <Link to="/Profile" className="Mylink">
          Profile
        </Link>
      ) : (
        <>
          <Link to="/login" className="Mylink">
            Login
          </Link>
          <Link to="/Register" className="Mylink">
            Register
          </Link>
          
          
          <Link to="/Planning" className="Mylink">
            
           Planning
          </Link>
          <Link to="/Cours" className="Mylink">
            
           Cours
          </Link>
        </>
      )}
      {isAuth && <button onClick={() => dispatch(logout())}>logOut</button>}
   
    </div>

    </header>
  );
};

export default Navbar;