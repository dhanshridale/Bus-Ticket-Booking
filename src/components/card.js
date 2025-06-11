import React from 'react';
import "../styles/card.css";
import img1 from '../components/images/slides/s1.jpg';
import img2 from '../components/images/slides/c7.jpg';
import img3 from '../components/images/slides/c1.jpg';
import img4 from '../components/images/slides/c2.jpg';
import img5 from '../components/images/slides/c3.jpg';
import img6 from '../components/images/slides/c4.jpg';
import img7 from '../components/images/slides/c5.jpg';
import img8 from '../components/images/slides/c8.jpg';

const Card = () => {
    return (
        <div>
            <div className="card-container">
            <div className="card-item">
                <img src={img1} alt="Himalaya" className="card-img" />
                <h1 className='text'>Himalaya</h1>
            </div>
            <div className="card-item">
                <img src={img2} alt="Kolkata" className="card-img" />
                <h1 className='text'>Kolkata</h1>
            </div>
            <div className="card-item">
                <img src={img3} alt="Place 3" className="card-img" />
                <h1 className='text'>Pune</h1>
            </div>
            <div className="card-item">
                <img src={img4} alt="Place 4" className="card-img" />
                <h1 className='text'>Thane</h1>
            </div>
        </div>
        <div className="card-container">
            <div className="card-item">
                <img src={img5} alt="New Delhi" className="card-img" />
                <h1 className='text'>New Delhi</h1>
            </div>
            <div className="card-item">
                <img src={img6} alt="Rajwada" className="card-img" />
                <h1 className='text'>Rajwada</h1>
            </div>
            <div className="card-item">
                <img src={img7} alt="Place 3" className="card-img" />
                <h1 className='text'>Bhopal</h1>
            </div>
            <div className="card-item">
                <img src={img8} alt="Mumbai" className="card-img" />
                <h1 className='text'>Banglore</h1>
            </div>
        </div>
        </div>
    );
};

export default Card;
