import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScoreForm from 'components/score/ScoreForm';
import ScoresList from 'components/score/ScoresList';

const  App = props => (
  <Router>
    <Fragment>
      <Link to='/'>View Scores</Link>
      <Link to='/add'>Add Score</Link>
      <Route exact path='/' render={() => <ScoresList scores={props.scores}/>}/>
      <Route path='/add' component={ScoreForm}/>
    </Fragment>
  </Router>
);

const mapStateToProps = state => ({
  scores: state.get('scores')
});

export default connect(mapStateToProps)(App);
