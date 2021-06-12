import React, { Component } from 'react';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router';
import './App.css';
import SeedColors from './SeedColors';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './singleColorPalette';
import NewPaletteForm from './NewPaletteform';

class App extends Component {


  findPalette(id) {
      return SeedColors.find( function(palette) {
      return palette.id === id;
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/palette/new" render={ () => <NewPaletteForm />} />
          <Route exact path="/" render={ (routeProps) => <PaletteList Palettes={SeedColors} {...routeProps} />}/>
          <Route 
          exact 
          path="/palette/:id" 
          render={
            (routeProps) => < Palette Palette={generatePalette(this.findPalette(routeProps.match.params.id))}/> 
          } 
          />
          <Route 
            exact 
            path="/palette/:paletteId/:colorId" 
            render={ (routeProps) => 
              < SingleColorPalette
                colorId={routeProps.match.params.colorId}
                Palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
              /> 
            } 
          />
        </Switch>
      </div>

      // <div className="App">
      //   < Palette Palette={generatePalette(SeedColors[5])}/>
      // </div>
    )
  }
};

export default App;





