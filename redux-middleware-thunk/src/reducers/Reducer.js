import { combineReducers } from 'redux'



const initialState = 0;
export const Counter = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'double':
      return state * 2;
    case 'reset':
      return 0;
    default:
      return initialState;
  }
};
const inint = {
  data: [],
  error: '',
  loading: false
};
export const dataInfo =(state ,action) =>{
  switch (action.type) {
    case 'set-data':
      return {
        ...state,
        data: action.payload
      }
    case 'loading':
      return {
        ...state,
        loading: action.payload
      }
    case 'error':
      return {
        ...state,
        error: action.payload
      }
    default:
      return inint;
  }
}

const rootReducer = combineReducers({
  Counter : Counter
})

export default rootReducer