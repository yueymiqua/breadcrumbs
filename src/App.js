import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Pierreyue from './pages/pierreyue';
import Filebtxt from './pages/filebtxt';
import Project from './pages/project';
import Mysupersecretproject from './pages/mysupersecretproject';
import Mysupersecretfile from './pages/mysupersecretfile';
import Breadcrumbs from './Breadcrumbs';

export default function App() {
  return (
    <div>
      <Breadcrumbs/>
        <Switch>
          <Route exact from='/' render={props => <Home {...props} />} />
          <Route exact from='/pierreyue' render={props => <Pierreyue {...props} />} />
          <Route exact from='/pierreyue/filebtxt' render={props => <Filebtxt {...props} />} />
          <Route exact from='/pierreyue/project' render={props => <Project {...props} />} />
          <Route exact from='/pierreyue/project/mysupersecretproject' render={props => <Mysupersecretproject {...props} />} />
          <Route exact from='/pierreyue/project/mysupersecretproject/mysupersecretfile' render={props => <Mysupersecretfile {...props} />} />
        </Switch>
    </div>
  )
}
// Home -> Pierre -> fileb.txt 
//                -> projects -> mysupersecretproject -> mysupersecret file
