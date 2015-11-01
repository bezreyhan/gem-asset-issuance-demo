import React from 'react';
import { Router, Route } from 'react-router';
import Test from '../components/test';


export default
  <Router>
    <Route name='test' path='/' component={Test} />
  </Router>
;
