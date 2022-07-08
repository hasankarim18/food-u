import MainComponent from './components/MainComponent';
import './App.css';
import React from 'react';
import { HashRouter } from 'react-router-dom'

import { fooduStore } from './redux/store';
import { Provider } from 'react-redux';


function App() {

  // console.log('foodustore: ', fooduStore.getState())

  //  basename='https://hasankarim18.github.io/food-u/'
  return (
    // <BrowserRouter basename='https://hasankarim18.github.io/'  >
    //   <MainComponent />
    // </BrowserRouter>



    <Provider store={fooduStore} >
      <HashRouter>
        <MainComponent />
      </HashRouter>
    </Provider>

  );
}

export default App;
