import React from 'react';
import './App.css';


function ShowBanner(props) {
  if (props.time > 45) {
    return (
      <div className="rest_block">Time to relax</div>
    )
  } else {
    return (
      <div className="work_block">Time to word</div>
    )
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()} />
        <h1>Time now {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock;
