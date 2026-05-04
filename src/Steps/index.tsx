import React from "react";
import styles from "./index.module.scss";

interface StepType {
  id: string;
  title: string;
  desc: string;
}

const Steps: React.FC = () => {
const steps: StepType[] = [
  {
    id: "01",
    title: "Skin Consultation",
    desc: "We begin with a detailed skin consultation to understand your skin type, tone, and any sensitivities or allergies. This step helps us carefully select products that not only suit your skin but also enhance its natural glow while ensuring complete safety and comfort throughout the process.",
  },
  {
    id: "02",
    title: "Base & Prep",
    desc: "Your skin is deeply hydrated and prepped using premium skincare products to create a smooth and radiant canvas. We apply professional primers and correctors to even out texture and tone, ensuring that your makeup stays flawless, fresh, and long-lasting for hours.",
  },
  {
    id: "03",
    title: "Flawless Finish",
    desc: "This is where the magic happens. With expert blending techniques, we create a seamless base, define your features, and enhance your natural beauty. Every detail—from eyes to contour—is crafted to achieve a balanced, elegant, and camera-ready look.",
  },
  {
    id: "04",
    title: "Finishing Touch",
    desc: "We complete the look with precision detailing, final touch-ups, and a high-quality setting spray to lock everything in place. This ensures your makeup remains smudge-proof, sweat-resistant, and picture-perfect throughout your special day or event.",
  },
];
  return (
    <section className={styles.journey}>
      <div className={styles.container}>
        
        <p className={styles.subtitle}>THE EXPERIENCE</p>

        <h2 className={styles.title}>
          Your Journey to <span>Flawless</span>
        </h2>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div className={styles.step} key={step.id}>
              
              
              <div className={styles.leftLine}>
                <div className={styles.circle}>{step.id}</div>

                {/* Hide line for last item */}
                {index !== steps.length - 1 && (
                  <div className={styles.line}></div>
                )}
              </div>

             
              <div className={styles.card}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;