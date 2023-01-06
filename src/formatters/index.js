import stylish from './stylish.js';
import plain from './plain.js';

const formatter = (data, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    default:
      return 'Unknown format';
  }
};

export default formatter;
