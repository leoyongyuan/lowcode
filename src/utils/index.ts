function deepCopy<T>(target: T, hash_table = new WeakMap<any, any>()) { // eslint-disable-line
  if (typeof target === "object") {
    const clone = Array.isArray(target) ? ([] as T) : ({} as T);
    if (hash_table.get(target)) return hash_table.get(target);
    hash_table.set(target, clone);
    for (const key in target) {
      clone[key] = deepCopy(target[key], hash_table);
    }
    return clone;
  } else {
    return target;
  }
}

let id = 0;
function generateID() {
  return id++;
}

export { deepCopy, generateID };
