import React from 'react';
import './ProfileCardstyle.css'; 

const ProfileCard = ({ name, age, location, profileImage, theme }) => {
  return (
    <div>
    <div className={`profile-card ${theme}`}>
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <div className="profile-info">
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;