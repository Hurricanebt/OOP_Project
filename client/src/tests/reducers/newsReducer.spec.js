import { initialState, newsReducer } from '../../reducers/newsReducer';

import * as t from '../../actionTypes/newsActionsTypes';

describe('user reducer', () => {

    const news = [{
        title: 'title',
        text: 'text'
    }];

    const initialStateWithNews = [...news];

    const error = {
        unknownError: 'unknownError'
    };

    it('GET_NEWS', () => {
        const action = {
            type: t.GET_NEWS,
            payload: news
        }

        expect(newsReducer(initialState, action)).toEqual({
            news: news,
            error: ''
        });
    });

    it('CREATE_NEWS_SUCCESS', () => {
        const action = {
            type: t.CREATE_NEWS_SUCCESS,
            payload: news
        }

        expect(newsReducer(initialState, action)).toEqual({
            news: news,
            error: ''
        });
    });

    it('CREATE_NEWS_FAILED', () => {
        const action = {
            type: t.CREATE_NEWS_FAILED,
            payload: error
        }

        expect(newsReducer(initialStateWithNews, action)).toEqual({
            ...initialStateWithNews,
            error: error
        });
    });

    it('DELETE_NEWS', () => {
        const action = {
            type: t.DELETE_NEWS,
            payload: news
        }

        expect(newsReducer(initialState, action)).toEqual({
            news: news,
            error: ''
        });
    });

    it('REFRESH_NEWS', () => {
        const action = {
            type: t.REFRESH_NEWS,
            payload: news
        }

        expect(newsReducer(initialStateWithNews, action)).toEqual({
            ...initialStateWithNews,
            error: ''
        });
    });

})
