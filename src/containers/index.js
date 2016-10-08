import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { fetchHotTopics } from 'actions/v2ex';

import styles from './index.scss';


@connect(
  (state) => ({
    data: state.v2ex.topics
  })
)
@CSSModules(styles)
export default class V2exTopics extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchHotTopics());
  }

  render() {
    const { data } = this.props;
    return (
      <div styleName="main">
        {data.map(topic => <div styleName="topic" key={topic.id}>{topic.title}</div>)}
      </div>
    );
  }
}
