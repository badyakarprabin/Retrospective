import { SELECT_MOOD } from '../../actions/mood';

const INITIAL_STATE = {};

/**
 * Reducer function add rows
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} The new state
 */
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case SELECT_MOOD:
            return {
                ...action.payload
            };
        default:
            return state;
    }
}

