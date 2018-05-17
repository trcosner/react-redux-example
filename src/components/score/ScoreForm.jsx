import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, handleSubmit, reset } from 'redux-form/immutable';
import { addScore } from 'modules/scores/ScoresActions';
import TextField from 'components/controls/TextField';

class ScoreForm extends Component {
    render(){
      return(
        <form onSubmit={this.props.handleSubmit(this._add.bind(this))}>
          <Field name='game' type='text' placeholder='Game Title' component={TextField}/>
          <Field name='player1' type='text' placeholder='Score For Player One' component={TextField} />
          <Field name='player2' type='text' placeholder='Score For Player Two' component={TextField} />
          <button type='submit'>Add</button>
        </form>
      )
    }

    _add(values){
      this.props.addScore(values);
      this.props.reset();
    }
}

const mapDispatchToProps = {
  handleSubmit,
  reset,
  addScore
}

export default connect(null, mapDispatchToProps)(reduxForm({form: 'AddScoreForm'})(ScoreForm));
