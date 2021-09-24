/** @format */

import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ]
  };

  handleHabitIncrease = (habit) => {
    console.log('---');
    console.log(habit);
  };

  handleHabitDecrease = (habit) => {
    console.log(habit);
  };

  handleHabitDelete = (habit) => {
    console.log(habit);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleHabitIncrease}
            onDecrement={this.handleHabitDecrease}
            onDelete={this.handleHabitDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
