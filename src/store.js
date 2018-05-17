import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ScoresReducer from 'modules/scores/ScoresReducer';

const reducer = combineReducers({
  scores: ScoresReducer
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
