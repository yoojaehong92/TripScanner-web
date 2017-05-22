import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import S from 'shorti'
import Form from 'react-jsonschema-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchProfileEdit } from '../actions/userAction';

const schema = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      title: 'User',
      properties: {
        date_of_birth: { type: 'string', title: 'Birth' },
        gender: {
          type: 'string',
          title: 'Gender',
          enum: [
            'male',
            'female'
          ] },
        mobile_number: { type: 'string', title: 'Mobile Number' },
        locale: { type: 'string' },
        country: { type: 'string' },
        introduction: { type: 'string' },
        school: { type: 'string' },
        job: { type: 'string' }
      }
    }
  }
}
const uiSchema = {
  user: {
    date_of_birth: { 'ui:widget': 'date' },
    introduction: { 'ui:widget': 'textarea' }
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
            formData={{ user: this.props.user }}
            onSubmit={({ formData }) =>
              dispatch(fetchProfileEdit(JSON.stringify(formData)))
              .then(dispatch(push('/')))
            }
          />
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
