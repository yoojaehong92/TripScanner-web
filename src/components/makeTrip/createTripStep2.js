/**
 * Created by jaehong on 2017. 5. 24..
 */
import React from 'react';
import TextField from 'material-ui/TextField';

const CreateTripStep2 = () => {
  return (
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      rows={5}
      multiLine
      fullWidth
    />
  )
}

export default CreateTripStep2