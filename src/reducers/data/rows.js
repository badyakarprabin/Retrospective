import { ADD_GOOD_ROWS, ADD_IMPROVEMENT_ROWS } from '../../actions/rows';

const INITIAL_STATE = {
  good: {
    isSubmitted: false
  },
  improvements: {
    isSubmitted: false
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

    case ADD_GOOD_ROWS:
      return {
        ...state,
        good: action.payload
      };
    case ADD_IMPROVEMENT_ROWS:
      return {
        ...state,
        improvements: action.payload,
      };
    default:
      return state;
  }
}

