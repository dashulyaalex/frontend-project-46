import parseFile from './parsers.js';
import _ from 'lodash';
import getDifference from './getDifference.js';

const genDiff = (filePath1, filePath2) => {
  const obj1 = parseFile(filePath1);
  const obj2 = parseFile(filePath2);
  return getDifference(obj1, obj2);
};

export default genDiff;
