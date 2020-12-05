import './App.css';
import NavBar from './components/layout/Navbar';

import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { load } from './action/auth';
import Alerts from './components/layout/Alerts';
import Router from './components/routing/Router';


function App({ load }) {
  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <NavBar />
      <div className="container">
        <Alerts />
        <Router />
      </div>
    </>

  );
}
App.propTypes = {
  load: PropTypes.func.isRequired,
};
export default connect(null, { load })(App);
