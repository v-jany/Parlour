import React from "react";
import styles from "./index.module.scss";

const Glow = () => {
  const points = [
    {
      icon: "✨",
      title: "Signature Traditional Contour",
      desc: "Enhancing natural features with a look that respects traditional aesthetics, perfect for local weddings.",
    },
    {
      icon: "🧴",
      title: "Humidity-Proof Foundation",
      desc: "Specialized primers and setting techniques that fight Tirunelveli heat and humidity for a 24-hour flawless look.",
    },
    {
      icon: "👰",
      title: "Personalized Bridal Trial",
      desc: "Customized makeup trials to match your outfit, lighting, and personal style perfectly.",
    },
  ];

  return (
    <section className={styles.glow}>
      <div className={styles.container}>
      
        <h2 className={styles.title}>
          The Tirunelveli Glow
        </h2>

        <p className={styles.subtitle}>
          Modern HD techniques meeting traditional grace. Discover why Tirunelveli brides trust us.
        </p>

      
        <div className={styles.content}>


          <div className={styles.left}>
            <img
              src="./beauty.jpeg"
              alt="Bride"
            />

            <div className={styles.badge}>
              ✨ HD Airbrush Finish
            </div>
          </div>

          <div className={styles.right}>
            {points.map((item, index) => (
              <div className={styles.item} key={index}>
                
                <div className={styles.icon}>{item.icon}</div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Glow;