import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {asyncIncrement} from 'actions/test'
import styles from 'styles/main.scss'

@connect(
  state => {
    return {count: state.count}
  }
)
export default class TestContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick = ()=> {
    this.props.dispatch(asyncIncrement());
    if (this.props.count > 5) {
      this.props.dispatch(push('/next'));
    }
  }
  render() {
    return (
      <div>
      <p>{this.props.count}</p>
      <button onClick={this.onClick}>Async Increment One</button>
      </div>
    )
  }
}
