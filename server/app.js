const express = require('express');
const routerUsers = require('./routes/UsersApi');
const routerNews = require('./routes/NewsApi');
const bodyParser = require('body-parser');
require('./db/index');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routerUsers);
app.use('/api', routerNews);

app.listen(4000, () => {
    console.log('Poehaliiii');
});