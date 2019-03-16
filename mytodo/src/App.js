import React, { Component } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name='Renato' idade='18'/>
      </div>
    );
  }
}

export default App;
