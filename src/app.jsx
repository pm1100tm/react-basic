/** @format */

import React, { Component } from 'react';
import './app.css';
import Habits from './component/habits';
import Navbar from './component/navbar';

class App extends Component {
  state = {
    habitCount: 0,
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ]
  };

  handleHabitIncrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        console.log('=======');
        const count = habit.count + 1;
        return { ...habit, count: count > 10 ? 10 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleHabitDecrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleHabitDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleHabitAdd = (habitName) => {
    const habits = [...this.state.habits, { id: Date.now(), name: habitName, count: 0 }];
    this.setState({ habits });
  };

  handleHabitReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });

    setTimeout(
      function () {
        this.setState({ habits: [] });
      }.bind(this),
      1000
    );
  };

  render() {
    return (
      <>
        <Navbar habitCount={this.state.habits.filter((item) => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleHabitIncrease}
          onDecrement={this.handleHabitDecrease}
          onDelete={this.handleHabitDelete}
          onHabitAdd={this.handleHabitAdd}
          onReset={this.handleHabitReset}
        />
      </>
    );
  }
}

export default App;
