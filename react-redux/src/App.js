import {useSelector, useDispatch} from "react-redux";
import {actions} from './store/index'
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  }

  const decrement = () => {
    dispatch(actions.decrement());
  }

  const addby = ()=>{
    dispatch(actions.addby(20));
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
