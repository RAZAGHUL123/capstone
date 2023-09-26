import React from 'react';

const Profile = ({ name, username, email, bio }) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Username: {username}</h6>
          <p className="card-text">Email: {email}</p>
          <p className="card-text">Bio: {bio}</p>
          {/* Add buttons for editing profile, viewing posts, etc. as needed */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
