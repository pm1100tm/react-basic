/** @format */

import React, { Component } from 'react';

class SimpleHabit extends Component {
  state = {
    count: 0
  };

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <li className="habit-li">
          <span className="habit-name">Reading</span>
          <span className="habit-count">{this.state.count}</span>
          <button className="habit-button habit-increase" onClick={this.handleIncrease}>
            <i className="fas fa-plus-square"></i>
          </button>
        </li>
      </>
    );
  }
}

export default SimpleHabit;
