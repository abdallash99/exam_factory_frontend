import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotFound } from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';
import Login from './../auth/Login';
import Signup from './../auth/Signup';
import Home from './../pages/Home';
import Create from './../pages/Create';
import MyExams from './../pages/MyExams';
import Add from '../pages/Add';
import Update from '../pages/Update';
function Router() {
    return (
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/' component={() => <Redirect to='/home' />} />
            <PrivateRoute exact path='/home' component={Home} />
            <PrivateRoute exact path='/create' component={Create} />
            <PrivateRoute exact path='/exams' component={MyExams} />
            <PrivateRoute exact path='/add' component={Add} />
            <PrivateRoute exact path='/update' component={Update} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Router
