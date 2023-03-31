import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/ducks/Counter";


const Counter = () => {
    // const [count, setCount] = useState(0);

    // const count = useSelector(state => state.counter.count)

    const dispatch = useDispatch();


    const handleIncrement = ()=>{
    dispatch(increment());
    // setCount(count + 1)

    };

    const handleDecrement = ()=>{
    dispatch(decrement())
    // setCount(count - 1)
    };

  return (
    <>
      {/* <h1>Count is: {count}</h1> */}
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
};

export default Counter;
