/**
 * Deep copy an object
 */
export function deepCopyObject<O extends object>(copyObject: O): O {
  return JSON.parse(JSON.stringify(copyObject)) as O;
}

export default {
  deepCopyObject,
};
