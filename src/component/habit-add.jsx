/** @format */

import React, { Component } from 'react';

class HabbitAdd extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onHabitAdd = (event) => {
    event.preventDefault();
    const addHabitName = this.inputRef.current.value;
    addHabitName && this.props.onHabitAdd(addHabitName);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="habbit-add-form" onSubmit={this.onHabitAdd}>
        <input ref={this.inputRef} type="text" className="habbit-add-input" />
        <button className="habbit-add-button">ADD</button>
      </form>
    );
  }
}

export default HabbitAdd;
