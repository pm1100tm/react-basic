import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
      <React.Fragment>
        <li className='habit-li'>
          <span className='habit-name'>Reading</span>
          <span className='habit-count'>1</span>
          <button className='habit-button habit-increase'><i className="fas fa-plus-square"></i></button>
          <button className='habit-button habit-decrease'><i className="fas fa-minus-square"></i></button>
          <button className='habit-button habit-delete'><i class="fas fa-trash-alt"></i></button>
        </li>
      </React.Fragment>
    )
  }
}

export default Habit;