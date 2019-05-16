import { encodeBody } from '../utils/encode';
import history from '../history';

import * as t from '../actionTypes/userActionsTypes';

export function login(email, password) {
    return dispatch => {
        return fetch(`http://localhost:4000/api/login?email=${email}&password=${password}`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'GET'
        })
        .then(data => data.json())
        .then(data => {
            if (data.isValidationError) throw data;
            dispatch({
                type: t.LOGIN_SUCCESS,
                payload: data
            });
            history.push('/profile');
            return data;
        })
        .catch(error => {
            dispatch({
                type: t.LOGIN_FAILED,
                payload: error
            });
        })
    }
}

export function registration(lastName, firstName, email, password, imageURL) {
    return dispatch => {
        return fetch('http://localhost:4000/api/registration',{
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
                type: t.REG_SUCCESS,
                payload: data
            });
            history.push('/profile');
        })
        .catch((error) => {
            dispatch({
                type: t.REG_FAILED,
                payload: error
            })
        })
    }
}

export function editProfile(lastName, firstName, about, imageURL, userID) {
    return dispatch => {
        return fetch(`http://localhost:4000/api/edit?userID=${userID}`, {
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
                type: t.EDIT_SUCCESS,
                payload: data
            });
        })
        .catch((error) => {
            dispatch({
                type: t.EDIT_FAILED,
                payload: error
            })
        })
    }
}

export function logout() {
    return dispatch => {
        return dispatch({
            type: t.LOGOUT
        });
    }
}

export function refresh() {
    return dispatch => {
        return dispatch({
            type: t.REFRESH_USER
        })
    }
}