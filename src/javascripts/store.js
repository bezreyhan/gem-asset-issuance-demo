import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export default createStoreWithMiddleware(appReducer);
