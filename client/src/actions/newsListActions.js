import {encodeBody} from "../utils/encode";

import * as t from '../actionTypes/newsListActionsTypes'

export function getNews() {
    return dispatch => {
        fetch('http://localhost:4000/api/getnews', {method: "GET"})
            .then(data => data.json())
            .then(data => {
                dispatch({
                    type: t.GET_NEWS,
                    payload: data.reverse()
                });
            })
            .catch(error => console.log(error)); 
    }
}

export function createNews(title, text, authorID) {
    return dispatch => {
        fetch(`http://localhost:4000/api/createnews`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            body: encodeBody({
                "title": title,
                "text": text,
                "authorID": authorID
            })
        })            
        .then(data => data.json())
        .then(data => {
            if (data.isValidationError) throw data;
            dispatch({
                type: t.CREATE_NEWS_SUCCESS,
                payload: data.reverse()
            });
        })
        .catch(error => {
            dispatch({
                type: t.CREATE_NEWS_FAILED,
                payload: error
            });
        })
    }
}

export function deleteNews(newsID) {
    return dispatch => {
        fetch(`http://localhost:4000/api/deletenews`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            body: encodeBody({
                "newsID": newsID
            })
        })
        .then(data => data.json())
        .then(data => {
            dispatch({
                type: t.DELETE_NEWS,
                payload: data.reverse()
            });
        })
    }
}

export function refresh() {
    return dispatch => {
        dispatch({
            type: t.REFRESH_NEWS
        })
    }
}