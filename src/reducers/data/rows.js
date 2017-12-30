import { ADD_ROWS } from '../../actions/rows';

const INITIAL_STATE = {
  rows: {
    good: [1],
    improvements: [1]
  }
};

/**
 * Reducer function add rows
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} The new state
 */
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ROWS:
      return {
        ...state,
        user: action.payload.data,
        isLoading: false
      };
    default:
      return state;
  }
}

