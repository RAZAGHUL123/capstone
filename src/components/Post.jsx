import React from 'react';

const Post = ({ title, content, author, date }) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Author: {author}</h6>
          <p className="card-text">{content}</p>
          <p className="card-text text-muted">Posted on {date}</p>
          {/* Add buttons for likes, comments, etc. as needed */}
        </div>
      </div>
    </div>
  );
}

export default Post;
