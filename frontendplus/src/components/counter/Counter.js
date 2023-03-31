import { useDispatch } from "react-redux";
import { increment, decrement } from "../../containers/testRedux/Counter";

const Counter = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
};

export default Counter;
