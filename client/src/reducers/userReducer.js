import { LOGIN_SUCCESS } from '../actions/userActions';
import { LOGIN_FAILED } from '../actions/userActions';
import { REG_SUCCESS } from '../actions/userActions';
import { REG_FAILED } from '../actions/userActions';
import { LOGOUT } from '../actions/userActions';
import { REFRESH } from '../actions/userActions';

const initialState = {
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
        case LOGIN_SUCCESS:
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

        case LOGIN_FAILED:
            return {
                ...state,
                isLogin: false,
                error: action.payload
            };

        case LOGOUT:
            return {
                firstName: '',
                lastName: '',
                isAdmin: false,
                isLogin: false,
                regDate: undefined,
                imageURL: undefined,
                error: ''
            };

        case REG_SUCCESS:
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

        case REG_FAILED:
            return {
                ...state,
                isLogin: false,
                error: action.payload
            };

        case REFRESH:
            return {
                ...state,
                error: ''
            };

        default:
            return state;
    }
}