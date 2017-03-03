import { applyMiddleware , createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer,middleware);

export default store;
