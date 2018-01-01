import { combineReducers } from 'redux';

import rows from './rows';
import mood from './mood';

export default combineReducers({
    rows,
    mood
});
