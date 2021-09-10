import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { Router, Route, Switch, Redirect, Link, useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ClientComponent } from './clientcomponent';

const history = createBrowserHistory();

export function First(){
  return (<div>
    <Link to="/second">Second</Link>
    <Link to="/client">Client</Link>
  <p>First</p>
  </div>);
}

export function Second(){
  return (<div>
    <Link to="/">First</Link>
    <Link to="/client">Client</Link>
  <p>Second</p>
  </div>);
}

export default () => {
  return (
    <Router history={history}>      
            <Switch>
            <Route exact path="/second" component={Second} />
            <Route exact path="/client" component={ClientComponent} />
            <Route path="/" component={First} />
            </Switch>
    </Router>
  );
};
