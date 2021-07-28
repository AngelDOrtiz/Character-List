/* eslint-disable max-len */
import React from 'react';
import AnimalCrossingCharacters from '../../containers/AnimalCrossingCharacters';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from '../../containers/Details';



export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact render={(routerProps) => <AnimalCrossingCharacters {...routerProps} />}/>
          <Route path="/:id" exact component={Details}/>
        </Switch>
      </Router>
    </div>
  );
}
