import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';
import getDifference from './getDifference.js';

const getPath = (file) => path.resolve(process.cwd(), file);

const readFile = (filePath) => readFileSync(getPath(filePath), 'utf-8');

const genDiff = (filePath1, filePath2) => {
  const obj1 = JSON.parse(readFile(filePath1));
  const obj2 = JSON.parse(readFile(filePath2));
  return getDifference(obj1, obj2);
};

export default genDiff;
