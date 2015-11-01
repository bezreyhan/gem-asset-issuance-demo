import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { sendData } from '../actions/test';

const Test = React.createClass({
  displayName: 'Test',


  propTypes: {
    data: PropTypes.string,
    dispatch: PropTypes.func
  },


  render() {
    return (
      <div>
        <div>{this.props.data}</div>
        <input type='text' ref='dataInput'/>
        <button type='text' onClick={this.onClick}>
          Send Data
        </button>
      </div>
    );
  },


  onClick(e) {
    e.preventDefault();
    const data = ReactDOM.findDOMNode(this.refs.dataInput).value;
    this.props.dispatch(sendData(data));
  }
});


function select(state) {
  return {
    data: state.test.data
  };
}


export default connect(select)(Test);
