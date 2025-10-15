import React, { useState } from "react";
import styles from "./BookingForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import CarListdata from "../../data/CarListdata.json";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    loaction: "",
  });
  const [error, setError] = useState("");
  const { id } = useParams();
  const car = CarListdata.find((c) => c.id === parseInt(id));
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.loaction
    ) {
      setError("Please fill in all fields before confirming your booking.");
    } else {
      navigate("/carData", { state: { ...formData, car } });
    }
  };
  return (
    <div className={styles.section}>
      <div className={`formDetails ${styles.formDetails}`}>
        <div className={styles.formCard}>
          <h3>BookingForm</h3>
          <div class={styles.formData}>
            <label for="exampleFormControlInput1" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              class={`form-control ${styles.input}`}
              placeholder="Enter Your Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            ></input>
            <label for="exampleFormControlInput1" className={styles.label}>
              StartDate
            </label>
            <input
              type="date"
              class={`form-control ${styles.input}`}
              id="exampleFormControlInput1"
              placeholder="Enter Your Date"
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
            ></input>
            <label for="exampleFormControlInput1" className={styles.label}>
              EndDate
            </label>
            <input
              type="date"
              class={`form-control ${styles.input}`}
              id="exampleFormControlInput1"
              placeholder="Enter Your Date"
              onChange={(e) =>
                setFormData({ ...formData, endDate: e.target.value })
              }
            ></input>
            <label for="exampleFormControlInput1" className={styles.label}>
              Location
            </label>
            <input
              type="text"
              class={`form-control ${styles.input}`}
              id="exampleFormControlInput1"
              placeholder="Enter Your Location"
              onChange={(e) =>
                setFormData({ ...formData, loaction: e.target.value })
              }
            ></input>
            {error && <p className={styles.errormessage}>{error}</p>}
          </div>
          <button className={styles.button} onClick={handleSubmit}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
