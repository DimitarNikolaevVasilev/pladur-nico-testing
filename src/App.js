import React from 'react';
import './App.css';

import Landing from './Components/Landing';
import AboutUs from "./Components/about_us/AboutUs";

function App() {
  return (
        <React.Fragment>
            <Landing />
            <AboutUs />
        </React.Fragment>
  );
}

export default App;
