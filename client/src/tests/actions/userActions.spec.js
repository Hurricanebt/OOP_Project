import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as t from '../../actionTypes/userActionsTypes';
import { login, registration, editProfile, logout, refresh } from '../../actions/userActions';

describe('user actions', () => {

    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store = mockStore({});

    afterEach(() => {
        store = mockStore({});
        fetchMock.reset();
        fetchMock.restore();
    });

    describe('test login()', () => {
        
    }) 

    it('login(): should create LOGIN_SUCCESS action', () => {
        fetchMock.getOnce(`http://localhost:4000/api/login`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: {
                firstName: "test",
                lastName: "test"
            }
        });
        
        const expectedAction = {
            type: t.LOGIN_SUCCESS,
            payload: {
                firstName: "test",
                lastName: "test"
            }
        }

        return store.dispatch(login(email, password))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            })
    });

    it('login(): should create LOGIN_FAILED action with invalidEmail error', () => {
        const email = 'email';
        const password = '1234';
        
        const expectedAction = {
            type: t.LOGIN_FAILED,
            payload: {
                invalidEmail: "Недействительная почта",
                isValidationError: true,
            }
        }

        return store.dispatch(login(email, password))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            })
    });

    it('login(): should create LOGIN_FAILED action with invalidPassword error', () => {
        const email = 'testtest@test.com';
        const password = '111';
        
        const expectedAction = {
            type: t.LOGIN_FAILED,
            payload: {
                invalidPassword: "Минимум четыре символа",
                isValidationError: true,
            }
        }

        return store.dispatch(login(email, password))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            })
    });

    it('login(): should create LOGIN_FAILED action with userNotFound error', () => {
        const email = 'testtest@test.com';
        const password = '1234';
        
        const expectedAction = {
            type: t.LOGIN_FAILED,
            payload: {
                userNotFound: "Пользователь с такой почтой и паролем не найден",
                isValidationError: true,
            }
        }

        return store.dispatch(login(email, password))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            })
    });

    it('registration(): should create RED_FAILED action with invalidLastName error', () => {
        const lastName = 'ttt';
        const firstName = 'test';
        const email = 'testtest@test.com';
        const password = '1234';
        
        const expectedAction = {
            type: t.REG_FAILED,
            payload: {
                invalidLastName: "Минимум четыре символа",
                isValidationError: true,
            }
        }

        return store.dispatch(registration(lastName, firstName, email, password))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            })
    });

    it('registration(): should create RED_FAILED action with invalidFirstName error', () => {
        const lastName = 'test';
        const firstName = 'ttt';
        const email = 'testtest@test.com';
        const password = '1234';
        
        const expectedAction = {
            type: t.REG_FAILED,
            payload: {
                invalidFirstName: "Минимум четыре символа",
                isValidationError: true,
            }
        }

        return store.dispatch(registration(lastName, firstName, email, password))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            })
    });

    it('registration(): should create RED_FAILED action with invalidEmail error', () => {
        const lastName = 'test';
        const firstName = 'test';
        const email = 'test';
        const password = '1234';
        
        const expectedAction = {
            type: t.REG_FAILED,
            payload: {
                invalidEmail: "Недействительная почта",
                isValidationError: true,
            }
        }

        return store.dispatch(registration(lastName, firstName, email, password))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            })
    });

    it('registration(): should create RED_FAILED action with invalidPassword error', () => {
        const lastName = 'test';
        const firstName = 'test';
        const email = 'testtest@test.com';
        const password = '123';
        
        const expectedAction = {
            type: t.REG_FAILED,
            payload: {
                invalidPassword: "Минимум четыре символа",
                isValidationError: true,
            }
        }

        return store.dispatch(registration(lastName, firstName, email, password))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            })
    });

    it('registration(): should create RED_FAILED action with invalidPassword error', () => {
        const lastName = 'test';
        const firstName = 'test';
        const email = 'testtest@test.com';
        const password = '123';
        
        const expectedAction = {
            type: t.REG_FAILED,
            payload: {
                invalidPassword: "Минимум четыре символа",
                isValidationError: true,
            }
        }

        return store.dispatch(registration(lastName, firstName, email, password))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            })
    });

    it('logout(): should create LOGOUT action', () => {
        const expectedAction = {
            type: t.LOGOUT
        }

        store.dispatch(logout());

        expect(store.getActions()).toEqual([expectedAction])
    });

    it('refresh(): should create REFRESH_USER action', () => {
        const expectedAction = {
            type: t.REFRESH_USER
        }

        store.dispatch(refresh());

        expect(store.getActions()).toEqual([expectedAction])
    });

})
