/**
 * Created by jaehong on 2017. 5. 31..
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import ToggleStarHalf from 'material-ui/svg-icons/toggle/star-half';
import { cyan500 } from 'material-ui/styles/colors';
import { FlatButton } from 'material-ui';
import { fetchUpdateReview } from '../actions/reviewAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ReviewForm extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      rate: 0,
      content: ''
    }
  }
  onMouseDown(id) {
    this.setState({ rate: id + 1 })
  }
  onTouchTap() {
    this.props.dispatch(fetchUpdateReview(this.props.id, JSON.stringify({ review: this.state })))
  }
  render() {
    const { rate } = this.state
    const rateToHtml = []
    for (let i = 0; i < 5; i++) {
      if ((rate - i) >= 1) {
        rateToHtml.push(
          <ToggleStar key={ i } color={ cyan500 } onMouseDown={ () => this.onMouseDown(i) }/>
        );
      } else if ((rate - i) === 0.5) {
        rateToHtml.push(
          <ToggleStarHalf key={ i } color={ cyan500 } onMouseDown={ () => this.onMouseDown(i) }/>
        );
      } else {
        rateToHtml.push(
          <ToggleStarBorder key={ i } color={ cyan500 } onMouseDown={ () => this.onMouseDown(i) }/>
        );
      }
    }
    return (
      <div>
        <TextField
          hintText="Message Field"
          floatingLabelText="MultiLine and FloatingLabel"
          multiLine
          rows={2}
          style={{ width: '50%' }}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <div>
          { rateToHtml }
        </div>
        <FlatButton label="Submit" onTouchTap={ () => this.onTouchTap() }/>
      </div>
    )
  }
}

export default connect()(ReviewForm);