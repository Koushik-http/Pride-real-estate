import React from 'react';
import './Profile.css';

const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo')); // Fetch user info

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="path/to/profile-pic.jpg" alt="Profile" /> {/* Replace with actual profile pic */}
        <h2>{userInfo?.username || 'User Name'}</h2>
      </div>
      <div className="profile-info">
        <p>Email: {userInfo?.email || 'example@example.com'}</p>
        <p>Other Info: {userInfo?.otherInfo || 'N/A'}</p>
      </div>
      <div className="profile-buttons">
        <button>Edit Profile</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
