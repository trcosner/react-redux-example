import keymirror from 'keymirror';

export const SCORES_ACTIONS = keymirror({
  ADD_SCORE: null,
});

export const addScore = (score) => ({
  type: SCORES_ACTIONS.ADD_SCORE,
  data: score
});
