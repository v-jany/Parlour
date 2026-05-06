import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

type ScrollState = {
  scrollTo?: string;
};

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Skin Care", id: "skincare" },
  { label: "Hair Care", id: "haircare" },
  { label: "Contact Us", id: "contact" },
] as const;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return false;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}#${id}`,
    );

    return true;
  };

  const scrollToSectionWhenReady = (id: string) => {
    let attempts = 0;
    const maxAttempts = 24;

    const tryScroll = () => {
      const didScroll = scrollToSection(id);
      if (didScroll || attempts >= maxAttempts) {
        return;
      }

      attempts += 1;
      window.requestAnimationFrame(tryScroll);
    };

    window.setTimeout(() => {
      window.requestAnimationFrame(tryScroll);
    }, 0);
  };

  const goToSection = (id: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      const nextState: ScrollState = { scrollTo: id };
      navigate("/", { state: nextState });
      return;
    }

    scrollToSectionWhenReady(id);
  };

  const goToPage = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const state = location.state as ScrollState | null;
    const sectionId = state?.scrollTo ?? location.hash.replace("#", "");

    if (!sectionId) {
      return;
    }

    scrollToSectionWhenReady(sectionId);
  }, [location.hash, location.pathname, location.state]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2>Glow Beauty</h2>
      </div>

      <ul className={`${styles.menu} ${open ? styles.active : ""}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => goToSection(item.id)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setOpen((previousOpen) => !previousOpen)}
        aria-label="Toggle navigation menu"
      >
        {open ? "X" : "Menu"}
      </button>

      <div className={styles.actions}>
        <button type="button" onClick={() => goToPage("/Booknow")}>
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
