import React from 'react';
import './App.css';

const App = () => {

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;

const exampleRequest = 
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;



  return(
    <div className="App">
      <form>
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
