// import React from "react";
import styles from "./index.module.scss";

const GridSection: React.FC = () => {
  return (
    <div className={styles.grid}>
      
      <div className={styles.boxText}>
        <h2>Nail Perfection</h2>
        <p>
         Get beautifully crafted nails that reflect your style and personality.
Our expert care ensures long-lasting shine and flawless finish.
        </p>
      </div>

      <div className={styles.boxImage}>
        <img src="./nails.png" alt="nails" />
      </div>

      
      <div className={styles.boxImage}>
        <img src="./bridal.png" alt="spa" />
      </div>


      <div className={styles.boxText}>
        <h2>Bridal Beauty</h2>
        <p>
          Step into your special day with flawless elegance and timeless charm.
Our expert bridal makeup enhances your natural glow for a picture-perfect look.
        </p>
      </div>
    </div>
  );
};

export default GridSection;