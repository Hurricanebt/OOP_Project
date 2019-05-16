const express = require('express');
const News = require('../db/News');
const Users = require('../db/Users');
const createNewsValidation = require('../utils/createNewsValidation');

const router = express.Router();

router.get('/getnews', async (req, res) => {
    await News.find({})
        .then((news) => res.send(news));
});

router.get('/getnewsbyid', async (req, res) => {
    const { id } = req.query;
    const news = await News.findOne({_id: id});
    res.send(news);
});

router.post('/createnews', async (req, res) => {
    try {
        const { title, text, authorID } = req.body;

        const errors = createNewsValidation(title, text);
        if (errors.isValidationError) throw errors;

        await News.create({
            title: title,
            text: text,
            authorID: authorID
        });

        const news = await News.find({});
        res.send(news);

    } catch (error) {
        res.send(error);
    }
});

router.post('/deletenews', async (req, res) => {
    const { newsID } = req.body;

    await News.findOneAndDelete({_id: newsID});

    await News.find({})
        .then((news) => res.send(news));
});

router.post('/addcomment', async (req, res) => {
    const news = await News.findOne({_id: req.body.newsID});

    const comments = news.comments;
    comments.push({
        text: req.body.text,
        userID: req.body.userID
    });

    await News.findOneAndUpdate(
        {
            _id: req.body.newsID
        },
        {
            comments: comments
        },
        {
            new: true
        });

    res.send(comments);
});

router.post('/deletecomment', async (req, res) => {
    const news = await News.findOne({_id: req.body.newsID});

    const comments = news.comments;

    for (let i = 0; i < comments.length; i++) {
        if (comments[i]._id + '' === req.body.commentID) {
            comments.splice(i, 1);
        }
    }

    await News.findOneAndUpdate(
        {
            _id: req.body.newsID
        },
        {
            comments: comments
        },
        {
            new: true
        });

    res.send(comments);
});

module.exports = router;