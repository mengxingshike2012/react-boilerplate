import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import css from 'react-css-modules';
import { fetchHotTopics } from 'actions/v2ex';

import styles from './index.scss';


@connect(
  state => ({
    data: state.v2ex.topics,
  }),
)
@css(styles)
export default class V2exTopics extends React.Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(fetchHotTopics());
  }

  render() {
    const { data } = this.props;
    return (
      <div styleName="main">
        {data.map(topic =>
          <div styleName="media" key={topic.id}>
            <div styleName="media-left" >
              <img src={topic.member.avatar_normal} alt="avatar" />
            </div>
            <div styleName="media-content"><Link to={`/topic/${topic.id}`}>{topic.title}</Link></div>
          </div>)}
      </div>
    );
  }
}
