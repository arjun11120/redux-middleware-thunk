import counter from '../../reducers/Reducer';

import {createStore} from "redux";

// import logger from 'redux-logger';



const store = createStore(counter);

export default store