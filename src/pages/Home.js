import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <main className="main-content">
        <div className="hero-section">
          <h1 className="main-title">REVO esports</h1>
          <p className="hero-subtitle">Born to Win, Trained to Dominate</p>
          <Link to="/about" className="learn-more-btn">Learn More</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
