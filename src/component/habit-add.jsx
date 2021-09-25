/** @format */

import React, { Component } from 'react';

class HabbitAdd extends Component {
  onAddHabit = (event) => {
    event.preventDefault();
    console.log('HabbitAdd');
  };

  render() {
    return (
      <form className="form-habbit-add" onSubmit={this.onAddHabit}>
        <input type="text" className="input-habbit-add" />
        <button className="button-habbit-add"></button>
      </form>
    );
  }
}

export default HabbitAdd;
