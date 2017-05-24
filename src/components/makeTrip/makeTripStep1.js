/**
 * Created by jaehong on 2017. 5. 24..
 */
import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import S from 'shorti';
import DatePicker from 'material-ui/DatePicker';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAddress } from '../../actions/makeTripAction'

class MakeTripStep1 extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    step: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      checkIn: null,
      checkOut: null
    };

    this.onChangeAddress = (address) => this.setState({ address });
    this.onChangeCheckIn = (event, date) => {
      this.setState({ checkIn: date });
    };
    this.onChangeCheckOut = (event, date) => {
      this.setState({ checkOut: date });
    };
  }
  componentWillUnmount() {
    const { address, checkIn, checkOut } = this.state;
    const toLocalDateString = (date) => {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    };
    this.props.dispatch(setAddress({
      address,
      'check_in': toLocalDateString(checkIn),
      'check_out': toLocalDateString(checkOut)
    }))
  }
  render() {
    const rowStyle = {
      borderStyle: 'groove',
      padding: '5px 10px'
    };

    const inputProps = {
      value: this.state.address,
      onChange: this.onChangeAddress,
      placeholder: 'Search Places...'
    };

    const cssClasses = {
      root: '',
      input: 'form-control',
      autocompleteContainer: 'my-autocomplete-container'
    };

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div>
        <strong>{ formattedSuggestion.mainText }</strong>{' '}
        <small>{ formattedSuggestion.secondaryText }</small>
      </div>
    )

    return (
      <div className="container">
        <div className="row form-group" style={ rowStyle }>
          <div className="col-sm" style={ S('w-100p pt-5') }>
            <PlacesAutocomplete
              inputProps={ inputProps }
              autocompleteItem={ AutocompleteItem }
              classNames={ cssClasses }
            />
          </div>
          <div className="col-sm" style={ S('w-100p') }>
            <DatePicker hintText="Check In"
              onChange={ this.onChangeCheckIn }
              autoOk
              textFieldStyle={ S('w-100p') }
              maxDate={ this.state.checkOut }
            />
          </div>
          <div className="col-sm" style={ S('w-100p') }>
            <DatePicker hintText="Check Out"
              onChange={ this.onChangeCheckOut }
              autoOk
              textFieldStyle={ S('w-100p') }
              minDate={ this.state.checkIn }
            />
          </div>
        </div>
      </div>
    )
  }
}

function mapStep(state) {
  return {
    step: state.makeTripReducer.step
  };
}

export default connect(mapStep)(MakeTripStep1);
