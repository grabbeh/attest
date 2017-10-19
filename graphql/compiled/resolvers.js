'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const resolvers = {
  Query: {
    contracts(root, args) {
      return [{ name: 'Yep', id: 1, subject: 'Facilities' }, { name: 'No', id: 2, subject: 'Legal' }];
    }
  }
};

exports.default = resolvers;