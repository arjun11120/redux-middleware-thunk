
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
const App = () =>{
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state);
  const handleIncrement = () =>{
    dispatch({type:"increment"})
  }
  const handleDecrement = () =>{
    dispatch({type:"decrement"})
  }
  const double = () =>{
    dispatch({type:"double"})
  }
  const reset = () =>{
    dispatch({type:"reset"})
  }
  return(
    <center>
      <div className='main-item'>
        <div className='head-items'>
          <h1>{counter}</h1>
        </div>
        <div className='sub-items'>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={double}>x2</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </center>
)};

export default App;
