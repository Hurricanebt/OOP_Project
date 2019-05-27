import { initialState, newsReducer } from '../../reducers/newsReducer';

import * as t from '../../actionTypes/newsActionsTypes';

describe('news reducer', () => {

    const news = {
        title: 'title',
        date: 'date',
        text: 'text',
        author: 'author',
        authorID: 'authorID',
        comments: []
    };

    it('GET_NEWS_BY_ID', () => {
        const action = {
            type: t.GET_NEWS_BY_ID,
            payload: news
        }

        expect(newsReducer(initialState, action)).toEqual({
            title: news.title,
            date: news.date,
            text: news.text,
            author: news.author,
            authorID: news.authorID,
            comments: news.comments
        });
    });

})
