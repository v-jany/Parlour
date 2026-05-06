// import React from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Booking: React.FC = () => {

  const navigate=useNavigate();

  
  return (
    <div className={styles.container}>
      
  
      <div className={styles.left}>
        <p className={styles.tag}>BOOK YOUR EXPERIENCE</p>

        <h1 className={styles.title}>
          Your Beauty <br />
          <span>Starts Here ✨</span>
        </h1>

        <p className={styles.desc}>
          Reserve your appointment with our expert stylists.
          We create looks that make you feel confident, elegant,
          and unforgettable.
        </p>

        <div className={styles.info}>
          <div>
            <h4>📍 Location</h4>
            <p>Chennai, Tamil Nadu</p>
          </div>

          <div>
            <h4>📞 Call Us</h4>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <form className={styles.form}>
          
          <div className={styles.grid}>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number" />

            <select>
              <option>Select Service</option>
              <option>Bridal Makeup</option>
              <option>Party Makeup</option>
            </select>

            <input type="date" />
            <input type="text" placeholder="Event Location" />
          </div>

          <textarea placeholder="Tell us about your requirements..." />

          <button type="submit" onClick={()=>navigate("/Booknow")}>Book Appointment 💖</button>
        </form>
      </div>

    </div>
  );
};

export default Booking;
