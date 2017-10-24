'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chance = new _chance2.default();

var internal = ['ACME Inc', 'ACME DYNAMITE Inc', 'ACME LUBRICANT Inc', 'ACME DRILLING Inc'];

var external = ['Oracle, Inc', 'Google, Inc', 'Apple, Inc', 'Facebook, Inc', 'Amazon Inc', 'JP Morgan'];

var businessUnits = ['Sales', 'IT', 'Disaster recovery', 'Incident management', 'Facilities', 'Legal', 'Finance', 'Customer services', 'Marketing', 'Software development'];

var statuses = ['Instructed', 'Executed', 'Approved', 'Drafted'];

var randomTags = ['High priority', 'Renewal', 'Critical', 'Strategic'];

var random = function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var number = function number(arr) {
  return Math.floor(Math.random() * arr.length);
};

var metaDataGenerator = function metaDataGenerator() {
  var date = new Date();
  var client = chance.bool();
  var supplier = !client;
  var internalParties = random(internal);
  var externalParties = random(external);
  var status = random(statuses);
  var id = chance.guid();
  var tags = randomTags.slice(number(randomTags), number(randomTags));
  var businessUnit = random(businessUnits);
  var effectiveDate = chance.date({
    year: chance.year({ min: 1990, max: date.getFullYear() }),
    string: true,
    american: false
  });

  effectiveDate = new Date((0, _moment2.default)(effectiveDate, 'DD-MM-YYYY')).toISOString();

  var executionDate = effectiveDate;

  var expiryDate = chance.date({
    year: chance.year({ min: date.getFullYear(), max: 2025 }),
    string: true,
    american: false
  });

  expiryDate = new Date((0, _moment2.default)(expiryDate, 'DD-MM-YYYY')).toISOString();
  var createdAt = Date.now().toISOString();
  var rollingTerm = chance.bool();

  if (status !== 'Executed') {
    effectiveDate = null;
  }
  if (status !== 'Executed') {
    expiryDate = null;
  }
  if (status !== 'Executed') {
    executionDate = null;
  }

  var metaData = {
    internalParties: internalParties,
    externalParties: externalParties,
    id: id,
    effectiveDate: effectiveDate,
    executionDate: executionDate,
    expiryDate: expiryDate,
    rollingTerm: rollingTerm,
    createdAt: createdAt,
    client: client,
    supplier: supplier,
    businessUnit: businessUnit,
    tags: tags,
    status: status
  };
  return metaData;
};

var contractsGenerator = function contractsGenerator(num) {
  var contractsData = [];
  if (num) {
    while (num > 0) {
      contractsData.push(metaDataGenerator());
      num--;
    }
  } else {
    contractsData.push(metaDataGenerator());
  }
  return contractsData;
};

exports.default = contractsGenerator;