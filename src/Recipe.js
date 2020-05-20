import React from 'react';

const Recipe = ({ title, calories, image }) => { // the props we are passing down from App.js
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;