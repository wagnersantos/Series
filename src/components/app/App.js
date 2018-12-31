import React, { Component } from 'react';
import './App.css';
import Intro from '../../components/intro/Intro';
import Series from '../../components/series/Series';

class App extends Component {
  render() {
    return (
       <div className="App">
        <header className="App-header">
          <h1 className='App-title'>Séries</h1>
        </header>
        <Series />
      </div>
    );
  }
}

export default App;
