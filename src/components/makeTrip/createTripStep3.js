/**
 * Created by jaehong on 2017. 5. 24..
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTripImage } from '../../actions/makeTripAction'


class CreateTripStep3 extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    step: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
    this.onChange = this.onChange.bind(this)
  }
  componentWillUnmount() {
    this.props.dispatch(setTripImage({ 'image_data': this.state.image }))
  }

  onChange(event) {
    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    const fileName = event.target.files[0].name
    reader.onload = () => {
      const index = reader.result.indexOf(';')

      this.setState({
        image: reader.result.slice(0, index) +
        ';name=' + fileName + reader.result.slice(index, )
      })
    }
  }
  render() {
    return (
      <RaisedButton
        containerElement="label" // <-- Just add me!
        label="Upload"
      >
        <input type="file" style={{ display: 'none' }}
          onChange={ this.onChange }
        />
      </RaisedButton>
    )
  }
}

export default connect()(CreateTripStep3);