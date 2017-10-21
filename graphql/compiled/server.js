'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import config from '../config/db'
// import database from './db'

/* const db = mongoose.connect('mongodb://grabbeh:everton@207.154.247.21/test')
console.log(db)
const context = { db }
context.db = db */

var GRAPHQL_PORT = 8000;

var whitelist = [
// Allow domains here
'http://localhost:3000'];
var corsOptions = {
  origin: function origin(_origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(_origin) !== -1;
    callback(null, originIsWhitelisted);
  },

  credentials: true
};

var server = (0, _express2.default)();
server.use((0, _cors2.default)(corsOptions));
server.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({ schema: _schema2.default }));
server.use('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }));

server.listen(GRAPHQL_PORT, function () {
  return console.log('GraphiQL is now running on http://localhost:' + GRAPHQL_PORT + '/graphiql');
});