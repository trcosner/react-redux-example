import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import logger from 'redux-logger';
import ScoresReducer from 'modules/scores/ScoresReducer';
import { reducer as FormReducer } from 'redux-form';

const reducer = combineReducers({
  scores: ScoresReducer,
  form: FormReducer
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
