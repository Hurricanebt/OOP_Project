import { initialState, userReducer } from '../../reducers/userReducer';

import * as t from '../../actionTypes/userActionsTypes';

describe('user reducer', () => {

    const user = {
        firstName: 'test',
        lastName: 'test',
        isAdmin: false,
        regDate: 'test',
        imageURL: 'test',
        _id: 'test',
        about: 'test'
    };

    const initialStateWithLoggedUser = {
        ...user,
        isLogin: true,
        error: ''
    };

    const edit = {
        firstName: 'edit',
        lastName: 'edit',
        imageURL: 'edit',
        about: 'edit'
    };

    const error = {
        unknownError: 'unknownError'
    };

    it('LOGIN_SUCCESS', () => {
        const action = {
            type: t.LOGIN_SUCCESS,
            payload: user
        }

        expect(userReducer(initialState, action)).toEqual({
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
            regDate: user.regDate,
            imageURL: user._id,
            userID: user._id,
            about: user.about,
            isLogin: true,
            error: ''
        });
    });

    it('LOGIN_FAILED', () => {
        const action = {
            type: t.LOGIN_FAILED,
            payload: error
        }

        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            isLogin: false,
            error: error
        });
    });

    it('REG_SUCCESS', () => {
        const action = {
            type: t.REG_SUCCESS,
            payload: user
        }

        expect(userReducer(initialState, action)).toEqual({
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
            regDate: user.regDate,
            imageURL: user._id,
            userID: user._id,
            about: user.about,
            isLogin: true,
            error: ''
        });
    });

    it('REG_FAILED', () => {
        const action = {
            type: t.REG_FAILED,
            payload: error
        }

        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            isLogin: false,
            error: error
        });
    });

    it('EDIT_SUCCESS', () => {
        const action = {
            type: t.EDIT_SUCCESS,
            payload: edit
        }

        expect(userReducer(initialStateWithLoggedUser, action)).toEqual({
            ...initialStateWithLoggedUser,
            lastName: edit.lastName,
            firstName: edit.firstName,
            about: edit.about,
            imageURL: edit.imageURL,
            error: ''
        });
    });

    it('EDIT_FAILED', () => {
        const action = {
            type: t.EDIT_FAILED,
            payload: error
        }

        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            error: error
        });
    });

    it('LOGOUT', () => {
        const action = {
            type: t.LOGOUT
        }

        expect(userReducer(initialState, action)).toEqual({
            ...initialState
        });
    });

    it('REFRESH_USER', () => {
        const action = {
            type: t.REFRESH_USER
        }

        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            error: ''
        });
    });

})
