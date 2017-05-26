import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import S from 'shorti'
import Form from 'react-jsonschema-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchProfileEdit } from '../actions/currentUserAction';
import RaisedButton from 'material-ui/RaisedButton';
import ImageUploadWidget from './imageUploadWidget';

const schema = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      title: 'User',
      properties: {
        image_data: {
          type: 'string',
          format: 'data-url',
          title: 'Profile Image'
        },
        date_of_birth: { type: 'string', title: 'Birth' },
        gender: {
          type: 'string',
          title: 'Gender',
          enum: [
            'male',
            'female'
          ] },
        mobile_number: { type: 'string', title: 'Mobile Number' },
        locale: { type: 'string', title: 'Locale' },
        country: { type: 'string', title: 'Country' },
        introduction: { type: 'string', title: 'Introduction' },
        school: { type: 'string', title: 'School' },
        job: { type: 'string', title: 'Job' }
      }
    }
  }
}

const uiSchema = {
  user: {
    gender: {
      'ui:placeholder': 'Gender'
    },
    date_of_birth: { 'ui:widget': 'date' },
    introduction: { 'ui:widget': 'textarea' },
    image_data: { 'ui:widget': 'imageUploader' }
  }
}
class ProfileEditForm extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props)
  }
  render() {
    const { dispatch } = this.props
    if (!this.props.user)
      dispatch(push('/'))

    return (
      <Card style={S('w-50p center-block')}>
        <CardTitle title="Profile" titleStyle={S('text-center')} style={S('bg-eee')}/>
        <CardText>
          <Form
            schema={ schema }
            uiSchema={ uiSchema }
            formData={
              this.props.user ? { user: this.props.user } : { }
            }
            onSubmit={({ formData }) =>
              dispatch(fetchProfileEdit(JSON.stringify(formData)))
                .then(dispatch(push('/')))
            }
            widgets={{ imageUploader: ImageUploadWidget }}
            formContext={{ imageMedium: this.props.user.image_medium }}
          >
            <RaisedButton
              type="submit"
              label="Submit"
              primary
            />
          </Form>
        </CardText>
      </Card>
    )
  }
}

function mapCurrentUser(state) {
  return {
    user: state.currentUserReducer.user
  };
}
export default connect(mapCurrentUser)(ProfileEditForm);