import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count : 0,
  };

  handleHabitIncrease = event => {
    // state 오브젝트 안에 있는 count 증가
    // if (this.state.count <= 9){
    //   this.setState({count: this.state.count + 1})
    // }

    // 다른 문법
    const count = this.state.count + 1;
    if (count === 10) return
    this.setState({ count : count})
  }

  handleHabitDecrease = event => {
    // state 오브젝트 안에 있는 count 감소
    // if (this.state.count > 0){
    //   this.setState({count: this.state.count - 1})
    // }

    // 다른 문법
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count})
  }

  handleHabitDelete = event => {
    // 해당 컴포넌트 삭제
    console.log('handleHabitDelete')
  }

  render() {
    console.log(this.props)
    const { name, count } = this.props.habit;

    return (
      <React.Fragment>
        <li className='habit-li'>
          <span className='habit-name'>{name}</span>
          <span className='habit-count'>{count}</span>
          <button className='habit-button habit-increase' onClick={this.handleHabitIncrease}>
            <i className="fas fa-plus-square"></i>
          </button>
          <button className='habit-button habit-decrease' onClick={this.handleHabitDecrease}>
            <i className="fas fa-minus-square"></i>
          </button>
          <button className='habit-button habit-delete' onClick={this.handleHabitDelete}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </li>
      </React.Fragment>
    )
  }
}

export default Habit;