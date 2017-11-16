const express = require('express'),
    app = express(),
    path = require('path'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    Index = require('./app/index.js');

app.use('/', express.static(path.join(__dirname, 'build')));
app.use('/', express.static(path.join(__dirname, 'favicon')));
app.use('/', express.static(path.join(__dirname, 'images')));
app.use('/', express.static(path.join(__dirname, 'fonts')));
app.use('/', function (req, res, next) {
    const html = ReactDOMServer.renderToString(Index);
    res.send('<!DOCTYPE html>\r\n' + html);
});

app.use(function (req, res, next) {
    console.error("сработало 404");
    res.redirect('/not-found?url=' + req.url);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    err.userMessage = err.userMessage || 'На сервере произошла ошибка';
    if (res.status() == 200)
        res.status(500);
    res.redirect('/error');
});


module.exports = app;
