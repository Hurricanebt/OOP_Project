import * as t from '../actionTypes/userActionsTypes';

export const initialState = {
    firstName: '',
    lastName: '',
    isAdmin: false,
    isLogin: false,
    regDate: undefined,
    imageURL: undefined,
    userID: undefined,
    about: '',
    error: ''
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case t.LOGIN_SUCCESS:
            return {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                isAdmin: action.payload.isAdmin,
                regDate: action.payload.regDate,
                imageURL: action.payload.imageURL,
                userID: action.payload._id,
                about: action.payload.about,
                isLogin: true,
                error: ''
            };

        case t.LOGIN_FAILED:
            return {
                ...state,
                isLogin: false,
                error: action.payload
            };

        case t.LOGOUT:
            return { ...initialState };

        case t.REG_SUCCESS:
            return {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                isAdmin: action.payload.isAdmin,
                regDate: action.payload.regDate,
                imageURL: action.payload.imageURL,
                userID: action.payload._id,
                about: action.payload.about,
                isLogin: true,
                error: ''
            };

        case t.REG_FAILED:
            return {
                ...state,
                isLogin: false,
                error: action.payload
            };

        case t.EDIT_SUCCESS:
            return {
                ...state,
                lastName: action.payload.lastName,
                firstName: action.payload.firstName,
                about: action.payload.about,
                imageURL: action.payload.imageURL,
                error: ''
            };

        case t.EDIT_FAILED:
            return {
                ...state,
                error: action.payload
            };

        case t.REFRESH_USER:
            return {
                ...state,
                error: ''
            };

        default:
            return state;
    }
}