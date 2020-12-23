import React from 'react'
import Navbar from '../layout/Navbar'
import Alerts from './../layout/Alerts';
import Router from './../routing/Router';

export const Pages = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Alerts />
                <Router />
            </div>

        </>
    )
}
