



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
    setOpen(false); 
  };

  return (
    <nav className={styles.navbar}>
      
      <div className={styles.logo}>
        <h2>Glow Beauty✨</h2>
      </div>

      <ul className={`${styles.menu} ${open ? styles.active : ""}`}>
        <li><a onClick={() => goTo("/Beauty")}>Home</a></li>
        <li><a onClick={() => goTo("/Glow")}>About Us</a></li>
        <li><a onClick={() => goTo("/skincare")}>Skin Care</a></li>
        <li><a onClick={() => goTo("/haircare")}>Hair Care</a></li>
        <li><a onClick={() => goTo("/Booking")}>Contact Us</a></li>
      </ul>

      
      <div
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </div>

      
      <div className={styles.actions}>
        <button onClick={() => navigate("/Booknow")}>
          Book Now
        </button>
      </div>

    </nav>
  );
};

export default Navbar;





