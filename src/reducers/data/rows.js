import { ADD_GOOD_ROWS, ADD_IMPROVEMENT_ROWS } from '../../actions/rows';

const INITIAL_STATE = {
  good: {
    points: [],
    isSubmitted: false
  },
  improvements: {
    points: [],
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
        good: {
          ...state.good,
          isSubmitted: action.payload.isSubmitted,
          points: action.payload.points
        }
      };
    case ADD_IMPROVEMENT_ROWS:
      return {
        ...state,
        improvements: {
          ...state.improvements,
          isSubmitted: action.payload.isSubmitted,
          points: action.payload.points
        }
      };
    default:
      return state;
  }
}

