import React from 'react';
import {Switch, Route} from 'react-router-dom';

//import components
import Home from './components/Home'
import Products from './components/Products'
import Admin from './components/Admin'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/products' component={Products}/>
        <Route path='/admin' component={Admin}/>
    </Switch>
)
