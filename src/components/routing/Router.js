import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotFound } from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';
import Home from './../pages/Home';
import Create from './../pages/Create';
import MyExams from './../pages/MyExams';
import Add from '../pages/Add';
import Update from '../pages/Update';
import Questions from './../pages/Questions';
import Attempt from './../pages/Attempt';
import Grade from './../pages/Grade';
import ExamGrade from './../pages/ExamGrade';
function Router() {
    return (
        <Switch>
            <Route exact path='/' component={() => <Redirect to='/home' />} />
            <PrivateRoute exact path='/home' component={Home} />
            <PrivateRoute exact path='/create' component={Create} />
            <PrivateRoute exact path='/exams' component={MyExams} />
            <PrivateRoute exact path='/add' component={Add} />
            <PrivateRoute exact path='/update' component={Update} />
            <PrivateRoute exact path='/exams/:id/questions' component={Questions} />
            <PrivateRoute exact path='/attempt/:id' component={Attempt} />
            <PrivateRoute exact path='/grade/:id' component={Grade} />
            <PrivateRoute exact path='/exams/grade/:id' component={ExamGrade} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Router
