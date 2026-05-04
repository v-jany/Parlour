import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Beauty = () => {

  const navigate= useNavigate();
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
       
        <div className={styles.left}>
          <h1>
            Welcome to <br />
            <span>Beauty Bliss</span>
          </h1>

          <p>
            Experience the ultimate transformation with our expert stylists.
            From bridal makeovers to relaxing spa treatments, we bring out the
            best in you.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primary}
             onClick={()=>navigate("/ExploreServices")}>Explore Services</button>
   
          </div>
        </div>

        
        <div className={styles.right}>
          <img
            src="./image1.jpeg"
            alt="Radiant Bridal Makeup"
          />
        </div>

      </div>
    </section>
  );
};

export default Beauty;