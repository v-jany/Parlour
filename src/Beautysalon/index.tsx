import styles from "./index.module.scss";

const Beautysalon= () => {
  return (
    <section className={styles.whyus}>
      <div className={styles.container}>

        
        <div className={styles.left}>
          <span className={styles.badge}>High-End Beauty Salon</span>

          <h1>
            Why Our Customers <br />
            <span>Love Us?</span>
          </h1>

          <p>
            We don't just give a makeover; we create an experience that makes you feel like a queen.
          </p>

          <div className={styles.stats}>
            <div>
              <h2>15k+</h2>
              <p>Happy Clients</p>
            </div>
            <div>
              <h2>50+</h2>
              <p>Awards Won</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <span>✨</span>
            <h3>Expert Stylists</h3>
            <p>10+ years of experience in bridal & glam.</p>
          </div>

          <div className={styles.card}>
            <span>🌿</span>
            <h3>Organic Products</h3>
            <p>We use only 100% skin-friendly premium brands.</p>
          </div>

          <div className={styles.card}>
            <span>💎</span>
            <h3>Luxury Ambience</h3>
            <p>Relax in our fully air-conditioned premium spa.</p>
          </div>

          <div className={styles.card}>
            <span>🎯</span>
            <h3>Personalized Care</h3>
            <p>Customized treatments just for your skin type.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Beautysalon;