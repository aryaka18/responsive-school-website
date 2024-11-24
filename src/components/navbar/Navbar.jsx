import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo2 from "../../assets/JSchool.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    }; // scrollY by 500px

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // this function will be executed only once when the component is loaded (()=>{},[])

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo2} alt="" className="logo" />
      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>{" "}
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Gallery
          </Link>{" "}
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>{" "}
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={0} duration={500}>
              Contact
            </Link>{" "}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
