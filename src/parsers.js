import yaml from 'js-yaml';

const parseFile = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return yaml.load(data);
    default:
      return null;
  }
};

export default parseFile;
