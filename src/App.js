import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router';
import SeedColors from './SeedColors';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './singleColorPalette';
import NewPaletteForm from './NewPaletteform';
import Page from './Page';
import './styles/Page.css';




class App extends Component {
  constructor(props) {
    super(props);
    const savedPalette = JSON.parse(window.localStorage.getItem("Palettes"));
    this.state={Palettes: savedPalette || SeedColors};
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
      return this.state.Palettes.find( function(palette) {
      return palette.id === id;
    });
  }

  deletePalette(id) {
    this.setState(
      oldState => ({Palettes: oldState.Palettes.filter(palette => palette.id !== id)}),
      this.syncLocalStorage
    );
  }

  async savePalette(newPalette) {
    await this.setState({Palettes: [...this.state.Palettes, newPalette]});
    this.syncLocalStorage();
  }

  syncLocalStorage() {
    //save Palettes to local storage
    window.localStorage.setItem("Palettes", JSON.stringify(this.state.Palettes));
  }


  render() {
    return (
      <Route render={ ({location}) => 
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Switch location={location}>
          <Route 
            exact 
            path="/palette/new" 
            render={ (routeProps) =>(
            <Page>
              <NewPaletteForm 
                Palettes={this.state.Palettes} 
                savePalette={this.savePalette} 
                {...routeProps}
              />
            </Page>
              )} 
              />
          <Route 
            exact 
            path="/" 
            render={ (routeProps) => (
            <Page>
              <PaletteList 
                Palettes={this.state.Palettes} 
                deletePalette={this.deletePalette} 
                {...routeProps} 
              />
            </Page>
              )}
              />
          <Route 
          exact 
          path="/palette/:id" 
          render={
            (routeProps) =>(
          <Page>
            < Palette 
              Palette={generatePalette(this.findPalette(routeProps.match.params.id))}
            /> 
          </Page>
          )} 
          />
          <Route 
            exact 
            path="/palette/:paletteId/:colorId" 
            render={ (routeProps) => (
            <Page>
              < SingleColorPalette
                colorId={routeProps.match.params.colorId}
                Palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
              />
            </Page>
            )} 
          />
          <Route
            render={ (routeProps) => (
            <Page>
              <PaletteList 
                Palettes={this.state.Palettes} 
                deletePalette={this.deletePalette} 
                {...routeProps} 
              />
            </Page>
              )}
              />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
      }/>
        
      
    
    )
  }
};

export default App;