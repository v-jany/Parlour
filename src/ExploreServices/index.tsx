// import React from "react";
import styles from "./index.module.scss";

const services = [
  {
    title: "Bridal Makeup",
    desc: "Flawless HD & airbrush makeup for your big day.",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    title: "Hair Styling",
    desc: "Trendy cuts, styling & smoothening treatments.",
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
  },
  {
    title: "Facial & Skincare",
    desc: "Glow-boosting facials for radiant skin.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
  },
  {
    title: "Hair Spa",
    desc: "Deep nourishment & relaxation for healthy hair.",
    img: "https://images.unsplash.com/photo-1595475884562-073c30d45670",
  },
  {
    title: "Manicure & Pedicure",
    desc: "Pamper your hands & feet with luxury care.",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  },
  {
    title: "Waxing & Cleanup",
    desc: "Smooth & clean skin with expert care.",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
];

const ExploreServices: React.FC = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <h1>Explore Our Services✨</h1>
        <p>Luxury treatments designed just for you</p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <img src={service.img} alt={service.title} />

            <div className={styles.overlay}>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ExploreServices;