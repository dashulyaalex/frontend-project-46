import _ from 'lodash';

const getDifference = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const difference = keys.map((key) => {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { kind: 'nested', key, children: getDifference(obj1[key], obj2[key]) };
    }
    if (!Object.hasOwn(obj1, key)) {
      return { kind: 'added', key, value: obj2[key] };
    }
    if (!Object.hasOwn(obj2, key)) {
      return { kind: 'deleted', key, value: obj1[key] };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        kind: 'changed', key, value1: obj1[key], value2: obj2[key],
      };
    }
    return { kind: 'unchanged', key, value: obj1[key] };
  });
  return difference;
};

export default getDifference;
