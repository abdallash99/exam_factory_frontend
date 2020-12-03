import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';
import Login from './../auth/Login';
import Signup from './../auth/Signup';
import { Home } from './../pages/Home';
import ListUsers from './../auth/ListUsers';
function Router() {
    return (
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/users' component={ListUsers} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Router
