var isObject = function(potentialObject) {
  return Object.prototype.toString.call(potentialObject) === "[object Object]";
}


var flattenObject = function(obj, path = "") {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (isObject(obj[key]) && Object.keys(obj[key]).length > 0) {
      const nextPath = path + `${path === "" ? "" : "."}${key}`;
      Object.assign(result, flattenObject(obj[key], nextPath));
    } else if (path === "") {
      result[key] = obj[key];
    } else {
      result[`${path}.${key}`] = obj[key];
    }
  });

  return result;
}

module.exports = flattenObject