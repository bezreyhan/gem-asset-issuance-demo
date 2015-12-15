import React, { PropTypes } from 'react';


const AppContainer = React.createClass({
  displayName: 'AppContainer',


  propTypes: {
    children: PropTypes.object
  },


  render() {
    return (
      <div { ...this.props }>
        { this.props.children }
      </div>
    );
  }
});


export default AppContainer;
