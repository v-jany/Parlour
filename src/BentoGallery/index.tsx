import React, { useEffect } from 'react';
import styles from './index.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


const BentoGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className={styles.bentoWrapper}>

      <div className={styles.header} data-aos="fade-down">
        <h2 className={styles.title}>Why <span className={styles.gradient}>Choose Us?</span></h2>
        <p className={styles.subtitle}>Premium Care. Professional Touch. Perfect You.</p>
      </div>
      
      <div className={styles.bentoGrid}>
        <div className={`${styles.bentoItem} ${styles.large}`} data-aos="zoom-in">
          <img src="./picss5.png" alt="Spa" />
          <div className={styles.overlay}>
            <h3>The Zen Experience</h3>
            <p>Peaceful environment for your ultimate relaxation.</p>
          </div>
        </div>
        <div className={`${styles.bentoItem} ${styles.tall}`} data-aos="zoom-in" data-aos-delay="200">
          <img src="./picss3.png" alt="Skin Care" />
          <div className={styles.overlay}>
            <h3>Skincare Experts</h3>
            <p>Results you can see and feel.</p>
          </div>
        </div>
        <div className={`${styles.bentoItem} ${styles.small}`} data-aos="zoom-in" data-aos-delay="300">
          <div className={styles.textCard}>
            <span className={styles.stat}>10+</span>
            <p>Years Excellence</p>
          </div>
        </div>
        <div className={`${styles.bentoItem} ${styles.wide}`} data-aos="zoom-in" data-aos-delay="400">
          <img src="./picss7.png" alt="Makeup" />
          <div className={styles.overlay}>
            <h3>Bridal Glamour</h3>
          </div>
        </div>
        <div className={`${styles.bentoItem} ${styles.small} ${styles.gradientBg}`} data-aos="zoom-in" data-aos-delay="500">
           <div className={styles.textCardLight}>
             <h3>Book Now</h3>
             <p>Get 20% Off</p>
           </div>
        </div>
        </div>
    </section>
  );
};

export default BentoGallery;
