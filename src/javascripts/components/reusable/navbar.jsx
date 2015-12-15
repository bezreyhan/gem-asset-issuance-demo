import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';


const divider = (
  <FontIcon
    className="material-icons"
    style={{
      color: 'white',
      verticalAlign: 'middle',
      fontSize: '32px'
    }}
  >
    chevron_right
  </FontIcon>
);

const Navbar = React.createClass({
  displayName: 'Navbar',


  propTypes: {
    pathname: PropTypes.string,
    history: PropTypes.object
  },


  render() {
    let title;
    // If a pathname is provided then we need to create breadcrumbs
    // for the title of the navbar
    if (this.props.pathname) {
      const pathParts = this.props.pathname
        .split('/')
        .filter(part => part !== '');

      title = (
        <div>
          {
            pathParts.map((name, i) => {
              return (
                <span>
                  <FlatButton
                    key={i}
                    label={name.split('_').join(' ')}
                    onClick={this.transition.bind(null, pathParts.slice(0, i + 1))}
                  />
                  { i + 1 === pathParts.length ? null : divider }
                </span>
              );
            })
          }
        </div>
      );
    }

    return (
      <div>
        <AppBar
          title={title}
          iconElementLeft={<IconButton><FontIcon className="material-icons">grade</FontIcon></IconButton>}
          iconElementRight={
            <IconMenu iconButtonElement={
              <IconButton>
                <FontIcon className="material-icons">more_vert</FontIcon>
              </IconButton>
            }>
              <MenuItem primaryText="Asset Holdings" onClick={this.transition.bind(null, ['asset_holdings'])}/>
              <MenuItem primaryText="Asset Management" onClick={this.transition.bind(null, ['asset_management'])} />
            </IconMenu>
          }
        />
      </div>
    );
  },


  transition(pathParts) {
    this.props.history.push({
      pathname: pathParts.join('/')
    });
  }
});


export default Navbar;
