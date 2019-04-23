import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import HouseConstructor from './containers/HouseConstructor/HouseConstructor';
import MainMenu from './UI/MainMenu/MainMenu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <Route path='/' component={HouseConstructor}/>
      </BrowserRouter>
    );
  }
}

export default App;
