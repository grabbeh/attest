'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const chance = new _chance2.default();

const internal = ['ACME Inc', 'ACME DYNAMITE Inc', 'ACME LUBRICANT Inc', 'ACME DRILLING Inc'];

const external = ['Oracle, Inc', 'Google, Inc', 'Apple, Inc', 'Facebook, Inc', 'Amazon Inc', 'JP Morgan'];

const businessUnits = ['Sales', 'IT', 'Disaster recovery', 'Incident management', 'Facilities', 'Legal', 'Finance', 'Customer services', 'Marketing', 'Software development'];

const statuses = ['Instructed', 'Executed', 'Drafted'];

const randomTags = ['High priority', 'renewal', 'Critical', 'Strategic'];

const random = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const number = arr => {
  return Math.floor(Math.random() * arr.length);
};

const metaDataGenerator = () => {
  const date = new Date();
  const client = chance.bool();
  const supplier = !client;
  const internalParties = random(internal);
  const externalParties = random(external);
  const status = random(statuses);
  const id = chance.guid();
  const tags = randomTags.slice(number(randomTags), number(randomTags));
  const unit = random(businessUnits);
  let effectiveDate = chance.date({
    year: chance.year({ min: 1990, max: date.getFullYear() }),
    string: true,
    american: false
  });

  effectiveDate = new Date((0, _moment2.default)(effectiveDate, 'DD-MM-YYYY')).toISOString();

  const executionDate = effectiveDate;

  let expiryDate = chance.date({
    year: chance.year({ min: date.getFullYear(), max: 2025 }),
    string: true,
    american: false
  });

  expiryDate = new Date((0, _moment2.default)(expiryDate, 'DD-MM-YYYY')).toISOString();

  const rollingTerm = chance.bool();

  const metaData = {
    internalParties,
    externalParties,
    id,
    effectiveDate,
    executionDate,
    expiryDate,
    rollingTerm,
    client,
    supplier,
    unit,
    tags,
    status
  };
  return metaData;
};

const contractsGenerator = num => {
  const contractsData = [];
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