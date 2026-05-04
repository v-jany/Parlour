import styles from "./index.module.scss";

const slides = [
  {
    image: "./pics1.jpeg",
    title: "Glow Like Never Before",
  },
  {
    image: "./pics2.jpeg",
    title: "Bridal Perfection",
  },
  {
    image: "./pics3.jpeg",
    title: "Relax & Rejuvenate",
  },
];

const Hero = () => {
  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div key={index} className={styles.slide}>
          <img src={slide.image} alt="parlour" />

          <div className={styles.overlay}>
            <h2>{slide.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;