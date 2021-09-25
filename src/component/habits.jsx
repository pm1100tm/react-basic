/** @format */

import React, { Component } from 'react';
import Habit from './habit';
import HabbitAdd from './habit-add';

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
      </>
    );
  }
}

export default Habits;
