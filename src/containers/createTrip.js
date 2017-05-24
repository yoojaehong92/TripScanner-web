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

class CreateTrip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      finished: false,
      stepIndex: 0,
      trip: null
    };
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
        return 'Finish Hosting Trip';
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
  handleNext= () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3
    });
  };
  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0)
      this.setState({ stepIndex: stepIndex - 1 });
  };

  render() {
    const { finished, stepIndex } = this.state;
    return (
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
        <Stepper activeStep={stepIndex}>
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
          <CardTitle title={ this.getStepLabel(stepIndex) }/>
          <CardText>
            <div>
              {finished ? (
                  <p>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        this.setState({ stepIndex: 0, finished: false });
                      }}
                    >
                      Click here
                    </a> to reset the example.
                  </p>
                ) :
                  <div>
                    {
                      this.getStepContent(stepIndex)
                    }
                  </div>
                }
            </div>
          </CardText>
          { finished ?
            null :
          <CardActions>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{ marginRight: 12 }}
            />
            <RaisedButton
              label={stepIndex === 3 ? 'Finish' : 'Next'}
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
export default CreateTrip