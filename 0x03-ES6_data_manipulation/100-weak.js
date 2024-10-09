const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let all = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, all -= -1);
  if (all >= 5) throw new Error('Endpoint load is high');
  return all;
};

export { weakMap, queryAPI };
