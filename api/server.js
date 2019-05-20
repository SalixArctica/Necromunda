const express = require('express');
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const api = express();
const port = process.env.PORT || 5000;

api.use(morgan('dev'));

api.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

api.listen(port, () => {
    //the weird stuff just adds color to the log
    console.log('\x1b[1m\x1b[32m%s\x1b[0m', `Server listening on port: ${port}`);
});