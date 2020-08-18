const express = require('express');
const app = express();
const cors = require('cors')
const mainRoutes =require('./mainroutes');
const nosqldb = require('./nosqldbconn');
const sqldb = require('./sqldbconn');
const sqlcmd = require('./sqlcmd');

app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT")
        return res.status(200).json({});
    }
    next();
});

app.use('/api',mainRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;