import React from 'react';

const SimpleComponent = ({ title, text }) => {
    return (
        <div className="simple-container">
            <h2 className="simple-title">{title}</h2>
            <p className="simple-text">{text}</p>
        </div>
    );
};

export default SimpleComponent;