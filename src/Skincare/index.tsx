import React from "react";
import styles from "./index.module.scss";

const Skincare = () => {
  const data = [
    {
      icon: "✨",
      problem: "Concern: Dull & Tired Skin",
      title: "Instant Glow Facial",
      desc: "Revive dull, tired skin instantly with our refreshing fruit facial for a radiant glow.",
      price: "₹800 onwards",
    },
    {
      icon: "🍃",
      problem: "Concern: Sun Tan & Dark Spots",
      title: "De-Tan Therapy",
      desc: "Effectively removes tan and restores your skin’s natural tone for a brighter look.",
      price: "₹500 onwards",
    },
    {
      icon: "🌙",
      problem: "Concern: Dry & Rough Skin",
      title: "Deep Moisturizing",
      desc: "Intense hydration treatment that leaves your skin soft, smooth, and nourished.",
      price: "₹1200 onwards",
    },
  ];

  return (
    <section className={styles.skin}>
      <h2 className={styles.title}>
        Skin <span>Care Magic</span>
      </h2>

      <p className={styles.subtitle}>
        No matter your skin concern, our expert care will help restore your natural beauty and glow.
      </p>

      <div className={styles.grid}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            
            <div className={styles.icon}>{item.icon}</div>

            <span className={styles.problem}>{item.problem}</span>

            <h3>{item.title}</h3>

            <p className={styles.desc}>{item.desc}</p>

            <div className={styles.bottom}>
              <span className={styles.price}>{item.price}</span>
             
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Skincare;