import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addScore, getScores } from 'modules/scores/ScoresActions';

import 'components/app/App.css';

class App extends Component {

  componentDidMount(){
    this.props.getScores();
  }

  componentDidUpdate(){
    console.log(this.props.scores)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this._addScore.bind(this)}>Add</button>
      </div>
    );
  }

  _addScore(){
    const score = {
      game: 'Poker'
    }

    return this.props.addScore(score)
  }
}

const mapStateToProps = state => ({
  scores: state.get('scores')
});

const mapDispatchToProps = (dispatch) => ({
  addScore: (score) => dispatch(addScore(score)),
  getScores: () => dispatch(getScores())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
