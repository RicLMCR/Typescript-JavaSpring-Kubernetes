
import "./App.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <h1>Redux Tests</h1>
      <h2>The count is: {count}</h2>
      <Counter />
    </div>
  );
}

export default App;
