import { applyMiddleware , createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
//import {persistStore,localForage} from 'redux-persist';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk,logger());
const store = createStore(rootReducer,middleware);

//persistStore(store,{storage: localForage});

export default store;
