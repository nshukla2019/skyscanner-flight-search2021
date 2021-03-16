import React from 'react';
import './App.css';
//import Autocom from './components/Autocomplete';
import Header from './components/Header';
import Footer from './components/Footer';
import FlightSearch from './components/FlightSearch';


function App() {
  
  return (

    <div className="App">
      <Header title="Nupur Shukla's Flight Search"></Header>
      <FlightSearch></FlightSearch>
      <Footer title="Data from SkyScanner API"></Footer>
    </div>
  );
}

export default App;