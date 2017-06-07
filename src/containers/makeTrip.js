/**
 * Created by jaehong on 2017. 5. 24..
 */
import React from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MakeTripStep1 from '../components/makeTrip/makeTripStep1';
import MakeTripStep2 from '../components/makeTrip/makeTripStep2';
import MakeTripStep3 from '../components/makeTrip/makeTripStep3'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { nextStep, prevStep, fetchMakeTrip } from '../actions/makeTripAction'
import { fetchHostedTrip } from '../actions/tripsAction'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import S from 'shorti'
import { push } from 'react-router-redux';
import CircularProgress from 'material-ui/CircularProgress';

class MakeTrip extends React.Component {
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
        return <MakeTripStep1/>
      case 1:
        return <MakeTripStep2/>
      case 2:
        return <MakeTripStep3/>
      case 3:
        return '동행을 생성하시겠습니까?';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  getStepLabel(stepIndex) {
    switch (stepIndex) {
      case 0:
        return '장소 및 기간 설정'
      case 1:
        return '동행 설명';
      case 2:
        return '이미지 업로드';
      case 3:
        return '완료';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  handleNext = () => {
    const { dispatch, step } = this.props
    dispatch(nextStep())
    if (step >= 3) {
      dispatch(fetchMakeTrip(JSON.stringify({ trip: this.props.trip })))
        .then(() => dispatch(fetchHostedTrip()))
        .then(() => dispatch(push('/trips_index')))
    }
  };
  handlePrev = () => {
    if (this.props.step > 0)
      this.props.dispatch(prevStep())
  };

  render() {
    const { step } = this.props;
    return (
      <div style={S('w-100p maxw-700 center-block')}>
        {
          this.props.step >= 4 ?
            <div className="text-center">
              <h3>
                Please wait...
              </h3>
              <CircularProgress size={80} thickness={5}/>
            </div> :
            <div>
              <Stepper activeStep={step}>
                <Step>
                  <StepLabel>{this.getStepLabel(0)}</StepLabel>
                </Step>
                <Step>
                  <StepLabel>{this.getStepLabel(1)}</StepLabel>
                </Step>
                <Step>
                  <StepLabel>{this.getStepLabel(2)}</StepLabel>
                </Step>
                <Step>
                  <StepLabel>{this.getStepLabel(3)}</StepLabel>
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
        }
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
export default connect(mapStep)(MakeTrip);