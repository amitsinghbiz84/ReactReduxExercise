import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import IssueListing from '../App';
import IssueDescription from './issuedescription';

const Router = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
            <Route exact path='/' component={IssueListing}/>
            <Route path='/detail/' component={IssueDescription}/>
            
            </Switch>
            
        </BrowserRouter>
    </Provider>
)

export default Router;