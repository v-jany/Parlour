
import React from "react";
import styles from "./index.module.scss";

const data = [
  {
    number: "01",
    title: "HD & Airbrush",
    desc: "Flawless, camera-ready finish that lasts 24+ hours.",
  },
  {
    number: "02",
    title: "Premium Brands",
    desc: "Using only MAC, Kryolan, and Huda Beauty products.",
    active: true,
  },
  {
    number: "03",
    title: "Personalized Style",
    desc: "Custom looks tailored to your skin tone and outfit.",
  },
];

const Whychoose = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.sub}>PROFESSIONAL EXCELLENCE</p>
      <h2 className={styles.title}>
        Why Brides <span>Trust Us</span>
      </h2>

      <div className={styles.cards}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${item.active ? styles.active : ""}`}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className={styles.number}>{item.number}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychoose;


