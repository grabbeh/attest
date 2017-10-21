'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = '\ntype Query {\n  contracts: [Contract]\n}\nscalar Date\ntype MyType {\n   created: Date\n}\n\ntype Contract {\n  id: ID!\n  internalParties: [String]\n  externalParties: [String]\n  executionDate: Date\n  effectiveDate: Date\n  expiryDate: Date\n  rollingTerm: Boolean\n  tags: [String]\n  businessUnit: String\n  status: String\n  createdAt: Date\n  lastUpdated: Date\n  status: String\n  client: Boolean\n  supplier: Boolean\n}\n\nschema {\n  query: Query\n }\n';
var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: _resolvers2.default });

exports.default = schema;