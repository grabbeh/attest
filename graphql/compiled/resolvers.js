'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _connectors = require('./connectors');

var _graphql = require('graphql');

var _language = require('graphql/language');

var resolvers = {
  Date: new _graphql.GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue: function parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize: function serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral: function parseLiteral(ast) {
      if (ast.kind === _language.Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  }),
  Query: {
    contracts: function contracts(root, args) {
      return _connectors.Contract.find();
    }
  }
};

var fromMongo = function fromMongo(item) {
  return _extends({}, item, {
    id: item._id.toString()
  });
};

exports.default = resolvers;