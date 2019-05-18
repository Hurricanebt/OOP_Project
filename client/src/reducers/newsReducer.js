import * as t from '../actionTypes/newsActionsTypes'

const initialState = {
    title: '',
    date: '',
    text: '',
    author: '',
    authorID: '',
    comments: []
};

export function newsReducer(state = initialState, action) {
    switch (action.type) {
        case t.GET_NEWS_BY_ID:
            return {
                title: action.payload.title,
                date: action.payload.date,
                text: action.payload.text,
                author: action.payload.author,
                authorID: action.payload.authorID,
                comments: action.payload.comments
            };

        case t.CREATE_COMMENT:
        case t.DELETE_COMMENT:
            return {
                ...state,
                comments: action.payload.comments
            };
        default:
            return state
    }
}