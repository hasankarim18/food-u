import MainComponent from './components/MainComponent';
import './App.css';
import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom'

function App() {
  //  basename='https://hasankarim18.github.io/food-u/'
  return (
    // <BrowserRouter basename='https://hasankarim18.github.io/'  >
    //   <MainComponent />
    // </BrowserRouter>

    <HashRouter>
      <MainComponent />
    </HashRouter>

  );
}

export default App;
