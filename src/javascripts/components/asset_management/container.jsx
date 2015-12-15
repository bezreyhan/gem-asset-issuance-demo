import React, { PropTypes } from 'react';
import Navbar from '../reusable/navbar';


const AssetManagementContainer = React.createClass({
  displayName: 'AssetManagementContainer',


  propTypes: {
    children: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object
  },


  render() {
    return (
      <div>
        <Navbar
          pathname={this.props.location.pathname}
          history={this.props.history}
        />
        { this.props.children }
      </div>
    );
  }
});


export default AssetManagementContainer;
