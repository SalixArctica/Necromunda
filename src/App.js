import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import WeaponCard from './components/WeaponCard';
import UnitCard from './components/UnitCard';
import { Title } from './components/styled/styledNav';


let bob = {
  name: "bob",
  rank: "champion",
  move: 1,
  weaponSkill: 2,
  ballisticSkill: 3,
  strength: 4,
  toughness: 5,
  wounds: 6,
  initiative: 7,
  attacks: 8,
  leadership: 9,
  cool: 8,
  willpower: 7,
  intelligence: 6,
  skills: [
    'mindprobe',
    'telekinesis'
  ],
  weapons: [
    {
      name: 'autopistol',
      SR: 4,
      LR: 12,
      SA: 1,
      LA: 0,
      Str: 3,
      AP: 0,
      D: 1,
      Ammo: 4,
      Traits: [
        'Pistol',
        'Rapid Fire(1)'
      ],
    },
    {
      name: 'Hand flamer',
      SR: 4,
      LR: 12,
      SA: 1,
      LA: 0,
      Str: 3,
      AP: 0,
      D: 1,
      Ammo: 4,
      Traits: [
        'Blaze',
        'Template'
      ],
    }
  ],
  battleGear: [
    "suspensors"
  ]
}

let jim = {
  name: "jim",
  rank: "juve",
  move: 1,
  weaponSkill: 2,
  ballisticSkill: 3,
  strength: 4,
  toughness: 5,
  wounds: 6,
  initiative: 7,
  attacks: 8,
  leadership: 9,
  cool: 8,
  willpower: 7,
  intelligence: 6,
  weapons: [
    {
      name: 'autopistol',
      SR: 4,
      LR: 12,
      SA: 1,
      LA: 0,
      Str: 3,
      AP: 0,
      D: 1,
      Ammo: 4,
      Traits: [
        'Pistol',
        'Rapid Fire(1)',
        'trait',
        'traits',
        'somanytraits',
        'goddamn'
      ],
    }
  ]
}

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
