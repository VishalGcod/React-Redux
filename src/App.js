import logo from './logo.svg';
import React from 'react'
import './App.css';
import FetchRedux from './fetchingData';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <FetchRedux/>
    </div>
    </Provider>
  );
}

export default App;
