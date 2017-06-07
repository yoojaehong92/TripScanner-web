import React from 'react';
import Form from 'react-jsonschema-form';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import S from 'shorti';
import { connect } from 'react-redux';
import { fetchSignUp } from '../actions/currentUserAction';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

const schema = {
  type: 'object',
  properties: {
    user: {
      required: [
        'name',
        'email',
        'gender',
        'password'
      ],
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
        password: { type: 'string', title: 'Password', minLength: 6 },
        password_confirmation: { type: 'string', title: 'Password Confirm', minLength: 6 }
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
    error: PropTypes.object
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
    return errors
  }

  render() {
    let errors = ''
    if (this.props.hasError) {
      Object.keys(this.props.error).forEach((element) => {
        Object.keys(this.props.error[element]).forEach((x) => {
          errors += element + ' ' + this.props.error[element][x] + '\n\n'
        })
      })
    }
    if (this.props.user)
      this.props.dispatch(push('/'))
    return (
      <div>
        {
          this.props.hasError ?
          <Card style={S('center-block color-933 mb-20')}>
            <CardTitle title="Errors"
              titleStyle={S('text-center color-933')} style={S('bg-eaa')}
            />
            <CardText style={S('color-b44')}>
              { errors }
            </CardText>
          </Card> :
          <div/>
        }
        <Card style={S('center-block')}>
          <CardTitle title="SignUp" titleStyle={S('text-center')} style={S('bg-eee')}/>
          <CardText>
            <Form encType="application/json"
              schema={ schema }
              uiSchema={ uiSchema }
              onSubmit={ this.onSubmit }
              validate={ this. validate }
              showErrorList={ false }
              liveValidate
            >
              <div>
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
      </div>
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
