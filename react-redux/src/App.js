import {useSelector, useDispatch} from "react-redux"
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: "INCREMENT"});
  }

  const decrement = () => {
    dispatch({type: "DECREMENT"});
  }

  const addby = ()=>{
    dispatch({type: "ADDBY", payload: 10});
  }


  return (
  <div>
    <h1>Counter App</h1>
    <h2>{counter}</h2>

    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={addby}>Add By 10</button>
  </div>
  );
}

export default App;
