import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../styles/search.css";
import Booked from "./Booked"; // Import the Booked component

const Search = () => {
  const navigate = useNavigate();

  // States to store form inputs
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  // State to store bus results
  const [busResults, setBusResults] = useState([]);

  // State to track search status (whether there are buses or not)
  const [noBuses, setNoBuses] = useState(false);

  // State for booking popup
  const [showBookedPopup, setShowBookedPopup] = useState(false);

  // Function to handle form submission and search buses
  const handleSearch = () => {
    if (!from || !to) {
      alert("Please fill all the fields.");
      return;
    }

    // Find buses that match the search criteria (ignoring the date)
    const results = busData.filter(
      (bus) =>
        bus.from.toLowerCase() === from.toLowerCase() &&
        bus.to.toLowerCase() === to.toLowerCase()
    );

    if (results.length > 0) {
      setBusResults(results);
      setNoBuses(false);
    } else {
      setNoBuses(true);
      setBusResults([]);
    }

    // Clear the form fields except the date
    setFrom("");
    setTo("");
  };

  // Function to handle booking a ticket
  const handleBooking = (busIndex) => {
    const updatedResults = [...busResults];
    const bus = updatedResults[busIndex];

    if (bus.seatsAvailable > 0) {
      bus.seatsAvailable -= 1; // Decrease seats available
      setBusResults(updatedResults);
      setShowBookedPopup(true); // Show popup for ticket booking

      // Navigate to home after 2 seconds
      setTimeout(() => {
        setShowBookedPopup(false);
        navigate("/"); // Navigate to home page
      }, 2000);
    }
  };

  return (
    <div className="container">
      <div className="search-container">
        {/* Input Fields */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter source"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter destination"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        {/* Date Input */}
        <div className="input-box">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <button onClick={handleSearch} className="search-btn">
          Search Buses
        </button>
      </div>

      {/* Display Bus Results */}
      <div className="bus-results">
        {noBuses ? (
          <p className="bus-item">No buses available for this route.</p>
        ) : (
          <ul>
            {busResults.map((bus, index) => (
              <li key={index} className="bus-item">
                <div className="bus-container">
                <img
                  src={bus.image}
                  alt={`Bus ${bus.busNumber}`}
                  className="bus-image"
                />
                <h3>Bus Number: {bus.busNumber}</h3>
                </div>
                
                <div>
                <p>
                  From: {bus.from} - To: {bus.to}
                </p>
                <p>Price: {bus.price}</p>
                <p>Type:{bus.type}</p>
                <p>Seats Available: {bus.seatsAvailable}</p>
                </div>
                <button
                  className="book-btn"
                  disabled={bus.seatsAvailable === 0}
                  onClick={() => handleBooking(index)}
                >
                  {bus.seatsAvailable > 0 ? "Book Now" : "Sold Out"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Booking Confirmation Popup */}
      {showBookedPopup && (
        <Booked
          message="Your ticket has been successfully booked!"
          onClose={() => setShowBookedPopup(false)}
        />
      )}
    </div>
  );
};

export default Search;

// Dummy data for buses
const busData = [
  {
    busNumber: "MP 19 TX 4700",
    from: "Bhopal",
    to: "Satna",
    image: './image/b1.jpg',
    price: "Rs-1200",
    type: "AC-SEATER/SLEEPER",
    seatsAvailable:6

  },{
    busNumber: "MP 04 BQ 4500",
    from: "Bhopal",
    to: "Indore",
    image: './image/b2.jpg',
    price: "Rs1400",
    type: "NON-AC",
    seatsAvailable:6
  },

{
    busNumber: "MP 05 AT 4600",
    from: "Bhopal",
    to: "Pune",
    image: './image/b3.jpg',
    price: "Rs-2000",
    type: "AC-SEATER/SLEEPER",
    seatsAvailable:6
  },{
    busNumber: "MP 07 CV 3456  ",
    from: "Bhopal",
    to: "Agra",
    image: './image/b4.jpg',
    price: "Rs1500",
    type: "NON-AC",
    seatsAvailable:6
  },
{
    busNumber: "MP 12 DC 7869",
    from: "Bhopal",
    to: "Delhi",
    image: './image/b5.jpg',
    price: "Rs-800",
    type: "AC-SEATER/SLEEPER",
    seatsAvailable:6
  },{
    busNumber: "MP 15 HT 4980",
    from: "Bhopal",
    to: "Mumbai",
    image: './image/b6.jpg',
    price: "Rs-2100",
    type: "NON-AC",
    seatsAvailable:6
  },
{
    busNumber: "MP 23 GT 5430",
    from: "Bhopal",
    to: "Bangalore",
    image: './image/b7.jpg',
    price: "Rs-1300",
    type: "AC-SEATER/SLEEPER",
    seatsAvailable:6

  },{
    busNumber: "MP 02 SB 4856",
    from: "Bhopal",
    to: "Manali",
    image: './image/b8.jpg',
    price: "Rs2500",
    type: "NON-AC",
    seatsAvailable:6
  },
{
    busNumber: "MP 07 ZX 4712",
    from: "Bhopal",
    to: "Jaipur",
    image: './image/b9.jpg',
    price: "Rs-1400",
    type: "AC-SEATER/SLEEPER",
    seatsAvailable:6

  },{
    busNumber: "MP 01 GT 7389",
    from: "Bhopal",
    to: "Varanasi",
    image: './image/b10.jpg',
    price: "Rs-2700",
    type:"NON-AC",
    seatsAvailable:6
},

];
