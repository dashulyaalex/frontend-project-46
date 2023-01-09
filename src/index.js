import path from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';
import parseFile from './parsers.js';
import getDifference from './getDifference.js';
import formatter from './formatters/index.js';

const getPath = (file) => path.resolve(process.cwd(), file);

const readFile = (filePath) => readFileSync(getPath(filePath), 'utf-8');

const findFormat = (filePath) => {
  const fileName = _.last(filePath.split('/'));
  return _.last(fileName.split('.'));
};
const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const firstObject = parseFile(readFile(filePath1), findFormat(filePath1));
  const secondObject = parseFile(readFile(filePath2), findFormat(filePath2));
  const data = getDifference(firstObject, secondObject);
  return formatter(data, formatName);
};

export default genDiff;
