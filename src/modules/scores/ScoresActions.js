import keymirror from 'keymirror';

export const SCORES_ACTIONS = keymirror({
  ADD_SCORE: null,
  GET_SCORES: null
});

export const addScore = (score) => ({
  type: SCORES_ACTIONS.ADD_SCORE,
  data: score
});

export const getScores = () => ({
    type: SCORES_ACTIONS.GET_SCORES,
    data: [
      {
        game: 'Rummy',
        players: [
          {
            name: 'Tyler',
            score: 21
          },
          {
            name: 'Ellen',
            score: 15
          }
        ]
      }
    ]
});
