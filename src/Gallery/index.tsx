// import React from "react";
import styles from "./index.module.scss";

const images = [
  "./bg.png",
  "./nails.png",
  "./parlour.png",
  "./gal1.png",
  "./gal2.png",
  "./gal3.png",
  "./gal4.png",
  "./gal5.png",
];

const Gallery: React.FC = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <h1>Our Gallery</h1>
        <p>Real transformations. Real glow.</p>
      </div>

      <div className={styles.grid}>
        {images.map((img, index) => (
          <div className={styles.card} key={index}>
            <img src={img} alt="gallery" />

          
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gallery;