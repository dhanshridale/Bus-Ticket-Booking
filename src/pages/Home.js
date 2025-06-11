
// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import Search from "../components/search";
import Card from "../components/card";
// Import your images
// import img from '../components/slides/s4.jpg'
import img1 from '../components/images/slides/s5.jpg';
import img2 from '../components/images/slides/s6.jpg';
import img3 from '../components/images/slides/s3.jpg';
import img4 from '../components/images/slides/s4.jpg';

const images = [img1, img2, img3, img4]; // Array of images

const Home = () => {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (<div>
    <div className="slideshow-container">
      <img src={images[currentIndex]} className="home-img" alt={`Slide ${currentIndex + 1}`} />
      <Search/>
    </div>
    <div><Card/></div>
    </div>

  );
};

export default Home;
