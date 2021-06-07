import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import SeedColors from './SeedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Palette Palette={generatePalette(SeedColors[4])}/>
      </div>
    )
  }
};

export default App;
