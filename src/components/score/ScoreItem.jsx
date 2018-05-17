import React from 'react';

const ScoreItem = props => (
  <div>
    <div>Game: {props.game}</div>
    <div>Player One: {props.player1}</div>
    <div>Player Two: {props.player2}</div>
  </div>
)

export default ScoreItem;
