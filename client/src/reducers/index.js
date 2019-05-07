import { combineReducers } from 'redux';
import { newsReducer } from './news';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    news: newsReducer,
    user: userReducer
});