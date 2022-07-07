import MainComponent from './components/MainComponent';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>

  );
}

export default App;
