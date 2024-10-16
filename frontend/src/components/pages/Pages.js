import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer"; // Import footer if applicable
import Home from "../home/Home"; // Assuming the correct path
import About from "../about/About"; 
import Services from "../services/Services";
import Blog from "../blog/Blog";
import BlogDetail from "../blog/BlogDetail"; 
import Location from "../home/location/Location"
import Login from "../common/header/Login";
import SignUp from "../common/header/Signup";
import Profile from '../common/header/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
