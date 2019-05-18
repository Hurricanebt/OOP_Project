import { encodeBody } from "../utils/encode";

import * as t from '../actionTypes/newsActionsTypes'

async function getUserName(userID) {
    return await fetch(`http://localhost:4000/api/getuserbyid?id=${userID}`, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        method: 'GET'
    })
    .then(data => data.json())
    .then(data => data.lastName + ' ' + data.firstName);
}

async function getComments(comments) {
    const result = comments.map(async item => {
        const userName = await getUserName(item.userID);
        return {
            ...item,
            userName
        }
    });
    return Promise.all(result);
}

export function getNewsByID(newsID) {
    return dispatch => {
        return fetch(`http://localhost:4000/api/getnewsbyid?id=${newsID}`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'GET'
        })
        .then(data => data.json())
        .then(async (data) => {
            dispatch({
                type: t.GET_NEWS_BY_ID,
                payload: {
                    title: data.title,
                    date: data.publicationTime,
                    text: data.text,
                    authorID: data.authorID,
                    author: await getUserName(data.authorID),
                    comments: await getComments(data.comments)
                }
            });
        });
    }
}

export function addComment(userID, newsID, text) {
    return dispatch => {
        return fetch('http://localhost:4000/api/addcomment',{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: "POST",
            body: encodeBody({
                "userID": userID,
                "newsID": newsID,
                "text": text
            })
        })
        .then(data => data.json())
        .then(async data => {
            console.log(data);
            dispatch({
                type: t.CREATE_COMMENT,
                payload: {
                    comments: await getComments(data)
                }
            });
        });
    }
}

export function deleteComment(newsID, commentID) {
    return dispatch => {
        return fetch('http://localhost:4000/api/deletecomment',{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: "POST",
            body: encodeBody({
                "newsID": newsID,
                "commentID": commentID
            })
        })
            .then(data => data.json())
            .then(async data => {
                dispatch({
                    type: t.DELETE_COMMENT,
                    payload: {
                        comments: await getComments(data)
                    }
                });
            });
    }
}