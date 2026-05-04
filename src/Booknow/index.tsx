import React, { useState } from "react";
import styles from "./index.module.scss";


const Booknow = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    request: "",
  })
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
 alert("Button Clicked");
  
  console.log("Form Submitted");
  console.log(formData);

  try {
    const response = await fetch("http://localhost:5000/api/book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    alert("Booking Saved Successfully");
    console.log(data);

    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      request: "",
    });

  } catch (error) {
    console.log("Error:", error);
  }
};

  return (
    <div className={styles.container}>

      <div className={styles.card}>
        <h1>Book Your Appointment 💖</h1>
        <p>Glow starts here! Reserve your slot now.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text"
          name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option>Bridal Makeup</option>
            <option>Hair Styling</option>
            <option>Facial</option>
            <option>Hair Spa</option>
          </select>

          <input

            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <textarea
            name="request"
            placeholder="Any Special Request..."
            rows={3}
            value={formData.request}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Confirm Booking ✨</button>
        </form>
      </div>

    </div>
  );
};

export default Booknow;