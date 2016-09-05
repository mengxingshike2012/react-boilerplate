import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
@connect(

)
export default class NextPageContainer extends React.Component {

  goBack = () => {
    this.props.dispatch(push('/'));
  }
  render() {
    return (
      <div>
        <p>Learn Once, Write Everywhere!</p>
        <button onClick={this.goBack}>Back</button>
      </div>
    )
  }
}
