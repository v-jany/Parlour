

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./index.module.scss";

// const Navbar: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const goTo = (path: string) => {
//     navigate(path);
//     setOpen(false); 
//   };

//   return (
//     <nav className={styles.navbar}>
      
//       <div className={styles.logo}>
//         <h2>Glow Beauty✨</h2>
//       </div>

//       <ul className={`${styles.menu} ${open ? styles.active : ""}`}>
//         <li><a onClick={() => goTo("/Beauty")}>Home</a></li>
//         <li><a onClick={() => goTo("/Glow")}>About Us</a></li>
//         <li><a onClick={() => goTo("/skincare")}>Skin Care</a></li>
//         <li><a onClick={() => goTo("/haircare")}>Hair Care</a></li>
//         <li><a onClick={() => goTo("/Booking")}>Contact Us</a></li>
//       </ul>

      
//       <div
//         className={styles.hamburger}
//         onClick={() => setOpen(!open)}
//       >
//         {open ? "✖" : "☰"}
//       </div>

      
//       <div className={styles.actions}>
//         <button onClick={() => navigate("/Booknow")}>
//           Book Now
//         </button>
//       </div>

//     </nav>
//   );
// };

// export default Navbar;







import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

type ScrollState = {
  scrollTo?: string;
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToSection = (id: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    scrollToSection(id);
  };

  const goToPage = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  useEffect(() => {
    const state = location.state as ScrollState | null;

    if (location.pathname === "/" && state?.scrollTo) {
      const timer = window.setTimeout(() => {
        scrollToSection(state.scrollTo!);
      }, 100);

      return () => window.clearTimeout(timer);
    }
  }, [location]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2>Glow Beauty✨</h2>
      </div>

      <ul className={`${styles.menu} ${open ? styles.active : ""}`}>
        <li>
          <button type="button" onClick={() => goToSection("home")}>
            Home
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goToSection("about")}>
            About Us
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goToSection("skincare")}>
            Skin Care
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goToSection("haircare")}>
            Hair Care
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goToSection("contact")}>
            Contact Us
          </button>
        </li>
      </ul>

      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>

      <div className={styles.actions}>
        <button onClick={() => goToPage("/Booknow")}>Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;