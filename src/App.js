import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import WeaponCard from './components/WeaponCard';
import UnitCard from './components/UnitCard';
import { Title } from './components/styled/styledNav';

function App() {
  return (
    <div className="App">
      <Title>Wunga Bunga</Title>
      <Nav />
      <Router>
        <div style={{'background-color': 'lightgrey', 'height': '5000px', 'padding-top': '.5rem'}}>
          <UnitCard unit={bob}/>
          <UnitCard unit={jim}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
