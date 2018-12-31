import React, { Component } from 'react';
import './App.css';
import Main from '../../components/main/Main';

class App extends Component {
  render() {
    return (
       <div className="App">
        <header className="App-header">
          <h1 className='App-title'>Séries</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
