import { encodeBody } from '../utils/encode';
import history from '../history';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const REG_SUCCESS = 'REG_SUCCESS';
export const REG_FAILED = 'REG_FAILED';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAILED = 'EDIT_FAILED';
export const LOGOUT = 'LOGOUT';
export const REFRESH = 'REFRESH';

export function login(email, password) {
    return dispatch => {
        fetch(`http://localhost:4000/api/login?email=${email}&password=${password}`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'GET'
        })
        .then(data => data.json())
        .then(data => {
            if (data.isValidationError) throw data;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data
            });
            history.push('/profile');
        })
        .catch(error => {
            dispatch({
                type: LOGIN_FAILED,
                payload: error
            });
        })
    }
}

export function registration(lastName, firstName, email, password, imageURL) {
    return dispatch => {
        fetch('http://localhost:4000/api/registration',{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: "POST",
            body: encodeBody({
                "firstName": firstName,
                "lastName": lastName,
                "imageURL": imageURL,
                "isAdmin": false,
                "email": email,
                "password": password
            })
        })
        .then(data => data.json())
        .then(data => {
            if (data.isValidationError) throw data;
            dispatch({
                type: REG_SUCCESS,
                payload: data
            });
            history.push('/profile');
        })
        .catch((error) => {
            dispatch({
                type: REG_FAILED,
                payload: error
            })
        })
    }
}

export function editProfile(lastName, firstName, about, imageURL, userID) {
    return dispatch => {
        fetch(`http://localhost:4000/api/edit?userID=${userID}`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            body: encodeBody({
                "firstName": firstName,
                "lastName": lastName,
                "about": about,
                "imageURL": imageURL
            })
        })
        .then(data => data.json())
        .then(data => {
            if (data.isValidationError) throw data;
            dispatch({
                type: EDIT_SUCCESS,
                payload: data
            });
        })
        .catch((error) => {
            dispatch({
                type: EDIT_FAILED,
                payload: error
            })
        })
    }
}

export function logout() {
    return dispatch => {
        dispatch({
            type: LOGOUT
        });
    }
}

export function refresh() {
    return dispatch => {
        dispatch({
            type: REFRESH
        })
    }
}