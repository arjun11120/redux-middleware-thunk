
import React from 'react';
import HomePage from './homePage';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
const App = () =>{
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.Counter);
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
    <>
      <div>
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
    </div>   
  <div>
    <HomePage />
  </div>
</>

)};

export default App;
