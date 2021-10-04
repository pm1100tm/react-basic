/** @format */

import React, { useCallback, useEffect, useState } from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  // const spanRef = useRef();

  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated ${count}`);
  }, []);

  return (
    <li className="habit-li">
      {/* ref={spanRef} */}
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrease}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

// class SimpleHabit extends Component {
//   state = {
//     count: 0
//   };

//   handleIncrease = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <>
//         <li className="habit-li">
//           <span className="habit-name">Reading</span>
//           <span className="habit-count">{this.state.count}</span>
//           <button className="habit-button habit-increase" onClick={this.handleIncrease}>
//             <i className="fas fa-plus-square"></i>
//           </button>
//         </li>
//       </>
//     );
//   }
// }

// export default SimpleHabit;
