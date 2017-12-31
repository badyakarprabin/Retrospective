import { ADD_GOOD_ROWS, ADD_IMPROVEMENT_ROWS } from '../../actions/rows';

const INITIAL_STATE = {
  good: [1],
  improvements: [1]
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

    case ADD_GOOD_ROWS:
      return {
        ...state,
        good: action.payload.good
      };
    case ADD_IMPROVEMENT_ROWS:
      return {
        ...state,
        improvements: action.payload.improvements,
      };
    default:
      return state;
  }
}

