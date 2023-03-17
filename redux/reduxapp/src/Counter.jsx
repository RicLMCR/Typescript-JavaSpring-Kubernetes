import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment,decrement } from "./redux/ducks/Counter";

const Counter = () => {
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  const dispatch = useDispatch();

  const handleIncrement = ()=>{
    dispatch(increment())
  };

  const handleDecrement = ()=>{
    dispatch(decrement())
  };

  return (
    <>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
};

export default Counter;
