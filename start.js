const express = require('express'),
    helmet = require('helmet'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    config = require('./config'),
    serverApp = require('./server'),
    clientApp = require('./client/index');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());

app.use('/api', serverApp);
app.use('/', clientApp);

app.set('port', process.env.PORT || config.system.port || '3000');

server.listen(3000, function () {
    console.log(`Тестовое приложение запущено http://localhost:3000`);
});
