import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IssueListing from '../App';
import IssueDescription from './issuedescription';

const Router = () => (
    <BrowserRouter>
        <Switch>
      <Route exact path='/' component={IssueListing}/>
      <Route path='/detail/' component={IssueDescription}/>
      
    </Switch>
           
    </BrowserRouter>
)

export default Router;