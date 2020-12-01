import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ListBeers from './components/ListBeers';
import Navbar from './components/Navbar'
import BeerDetails from './components/BeerDetails';
import AddBeer from './components/AddBeer';
import RandomBeer from './components/RandomBeer';
function App() {
  return (
    <div className="App">
    <Navbar />
      <Switch>
      {/* this order matters  */}
        <Route exact path='/beers' component={ListBeers} />
        <Route exact path='/beers/add' component={AddBeer} />
        <Route exact path='/beers/random' component={RandomBeer} />
        <Route path='/beers/:id' component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
