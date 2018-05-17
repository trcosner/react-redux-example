import React, { Fragment } from 'react';
import ScoreItem from 'components/score/ScoreItem';

const ScoresList = props => {
  const scores = props.scores.map(
    (score, index) => (
      <ScoreItem
        game={score.get('game')}
        player1={score.get('player1')}
        player2={score.get('player2')}
        key={index}
      />
    )
  );

  return(
    <Fragment>
      {scores}
    </Fragment>
  )
}

export default ScoresList;
