import { combineReducers } from 'redux'



const intialState = {
  num: 0,
  data: null,
  error: ""
}
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
    case "FetchData":
       return { ...state, data: action.data }
    case "ERROR":
        return { ...state, error: action.msg }
    default:
      return intialState;
  }
};


export const fetchData = () => {

  return (dispatch) => {
      return fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => dispatch(
              { type: "FetchData", data: json }))
          .catch(err => dispatch(
              { type: "ERROR",msg: "Unable to fetch data" }))
  }

}

const rootReducer = combineReducers({
  Counter,
  fetchData
})

export default rootReducer