import { combineReducers } from 'redux';
import { newsListReducer } from './newsListReducer';
import { userReducer } from './userReducer';
import {newsReducer} from './newsReducer';

export const rootReducer = combineReducers({
    news: newsReducer,
    newsList: newsListReducer,
    user: userReducer
});