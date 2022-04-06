import { v4 as uuidv4 } from 'uuid';

/**
 * Returns a uuid string in hex format.
 *
 * @returns {String}
 */
export function createId() {
  // eslint-disable-next-line max-len
  return uuidv4().replace(/-/g, '');
}

export default {
  createId,
};
