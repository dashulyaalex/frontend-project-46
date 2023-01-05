import stylish from "./stylish.js";

const formatter = (data, format = 'stylish') => {
  if (format === 'stylish') {
    return stylish(data);
  }
};
export default formatter;
