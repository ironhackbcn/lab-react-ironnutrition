import React, { Component } from 'react';
import './App.css';
import'milligram';
import Form from './components/Form.js';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <Form />
      </div>
    );
  }
}

export default App;
