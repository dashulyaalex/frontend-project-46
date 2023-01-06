import _ from 'lodash';

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  return typeof data === 'string' ? `'${data}'` : data;
};

const plain = (data, depth = 0) => {
  // console.log(data);
  const lines = data.flatMap((currentLine) => {
    const nomination = depth ? `${depth}.${currentLine.key}` : `${currentLine.key}`;
    switch (currentLine.kind) {
      case 'added':
        // console.log(currentLine.key);
        return `Property '${nomination}' was added with value: ${stringify(currentLine.value)}`;
      case 'deleted':
        return `Property '${nomination}' was removed`;
      case 'changed':
        return `Property '${nomination}' was updated. From ${stringify(currentLine.value1)} to ${stringify(currentLine.value2)}`;
      case 'nested':
        // console.log(`!!!${nomination}`);
        return `${plain(currentLine.children, nomination)}`;
      case 'unchanged':
        return [];
      default:
        return null;
    }
  });
  return lines.join('\n');
};

export default plain;
