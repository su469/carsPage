import React from 'react';
import { useParams} from "react-router-dom";
import CarListdata from '../../data/CarListdata.json';
import styles from './CarDetails.module.css';
import { useNavigate } from "react-router-dom";
const CarDetails = () => {
    const { id } = useParams();
    const carData = CarListdata.find((car) => car.id === parseInt(id));
    const navigate = useNavigate();
  return (
    <div className={`container ${styles.DetailsPage}`}>
        <div className={`card ${styles.DetailsCard}`}>
            <img src={carData.image}  className={styles.carDetailsImage}/>
            <div className="card-body">
                <h3 className={styles.carname}>{carData.name}</h3>
                <p className={styles.carprice}>{carData.price}</p>
                <p className={styles.carType}>{carData.fuelType}</p>
                <p className={styles.carType}>{carData.transmission}</p>
                <p className={styles.carType}>{carData.seats}</p>
                <button className={styles.CarDetailsButton}  onClick={()=>navigate(`/carForm/${id}`)}>Book Now</button>
            </div>
            
        </div>
      
    </div>
  )
}

export default CarDetails
