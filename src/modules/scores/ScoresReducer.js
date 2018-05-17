import { SCORES_ACTIONS } from 'modules/scores/ScoresActions';
import { Map, List } from 'immutable';

const ScoresReducer = (state = List(), action) => {
  switch (action.type) {
    case SCORES_ACTIONS.ADD_SCORE:
      return state.push(
        Map(action.data)
      );
    default:
      return state
  }
}

export default ScoresReducer;
