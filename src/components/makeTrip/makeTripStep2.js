/**
 * Created by jaehong on 2017. 5. 24..
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTripContent } from '../../actions/makeTripAction'

class MakeTripStep2 extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    step: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      value: undefined
    }
  }
  componentWillUnmount() {
    this.props.dispatch(setTripContent({
      content: this.state.value
    }))
  }

  render() {
    return (
      <TextField
        hintText="Message Field"
        floatingLabelText="Write about your trip"
        rows={5}
        value={ this.state.value }
        onChange={ (event) => this.setState({ value: event.target.value })}
        multiLine
        fullWidth
      />
    )
  }
}

function mapStep(state) {
  return {
    step: state.makeTripReducer.step
  };
}

export default connect(mapStep)(MakeTripStep2)