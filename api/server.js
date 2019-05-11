const express = require('express');
const morgan = require('morgan');

const api = express();
const port = process.env.PORT || 5000;

api.use(morgan('dev'));

api.listen(port, () => {
    //the weird stuff just adds color to the log
    console.log('\x1b[1m\x1b[32m%s\x1b[0m', `Server listening on port: ${port}`);
});