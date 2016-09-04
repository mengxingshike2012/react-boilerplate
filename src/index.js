import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<h2>My name is Wang Jian! hahaha~!34</h2>);
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
