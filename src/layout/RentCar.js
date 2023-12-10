import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RentCar = () => {
  const [selectedCar, setSelectedCar] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverAge, setDriverAge] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [cost, setCost] = useState(0);
  const navigate = useNavigate();

  const handleCarSelection = (car) => {
    setSelectedCar(car);
    calculateCost(car, pickupDate, returnDate);
  };

  const calculateCost = (car, startDate, endDate) => {
    const carPrices = {
      "Volvo S60": 1500,
      "Volkswagen Golf": 1333,
      "Ford Mustang": 3000,
      "Ford Transit": 2400,
    };

    const selectedCarPrice = carPrices[car] || 0;
    const rentalDays = Math.ceil(
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
    );
    const totalCost = selectedCarPrice * rentalDays;

    setCost(totalCost);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !selectedCar ||
      !pickupDate ||
      !returnDate ||
      !driverName ||
      !driverAge
    ) {
      alert("All fields are required");
      return;
    }

    const startDate = new Date(pickupDate);
    const endDate = new Date(returnDate);

    if (startDate < new Date()) {
      alert("Pickup date can not be today or in the past.");
      return;
    }

    if (endDate <= startDate) {
      alert("Return date must be after pickup date.");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(driverName)) {
      alert("Driver name must be text.");
      return;
    }

    if (isNaN(driverAge) || parseInt(driverAge) < 18) {
      alert("Driver age must be 18 or older.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/FortnoxCarRental",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerName: driverName,
            age: parseInt(driverAge),
            carModel: selectedCar,
            pickUpdate: pickupDate,
            returnDate: returnDate,
          }),
        }
      );

      if (response.ok) {
        setSubmitMessage("Car rental submitted successfully");
        navigate("/success");
      } else {
        setSubmitMessage("Failed to submit car rental");
      }
    } catch (error) {
      setSubmitMessage("Error during car rental submission");
      console.error("Error during car rental submission:", error);
    }
  };

  return (
    <div className="container mt-3">
      <h3 className="container mt-3 text-center mx-auto">Rent a Car</h3>
      <form onSubmit={handleSubmit} className="was-validated">
        <div className="mb-3">
          <label htmlFor="carSelect" className="form-label">
            Select a Car:
          </label>
          <select
            id="carSelect"
            className="form-select"
            onChange={(e) => handleCarSelection(e.target.value)}
            required
          >
            <option value="">Select a car</option>
            <option value="Volvo S60">Volvo S60</option>
            <option value="Volkswagen Golf">Volkswagen Golf</option>
            <option value="Ford Mustang">Ford Mustang</option>
            <option value="Ford Transit">Ford Transit</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="pickupDate" className="form-label">
            Pickup Date:
          </label>
          <input
            type="date"
            id="pickupDate"
            className="form-control"
            onChange={(e) => {
              setPickupDate(e.target.value);
              calculateCost(selectedCar, e.target.value, returnDate);
            }}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">
            Return Date:
          </label>
          <input
            type="date"
            id="returnDate"
            className="form-control"
            onChange={(e) => {
              setReturnDate(e.target.value);
              calculateCost(selectedCar, pickupDate, e.target.value);
            }}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="driverName" className="form-label">
            Driver Name:
          </label>
          <input
            type="text"
            id="driverName"
            className="form-control"
            onChange={(e) => setDriverName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="driverAge" className="form-label">
            Driver Age:
          </label>
          <input
            type="number"
            id="driverAge"
            className="form-control"
            onChange={(e) => setDriverAge(e.target.value)}
            required
            min="18"
          />
        </div>

        <div className="container mt-3 text-center">
          <button type="submit" className="btn btn-outline-warning w-50">
            Submit
          </button>
        </div>

        {cost !== null && (
          <div className="container mt-3 text-center mx-auto">
            <h5>Cost Summary</h5>
            <p>Total Cost: {cost} SEK</p>
          </div>
        )}

        {submitMessage && (
          <div
            className={
              submitMessage.includes("successfully")
                ? "text-success"
                : "text-danger"
            }
          >
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default RentCar;
