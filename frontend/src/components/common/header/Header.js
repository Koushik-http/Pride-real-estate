import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { nav } from "../../data/Data"; // Ensure this path is correct for your project structure

const Header = () => {
  const [navList, setNavList] = useState(false);
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo')); // Fetch user info from local storage

  const handleLogout = () => {
    localStorage.removeItem('userInfo'); // Remove user info from local storage
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <Link to="/">
            <img src="https://i.ibb.co/ZTKM8px/newlogo.png" alt="logo" />
          </Link>
        </div>
        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
            <li>
              <Link to="/location">Location</Link>
            </li>
          </ul>
        </div>
        <div className="button flex">
          {userInfo ? (
            <>
              <Link to="/profile" className="btn1">Profile</Link>
              <button className="btn1" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i> Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn1" onClick={() => navigate('/login')}>
                <i className="fa fa-sign-in"></i> Log In
              </button>
              <button className="btn1" onClick={() => navigate('/signup')}>
                <i className="fa fa-user-plus"></i> Sign Up
              </button>
            </>
          )}
        </div>

        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
