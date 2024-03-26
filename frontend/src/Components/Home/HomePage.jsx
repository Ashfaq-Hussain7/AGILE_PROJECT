import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (      
    <div className="home">
      <div className="headContainer">
        <h1> Stadium Stream</h1>
        <p> Welcome To The World Of FOOTBALL</p>
        <Link to="/Matches">
          <button>Watch Now</button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
