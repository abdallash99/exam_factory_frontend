import React from 'react'
import Navbar from '../layout/Navbar'
import Alerts from './../layout/Alerts';
import Router from './../routing/Router';

export const Pages = ({ setTheme, theme }) => {
    return (
        <>
            <Navbar setTheme={setTheme} theme={theme} />
            <div className="container">
                <Alerts />
                <Router />
            </div>

        </>
    )
}
