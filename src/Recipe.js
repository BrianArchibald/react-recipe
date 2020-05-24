import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => { // the props we are passing down from App.js
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredients.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;