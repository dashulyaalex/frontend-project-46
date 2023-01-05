import path from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';
import yaml from 'js-yaml';

const getPath = (file) => path.resolve(process.cwd(), file);

const readFile = (filePath) => readFileSync(getPath(filePath), 'utf-8');

const parseFile = (filePath) => {
  const fileName = _.last(filePath.split('/'));
  const extension = _.last(fileName.split('.'));
  switch (extension) {
    case 'json':
      return JSON.parse(readFile(filePath));
    case 'yml':
      return yaml.load(readFile(filePath));
    default:
      return null;
  }
};

export default parseFile;
