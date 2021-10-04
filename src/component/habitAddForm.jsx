/** @format */

import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onHabitAdd = (event) => {
    event.preventDefault();
    const addHabitName = inputRef.current.value;
    addHabitName && props.onHabitAdd(addHabitName);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="habbit-add-form" onSubmit={onHabitAdd}>
      <input ref={inputRef} type="text" className="habbit-add-input" placeholder="Habit" />
      <button className="habbit-add-button">ADD</button>
    </form>
  );
});

export default HabitAddForm;

// class HabbitAdd extends Component {
//   formRef = React.createRef();
//   inputRef = React.createRef();

//   onHabitAdd = (event) => {
//     event.preventDefault();
//     const addHabitName = this.inputRef.current.value;
//     addHabitName && this.props.onHabitAdd(addHabitName);
//     // this.inputRef.current.value = '';
//     this.formRef.current.reset();
//   };

//   render() {
//     return (
//       <form ref={this.formRef} className="habbit-add-form" onSubmit={this.onHabitAdd}>
//         <input ref={this.inputRef} type="text" className="habbit-add-input" />
//         <button className="habbit-add-button">ADD</button>
//       </form>
//     );
//   }
// }

// export default HabbitAdd;
