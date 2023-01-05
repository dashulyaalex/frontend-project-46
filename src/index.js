import parseFile from './parsers.js';
import getDifference from './getDifference.js';
import formatter from './formatters/index.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const obj1 = parseFile(filePath1);
  const obj2 = parseFile(filePath2);
  const data = getDifference(obj1, obj2);
  return formatter(data, format);
};

export default genDiff;
