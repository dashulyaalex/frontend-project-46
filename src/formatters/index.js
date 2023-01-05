import stylish from './stylish.js';

const formatter = (data, format = 'stylish') => {
  let result;
  if (format === 'stylish') {
    result = stylish(data);
  }
  return result;
};

export default formatter;
