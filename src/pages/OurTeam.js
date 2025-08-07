import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Dama",
      role: "Main Adc",
      image: `${process.env.PUBLIC_URL}/nn.png`
    },
    {
      name: "LIO",
      role: "Main Top",
      image: `${process.env.PUBLIC_URL}/nn.png`
    },
    {
      name: "LuLu",
      role: "Main Support",
      image: `${process.env.PUBLIC_URL}/nn.png`
    },
    {
      name: "Nal",
      role: "Main Jungle",
      image: `${process.env.PUBLIC_URL}/nn.png`
    },
    {
      name: "MR AHMED",
      role: "Main MID",
      image: `${process.env.PUBLIC_URL}/nn.png`
    },
    {
      name: "Jinx",
      role: "NOT HERE",
      image: `${process.env.PUBLIC_URL}/nn.png`
    }
  ];

  return (
    <div className="our-team-page">
      <div className="team-container">
        <h1 className="team-title">OUR TEAM</h1>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
