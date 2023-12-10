import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RentCar = () => {
  const [selectedCar, setSelectedCar] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [driverName, setDriverName] = useState('');
  const [driverAge, setDriverAge] = useState('');
  const [cost, setCost] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedCar || !pickupDate || !returnDate || !driverName || !driverAge) {
      alert('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/v1/FortnoxCarRental', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: driverName,
          age: parseInt(driverAge),
          carModel: selectedCar,
          pickUpdate: pickupDate,
          returnDate: returnDate,
        }),
      });

      if (response.ok) {
        console.log('Car rental submitted successfully');
        navigate('/success');
      } else {
        console.error('Failed to submit car rental');
      }
    } catch (error) {
      console.error('Error during car rental submission:', error);
    }
  };

  return (
    <div className="container mt-3">
      <h3>Rent a Car</h3>
      <form onSubmit={handleSubmit} className="was-validated">
        <div className="mb-3">
          <label htmlFor="carSelect" className="form-label">Select a Car:</label>
          <select id="carSelect" className="form-select" onChange={(e) => setSelectedCar(e.target.value)} required>
            <option value="" >Select a car</option>
            <option value="Volvo S60">Volvo S60</option>
            <option value="Volkswagen Golf">Volkswagen Golf</option>
            <option value="Ford Mustang">Ford Mustang</option>
            <option value="Ford Transit">Ford Transit</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="pickupDate" className="form-label">Pickup Date:</label>
          <input type="date" id="pickupDate" className="form-control" onChange={(e) => setPickupDate(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">Return Date:</label>
          <input type="date" id="returnDate" className="form-control" onChange={(e) => setReturnDate(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="driverName" className="form-label">Driver Name:</label>
          <input type="text" id="driverName" className="form-control" onChange={(e) => setDriverName(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="driverAge" className="form-label">Driver Age:</label>
          <input type="number" id="driverAge" className="form-control" onChange={(e) => setDriverAge(e.target.value)} required min="18"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {cost !== null && (
        <div className="mt-3">
          <h5>Cost Summary</h5>
          <p>Total Cost: {cost} SEK</p>
        </div>
      )}
    </div>
  );
};

export default RentCar;
