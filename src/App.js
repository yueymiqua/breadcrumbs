import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Breadcrumbs from './Breadcrumbs';

export default function App() {
  return (
    <div>
      <Breadcrumbs/>
        <Switch>
          <Route exact from='/' render={props => <Home {...props} />} />
          <Route exact from='/dashboard' render={props => <Dashboard {...props} />} />
          <Route exact from='/about' render={props => <About {...props} />} />
          <Route exact from='/dashboard/contact' render={props => <Contact {...props} />} />
          <Route exact from='/dashboard/blog' render={props => <Blog {...props} />} />
        </Switch>
    </div>
  )
}
