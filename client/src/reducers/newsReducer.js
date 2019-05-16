import * as t from '../actionTypes/newsActionsTypes'

const initialState = {
    news: [],
    error: ''
};

export function newsReducer(state = initialState, action) {
    switch (action.type) {
        case t.GET_NEWS:
        case t.CREATE_NEWS_SUCCESS:
        case t.DELETE_NEWS:
            return {
                news: action.payload,
                error: ''
            }

        case t.CREATE_NEWS_FAILED:
            return {
                ...state,
                error: action.payload
            };

        case t.REFRESH_NEWS:
            return {
                ...state,
                error: ''
            };

        default:
            return state
    }
}