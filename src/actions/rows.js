import { createAction } from 'redux-actions';

// Action constants
export const ADD_GOOD_ROWS = 'ADD_GOOD_ROWS';

export const addGoodRowsAction = createAction(ADD_GOOD_ROWS);

export const ADD_IMPROVEMENT_ROWS = 'ADD_IMPROVEMENT_ROWS';

export const addImprovementRowsAction = createAction(ADD_IMPROVEMENT_ROWS);