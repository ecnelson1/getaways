import React from 'react';
import Getaways from '../../containers/Getaways';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from '../home/HomePage';
import PlaceDetails from '../../containers/PlaceDetails';

export default function App() {
  return (
    <Router>
        <Route
        exact path='/'
        component={HomePage}
        />
         <Route
        exact path='/places'
        component={Getaways}
        />
          <Route
        exact path='/places/:id'
        component={PlaceDetails}
        />
    </Router>
  )
}

