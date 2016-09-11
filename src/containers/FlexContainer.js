import React from 'react';

import './index.scss';

export default class FlexContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="one">
          <div className="item1" ><h2>一列布局</h2></div>
        </div>
        <div className="two">
          <div className="two-one">
            <div className="item21"></div>
            <div className="item21"></div>
          </div>
          <div className="two-two">
          <div className="item22"></div>
          <div className="item22"></div>
          </div>
        </div>
        <div className="three">
        <div className="three-one">
          <div className="item31"></div>
          <div className="item31"></div>
          <div className="item31"></div>
        </div>
        <div className="three-two">
          <div className="item32"></div>
          <div className="item32"></div>
          <div className="item32"></div>
        </div>
        </div>
      </div>
    )
  }
}
