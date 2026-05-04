// import React from "react";
import styles from "./index.module.scss";

const Hairtheraphy = () => {
  const data = [
    {
      time: "120 MINS",
      tag: "For: Rough & Frizzy Hair",
      title: "Keratin Smooth Treatment",
      desc: "Get silky smooth and frizz-free hair with our keratin treatment.",
      icon: "💆‍♀️",
    },
    {
      time: "60 MINS",
      tag: "For: Hair Fall & Damage",
      title: "Deep Conditioning Spa",
      desc: "Strengthen your hair roots and repair damage effectively.",
      icon: "⚡",
    },
    {
      time: "45 MINS",
      tag: "For: Dandruff & Itchy Scalp",
      title: "Scalp Detox Therapy",
      desc: "Clean and refresh your scalp with deep detox treatment.",
      icon: "🧪",
    },
    {
      time: "30 MINS",
      tag: "For: Shine & Smooth",
      title: "Hair Gloss Treatment",
      desc: "Add shine and softness to your hair instantly.",
      icon: "✨",
    },
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.title}>
        Hair <span>Therapy</span>
      </h2>

      <p className={styles.subtitle}>
        Don't let a bad hair day ruin your mood. Shine with our care!
      </p>

      <div className={styles.grid}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{item.icon}</div>

            <span className={styles.time}>{item.time}</span>

            <p className={styles.tag}>{item.tag}</p>

            <h3>{item.title}</h3>

            <p className={styles.desc}>{item.desc}</p>

           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hairtheraphy;