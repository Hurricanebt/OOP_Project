const express = require('express');
const News = require('../db/News');

const router = express.Router();

router.get('/', (req, res) => {
    News.find({})
        .then((news) => res.send(news));
});

router.post('/', (req, res) => {
    console.log(req.body);
    News.create({
        title: req.body.title,
        text: req.body.text,
        author: req.body.author})
        .then(news => {
           res.send(news);
        });
});

module.exports = router;