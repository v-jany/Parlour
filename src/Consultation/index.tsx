// import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Consultation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>

      
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Personal Beauty Consultation ✨</h1>
          <p>
            Discover the perfect style tailored just for you. 
            Our experts will guide you to your best look.
          </p>
          <button onClick={() => navigate("/booking")}>
            Book Your Session
          </button>
        </div>
      </section>

      <section className={styles.services}>
        <h2>What We Offer</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span>💇‍♀️</span>
            <h3>Hair Analysis</h3>
            <p>Personalized consultation for your hair type & style.</p>
          </div>

          <div className={styles.card}>
            <span>🎨</span>
            <h3>Color Suggestions</h3>
            <p>Perfect shades to match your skin tone.</p>
          </div>

          <div className={styles.card}>
            <span>💆‍♀️</span>
            <h3>Hair Treatments</h3>
            <p>Solutions for damage, dryness & frizz.</p>
          </div>

          <div className={styles.card}>
            <span>💄</span>
            <h3>Makeup Guidance</h3>
            <p>Flawless makeup tips for every occasion.</p>
          </div>
        </div>
      </section>
          </div>
  );
};

export default Consultation;