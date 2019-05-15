import {encodeBody} from "../utils/encode";

export const GET_NEWS = 'GET_NEWS';
export const CREATE_NEWS_SUCCESS = 'CREATE_NEWS_SUCCESS';
export const CREATE_NEWS_FAILED = 'CREATE_NEWS_FAILED';
export const DELETE_NEWS = 'DELETE_NEWS';
export const REFRESH_NEWS = 'REFRESH_NEWS';

export function getNews() {
    return dispatch => {
        fetch('http://localhost:4000/api/getnews', {method: "GET"})
            .then(data => data.json())
            .then(data => {
                dispatch({
                    type: GET_NEWS,
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
                type: CREATE_NEWS_SUCCESS,
                payload: data.reverse()
            });
        })
        .catch(error => {
            dispatch({
                type: CREATE_NEWS_FAILED,
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
                type: DELETE_NEWS,
                payload: data.reverse()
            });
        })
    }
}

export function refresh() {
    return dispatch => {
        dispatch({
            type: REFRESH_NEWS
        })
    }
}