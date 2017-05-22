import React from 'react';
import Form from 'react-jsonschema-form';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import S from 'shorti';
import { connect } from 'react-redux';
import { fetchSignUp } from '../actions/userAction';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

const schema = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      title: 'User',
      properties: {
        name: { type: 'string', title: 'Name' },
        email: { type: 'string', title: 'Email' },
        gender: {
          type: 'string',
          title: 'Gender',
          enum: [
            'male',
            'female'
          ] },
        password: { type: 'string', title: 'Password' },
        password_confirmation: { type: 'string', title: 'Password Confirm' }
      }
    }
  }
}
const uiSchema = {
  user: {
    gender: {
      'ui:placeholder': 'Gender'
    },
    email: {
      'ui:widget': 'email'
    },
    password: {
      'ui:widget': 'password'
    },
    password_confirmation: {
      'ui:widget': 'password'
    }
  }
}

class SignUpForm extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    hasError: PropTypes.bool,
    error: PropTypes.string
  };
  constructor(props) {
    super(props)
  }

  onSubmit = ({ formData }) => {
    const { dispatch } = this.props
    dispatch(fetchSignUp(JSON.stringify(formData)))
  }
  validate(formData, errors) {
    if (formData.user.password !== formData.user.password_confirmation)
      errors.user.password_confirmation.addError('Passwords don\'t match');
    return errors;
  }
  render() {
    if (this.props.user)
      this.props.dispatch(push('/'))
    return (
      <Card style={S('w-50p center-block color-eee')}>
        <CardTitle title="SignUp" titleStyle={S('text-center')} style={S('bg-eee')}/>
        <CardText>
          <Form encType="application/json"
            schema={ schema }
            uiSchema={ uiSchema }
            onSubmit={ this.onSubmit }
            validate={ this.validate }
            liveValidate
          >
            <div>
              {
                this.props.hasError ?
                  <p className="card-text"
                    style={S('color-f00')}
                  >
                    { this.props.error }
                  </p> :
                  <p/>
              }
              <RaisedButton
                type="submit"
                label="Sign Up"
                primary
                style={S('mr-10')}
              />
            </div>
          </Form>
        </CardText>
      </Card>
    )
  }
}

function mapCurrentUser(state) {
  return {
    hasError: state.currentUserReducer.hasError,
    user: state.currentUserReducer.user,
    error: state.currentUserReducer.error
  };
}

export default connect(mapCurrentUser)(SignUpForm);
