import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { useHistory } from 'react-router-dom';

const history = createBrowserHistory();

export function First(){
  return (<div>
    <Link to="/second">Client Second</Link>
  <p>Client First</p>
  </div>);
}

export function Second(){
  return (<div>
    <Link to="/">Client First</Link>
  <p>Client Second</p>
  </div>);
}

export default ({ history }) => {
  return (<div>
            <Router history={history}>      
                    <Switch>
                    <Route exact path="/second" component={Second} />
                    <Route path="/" component={First} />
                    </Switch>
            </Router>                                    
        </div>
  );
};
