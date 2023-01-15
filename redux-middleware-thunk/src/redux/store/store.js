import counter from '../../reducers/Reducer';

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

// import logger from 'redux-logger';



const store = createStore(counter,applyMiddleware(thunk));

export default store