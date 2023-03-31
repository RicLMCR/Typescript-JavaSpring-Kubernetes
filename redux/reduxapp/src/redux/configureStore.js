// Passes Provider to the index.js file

import { combineReducers, createStore} from 'redux';
import counterReducer from './ducks/Counter';

const reducer = combineReducers({
  counter: counterReducer
})

const store = createStore(reducer);

export default store;