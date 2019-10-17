import testRouter from './routes/tests';
import bodyParser from 'body-parser';
import express from 'express';
import logger from 'morgan';

var app = express();

//
// Middleware
//
app.use(logger('tiny'));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

//
// Root path
//
app.get('/', (req, res) => res.send('Home'));
//
// Routes
app.use('/api/tests', testRouter);

// Catch 404 error
app.use((req, res, next) => {
    return res.send('404 page not found');
});


module.exports = app;
