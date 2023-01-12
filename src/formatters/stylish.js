import _ from 'lodash';

const ident = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);

const stringify = (data, depth = 1) => {
  if (!_.isObject(data)) {
    return data;
  }
  const lines = Object
    .entries(data)
    .map(([key, value]) => `${ident(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);
  return `{\n${lines.join('\n')}\n${ident(depth)}  }`;
};

const stylish = (data, depth = 1) => {
  const lines = data.flatMap((currentLine) => {
    switch (currentLine.kind) {
      case 'added':
        return `${ident(depth)}+ ${currentLine.key}: ${stringify(currentLine.value, depth)}`;
      case 'deleted':
        return `${ident(depth)}- ${currentLine.key}: ${stringify(currentLine.value, depth)}`;
      case 'changed':
        return [
          `${ident(depth)}- ${currentLine.key}: ${stringify(currentLine.value1, depth)}`,
          `${ident(depth)}+ ${currentLine.key}: ${stringify(currentLine.value2, depth)}`,
        ];
      case 'unchanged':
        return `${ident(depth)}  ${currentLine.key}: ${stringify(currentLine.value, depth)}`;
      case 'nested':
        return `${ident(depth)}  ${currentLine.key}: {${stringify(stylish(currentLine.children, depth + 1))}${ident(depth)}  }`;
      default:
        return null;
    }
  });
  return `\n${lines.join('\n')}\n`;
};

export default (data) => `{${stylish(data)}}`;
