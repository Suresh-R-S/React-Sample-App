import { applyMiddleware , createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import {persistStore} from 'redux-persist';

const middleware = applyMiddleware(thunk,logger());
const store = createStore(rootReducer,middleware);

//persistStore(store);

export default store;
