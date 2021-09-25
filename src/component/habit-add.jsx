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
      <form ref={this.formRef} className="form-habbit-add" onSubmit={this.onHabitAdd}>
        <input ref={this.inputRef} type="text" className="input-habbit-add" />
        <button className="button-habbit-add">ADD</button>
      </form>
    );
  }
}

export default HabbitAdd;
