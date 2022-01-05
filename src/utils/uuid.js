import { v4 as uuidv4 } from 'uuid';

/**
 * Returns a uuid string in hex format.
 *
 * @returns {String}
 */
export function createId() {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
  return uuidv4().replace(/-/g, '');
}

export default {
  createId,
};
