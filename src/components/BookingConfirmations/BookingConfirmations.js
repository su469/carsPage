import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./BookingConfirmation.module.css";

const BookingConfirmations = () => {
  const { state } = useLocation();

  return (
    <div className={`container ${styles.sectionDetails}`}>
      <div className={`card ${styles.cardDetails} `}>
        <h4>Booking Confirmed!!!</h4>
        <p className={styles.para}>
          <strong>Name:</strong> {state.name}
        </p>
        <p className={styles.para}>
          <strong>Car:</strong> {state.car.name}
        </p>
        <p className={styles.para}>
          <strong>startDate:</strong> {state.startDate}
        </p>
        <p className={styles.para}>
          <strong>endDate:</strong> {state.endDate}
        </p>
        <p className={styles.para}>
        <strong>Location:</strong> {state.loaction}</p>
        <p className={styles.para}>
          <strong>Price:</strong> ${state.car.price}
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmations;
