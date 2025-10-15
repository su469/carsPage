import React, { useDebugValue, useState } from "react";
import styles from "../Login/Login.module.css";
import LoginDetails from "../../data/Logindata.json";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const mockDetails = LoginDetails;
  const navigate = useNavigate();
  const handleSubmit = () => {        
    if (email === mockDetails[0].email && password === mockDetails[0].password) {
      navigate("/cars");
      setError("");
    } else {
      setError("Invalid Email && Password" );
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Welcome !!</h2>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input
              placeholder="Enter email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <input
              placeholder="Enter password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
         <div className={styles.buttons}>
          <button onClick={handleSubmit}>Login</button>
          {error && <p className={styles.errorMessage}>{error}</p>}
         </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
