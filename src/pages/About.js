import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">ABOUT REVO</h1>
        <div className="about-content">
          <div className="team-image-container">
            <img src={`${process.env.PUBLIC_URL}/team.png`} alt="REVO Team" className="team-image" />
          </div>
          <div className="about-text">
            <p>REVO is a professional esports organization dedicated to excellence in competitive gaming. Our team consists of skilled players who have proven themselves in various tournaments and competitions.</p>
            <p>Born to Win, Trained to Dominate - this is not just our motto, but our way of life. We strive for perfection in every match and continuously push the boundaries of what's possible in esports.</p>
          </div>
        </div>

        {/* Second Section - League of Legends */}
        <div className="about-content reverse">
          <div className="about-text">
            <p>Our League of Legends division represents the pinnacle of strategic gameplay and teamwork. With years of experience in the Rift, our players have mastered every aspect of the game.</p>
            <p>From precise last-hitting to game-changing team fights, we dominate every lane and secure victory through superior skill and coordination.</p>
          </div>
          <div className="team-image-container">
            <img src={`${process.env.PUBLIC_URL}/lol.png`} alt="League of Legends Team" className="team-image" />
          </div>
        </div>

        {/* Our Teams Section */}
        <div className="our-teams-section">
          <h2 className="section-title">Our Teams</h2>
          <div className="teams-grid">
            <div className="team-card">
              <div className="team-card-image">
                <img src={`${process.env.PUBLIC_URL}/mm.png`} alt="Wild Rift Team" className="team-logo" />
              </div>
              <h3 className="team-name">WILD RIFT</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
