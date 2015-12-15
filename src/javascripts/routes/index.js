import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import AppContainer from '../components/app_container';

import AssetHoldingsContainer from '../components/asset_holdings/container';
import AssetHoldingsIndex from '../components/asset_holdings/index';
import AssetHoldingsShow from '../components/asset_holdings/show';

import AssetManagementContainer from '../components/asset_management/container';
import AssetManagementIndex from '../components/asset_management/index';
import AssetManagementCreate from '../components/asset_management/create';


export default
  <Router>
    <Route path = '/' component={AppContainer}>

      <Route path='asset_holdings' component={AssetHoldingsContainer} >
        <IndexRoute component={AssetHoldingsIndex} />
        <Route path=':id' component={AssetHoldingsShow} />
      </Route>

      <Route path='asset_management' component={AssetManagementContainer} >
        <IndexRoute component={AssetManagementIndex} />
        <Route path='create' component={AssetManagementCreate} />
      </Route>

    </Route>
  </Router>
;
