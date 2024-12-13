import React from 'react';
import './Logout.css';

const Logout = () => {
    return (
        <div className="logout-container">
            <h1 className="logout-heading">You have been logged out</h1>
            <p className="logout-message">Thank you for visiting. See you again soon!</p>
            <img 
                src="https://via.placeholder.com/300" 
                alt="Goodbye" 
                className="logout-image" 
            />
            <a href="/" className="logout-button">Return to Home</a>
        </div>
    );
};

export default Logout;
