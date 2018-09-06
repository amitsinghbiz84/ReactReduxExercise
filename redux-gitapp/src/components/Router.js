import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import IssueListing from '../App';
import IssueDescription from './issuedescription';
import NotFound from './notFound'

const Router = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
            <Route exact path='/' component={IssueListing}/>
            <Route path='/detail/:issueIdentifier' component={IssueDescription}/>
            <Route path="*" component={NotFound} />
            </Switch>
            
        </BrowserRouter>
    </Provider>
)

export default Router;