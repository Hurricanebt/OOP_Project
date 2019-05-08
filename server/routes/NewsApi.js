const express = require('express');
const News = require('../db/News');

const router = express.Router();

router.get('/', (req, res) => {
    News.find({})
        .then((news) => res.send(news));
});

router.post('/', (req, res) => {
    const { title, text } = req.body;

    News.create({
        title: title,
        text: text})
        .then(news => res.send(news));
});

module.exports = router;