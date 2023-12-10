import React, { useState, useEffect } from 'react';


const AllCarRentals = () => {
  const [carRentals, setCarRentals] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    fetchCarRentals();
  }, []);

  const fetchCarRentals = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/FortnoxCarRental/carrentals');
      const data = await response.json();
      setCarRentals(data);


      const revenueSum = data.reduce((sum, carRental) => sum + (carRental.revenue || 0), 0);
      setTotalRevenue(revenueSum);
    } catch (error) {
      console.error('Error fetching car rentals:', error);
    }
  }; 
  const tableHeaderStyle = {
    fontSize: '16px',
    fontFamily: 'Verdana, sans-serif',
    
  };

  const tableRowsStyle = {
    fontSize: '12px',
    fontFamily: 'Verdana, sans-serif',
  };

  return (
    <div>
      <p></p>
      <h5 className="heading text-success">All Car Rental Orders</h5>
      <table className="tableStyle table table-warning mt-4">
        <thead>
          <tr>
            <th style={tableHeaderStyle} className="text-success">Order ID</th>
            <th style={tableHeaderStyle} className="text-success">Customer Name</th>
            <th style={tableHeaderStyle} className="text-success">Age</th>
            <th style={tableHeaderStyle} className="text-success">Car Model</th>
            <th style={tableHeaderStyle} className="text-success">PickUp Date</th>
            <th style={tableHeaderStyle} className="text-success">Return Date</th>
            <th style={tableHeaderStyle} className="text-success">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {carRentals.map(({ id, customerName, age, carModel, pickUpdate, returnDate, revenue }) => (
            <tr key={id}>
              <td style={tableRowsStyle} className="text-success">{id}</td>
              <td style={tableRowsStyle} className="text-success">{customerName}</td>
              <td style={tableRowsStyle} className="text-success">{age}</td>
              <td style={tableRowsStyle} className="text-success">{carModel}</td>
              <td style={tableRowsStyle} className="text-success">{pickUpdate}</td>
              <td style={tableRowsStyle} className="text-success">{returnDate}</td>
              <td style={tableRowsStyle} className="text-success">{revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h5 style={tableHeaderStyle} className="totalRevenue  text-success">Total Revenue: {totalRevenue}kr</h5>
    </div>
  );
};

export default AllCarRentals;