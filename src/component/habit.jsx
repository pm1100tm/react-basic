/** @format */

import React, { Component } from 'react';

class Habit extends Component {
  handleHabitIncrease = (event) => {};

  handleHabitDecrease = (event) => {};

  handleHabitDelete = (event) => {};

  render() {
    console.log(this.props);
    const { name, count } = this.props.habit;

    return (
      <React.Fragment>
        <li className="habit-li">
          <span className="habit-name">{name}</span>
          <span className="habit-count">{count}</span>
          <button className="habit-button habit-increase" onClick={this.handleHabitIncrease}>
            <i className="fas fa-plus-square"></i>
          </button>
          <button className="habit-button habit-decrease" onClick={this.handleHabitDecrease}>
            <i className="fas fa-minus-square"></i>
          </button>
          <button className="habit-button habit-delete" onClick={this.handleHabitDelete}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </li>
      </React.Fragment>
    );
  }
}

export default Habit;
