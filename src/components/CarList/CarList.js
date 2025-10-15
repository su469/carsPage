import React from "react";
import  styles from "../CarList/CarList.module.css";
import CarListdata from "../../data/CarListdata.json";
import { useNavigate } from "react-router-dom";

const CarList = () => {
   const navigate = useNavigate();
  return (
      <div className={`container ${styles.listPage}`}>
        <div className={`row ${styles.listRow}`}>
          {CarListdata.map((item,id) => (
            <div className="col-md-4 mb-4 mt-4" key={item.id}>
              <div class={`card ${styles.listCard}`}>
                <img src={item.image} className={styles.cardImage} />
                <div class="card-body">
                  <h5   className={styles.cardName}>{item.name}</h5>
                  <button className={ item.available? styles.viewButton:styles.unavailButton} onClick={()=>navigate(`/car/${item.id}`)}>
                    {item.available? "Available" : "Unavailable"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default CarList;
