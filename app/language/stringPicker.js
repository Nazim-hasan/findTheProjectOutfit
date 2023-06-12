import _ from 'lodash';
import {Html5Entities} from 'html-entities';
import {decode} from 'html-entities';

const en = require('./en.json');
const bn = require('./bn.json');

const ln = {
  bn,
  en,
};

//  General String
const __ = (key, lng) => {
return _.get(ln[lng], `${key}`);
};

// decodeString
const decodeString = string => {
  // const entities = new Html5Entities();
  // return entities.decode(string);
  return decode(string);
};

export {__, decodeString};
