import { createStore, combineReducers } from 'redux';
import accountReducer from './reducers/accountReducer';

const rootReducer = combineReducers({
    account: accountReducer,
});

const store = createStore(rootReducer);

export default store;
