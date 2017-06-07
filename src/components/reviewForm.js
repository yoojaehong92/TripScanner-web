/**
 * Created by jaehong on 2017. 5. 31..
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import ToggleStarHalf from 'material-ui/svg-icons/toggle/star-half';
import { cyan500, grey300 } from 'material-ui/styles/colors';
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
      content: '',
      disable: false
    }
    this.onTouchTap = this.onTouchTap.bind(this);
  }
  onMouseDown(id) {
    if (!this.state.disable)
      this.setState({ rate: id + 1 })
  }
  onTouchTap = () => {
    const { dispatch } = this.props;
    dispatch(fetchUpdateReview(this.props.id, JSON.stringify({ review: this.state })))
      .then(() => this.setState({ disable: true }))
  }
  render() {
    const { rate } = this.state
    const rateToHtml = []
    for (let i = 0; i < 5; i++) {
      if ((rate - i) >= 1) {
        rateToHtml.push(
          <ToggleStar
            key={ i }
            color={ this.state.disable ? grey300 : cyan500 }
            onMouseDown={ () => this.onMouseDown(i) }
          />
        );
      } else if ((rate - i) === 0.5) {
        rateToHtml.push(
          <ToggleStarHalf
            key={ i }
            color={ this.state.disable ? grey300 : cyan500 }
            onMouseDown={ () => this.onMouseDown(i) }
          />
        );
      } else {
        rateToHtml.push(
          <ToggleStarBorder
            key={ i }
            color={ this.state.disable ? grey300 : cyan500 }
            onMouseDown={ () => this.onMouseDown(i) }
          />
        );
      }
    }
    return (
      <div>
        <TextField
          hintText="Message Field"
          floatingLabelText="Write a review"
          multiLine
          rows={2}
          style={{ width: '100%' }}
          onChange={(event) => this.setState({ content: event.target.value })}
          disabled={ this.state.disable }
        />
        <div>
          { rateToHtml }
          <FlatButton
            label="Submit"
            onTouchTap={ this.onTouchTap }
            disabled={ this.state.disable }
          />
        </div>
      </div>
    )
  }
}

export default connect()(ReviewForm);