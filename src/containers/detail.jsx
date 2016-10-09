import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import styles from './index.scss';

import { fetchTopicDetail } from 'actions/v2ex';

@connect(state => ({
  data: state.v2ex.detail,
}))
@css(styles)
export default class TopicDetail extends React.Component {
  static propTypes = {
    params: PropTypes.object,
    data: PropTypes.object,
    dispatch: PropTypes.object,
  }
  componentDidMount() {
    const id = this.props.params.id;
    this.props.dispatch(fetchTopicDetail(id));
  }

  render() {
    const { data } = this.props;
    if (!data) return <div>Not Matched!</div>;
    return (
      <div styleName="main">
        <div styleName="title">{data.title}</div>
        <div styleName="detail">{data.content}</div>
      </div>
    );
  }
}
