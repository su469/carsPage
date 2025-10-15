import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import CarList from './components/CarList/CarList';
import CarDetails from "./components/CarDetails/CarDetails";
import BookingForm from "./components/BookingForm/BookingForm";
import  BookingConfirmations  from "./components/BookingConfirmations/BookingConfirmations"
function App() {
  return (
    <div className="mainPage">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/car/:id"  element={<CarDetails/>} />
          <Route path="/carForm/:id" element={<BookingForm/>}/>
          <Route path="/carData" element={<BookingConfirmations/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
