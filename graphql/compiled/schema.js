'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const typeDefs = `
type Query {
  contracts: [Contract]
}

type Contract {
  name: String
  id: Int
  subject: String
}

schema {
  query: Query
 }
`;

const schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs, resolvers: _resolvers2.default });

exports.default = schema;