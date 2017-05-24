/**
 * Created by jaehong on 2017. 5. 24..
 */
import React from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CreateTripStep1 from '../components/makeTrip/createTripStep1';
import CreateTripStep2 from '../components/makeTrip/createTripStep2';
import CreateTripStep3 from '../components/makeTrip/createTripStep3'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { nextStep, prevStep, fetchMakeTrip } from '../actions/makeTripAction'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CreateTrip extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    step: PropTypes.number.isRequired,
    trip: PropTypes.object
  };

  constructor(props) {
    super(props)
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <CreateTripStep1/>
      case 1:
        return <CreateTripStep2/>
      case 2:
        return <CreateTripStep3/>
      case 3:
        return 'Host a Trip';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  getStepLabel(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings'
      case 1:
        return 'Content';
      case 2:
        return 'Upload Image';
      case 3:
        return 'Finish';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  handleNext = () => {
    this.props.dispatch(nextStep())
    if (this.props.step >= 3) {
      console.log(this.props.trip)
      this.props.dispatch(fetchMakeTrip(JSON.stringify({ trip: this.props.trip })))
    }
  };
  handlePrev = () => {
    if (this.props.step > 0)
      this.props.dispatch(prevStep())
  };

  render() {
    const { step } = this.props;
    return (
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
        <Stepper activeStep={step}>
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
          </Step>
          <Step>
            <StepLabel>Content</StepLabel>
          </Step>
          <Step>
            <StepLabel>Image</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
        </Stepper>
        <Card>
          <CardTitle title={ this.getStepLabel(step) }/>
          <CardText>
            <div>
              { step > 3 ? (
                  <p>
                    made a trip
                  </p>
                ) :
                  <div>
                    {
                      this.getStepContent(step)
                    }
                  </div>
                }
            </div>
          </CardText>
          { step > 3 ?
            null :
          <CardActions>
            <FlatButton
              label="Back"
              disabled={step === 0}
              onTouchTap={this.handlePrev}
              style={{ marginRight: 12 }}
            />
            <RaisedButton
              label={ step >= 3 ? 'Host' : 'Next'}
              primary
              onTouchTap={this.handleNext}
            />
          </CardActions>
          }
        </Card>
      </div>
    );
  }
}
function mapStep(state) {
  return {
    step: state.makeTripReducer.step,
    trip: state.makeTripReducer.trip
  }
}
export default connect(mapStep)(CreateTrip);