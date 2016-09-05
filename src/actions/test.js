import { createAction } from 'redux-actions'

// actually it's a action creator
export const helloAction = createAction('hello');
export const asyncIncrement = createAction('async increment');
export const doIncrement = createAction('do increment');
