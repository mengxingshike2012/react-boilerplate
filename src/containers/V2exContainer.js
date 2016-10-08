import React from 'react';
import { connect } from 'react-redux';
import { fetchHotTopics } from 'actions/v2ex';

@connect(
  (state) => ({
    data: state.v2ex.topics
  })
)
export default class V2exTopics extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchHotTopics());
  }

  render() {
    const { data } = this.props;
    return (
      <div className="main">
        {data.map(topic => <div className="topic" key={topic.id}>{topic.title}</div>)}
      </div>
    );
  }
}
