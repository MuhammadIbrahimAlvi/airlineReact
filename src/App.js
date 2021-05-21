import './App.css';
import Navbar from './ClassComponents/Navbar/Navbar';
import Plane from './ClassComponents/Carousel/Slider';
import BookFlight from './ClassComponents/FlightBooking/BookFlight';
// import React,{useState,useEffect} from 'react';
function App() {
  return (
    <>
      <Navbar />
      <Plane/>
      <BookFlight/>
    </>
  );
}

export default App;
