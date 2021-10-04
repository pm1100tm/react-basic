/** @format */

import React, { Component } from 'react';
import Habit from './habit';
import HabbitAdd from './habitAddForm';

class Habits extends Component {
  handleOnHabitAdd = (habitName) => {
    this.props.onHabitAdd(habitName);
  };

  render() {
    return (
      <>
        <HabbitAdd onHabitAdd={this.handleOnHabitAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habit-reset-button" onClick={this.props.onReset}>
          Reset
        </button>
      </>
    );
  }
}

export default Habits;
