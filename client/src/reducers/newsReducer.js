import { GET_NEWS } from '../actions/newsActions';
import { CREATE_NEWS_SUCCESS } from '../actions/newsActions';
import { CREATE_NEWS_FAILED } from '../actions/newsActions';
import { DELETE_NEWS } from '../actions/newsActions';
import { REFRESH_NEWS } from '../actions/newsActions';

const initialState = {
    news: [],
    error: ''
};

export function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
        case CREATE_NEWS_SUCCESS:
        case DELETE_NEWS:
            return {
                news: action.payload,
                error: ''
            }

        case CREATE_NEWS_FAILED:
            return {
                ...state,
                error: action.payload
            };

        case REFRESH_NEWS:
            return {
                ...state,
                error: ''
            };

        default:
            return state
    }
}