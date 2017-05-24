/**
 * Created by jaehong on 2017. 5. 24..
 */

/**
 * Created by jaehong on 2017. 5. 24..
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const CreateTripStep3 = () => {
  return (
    <RaisedButton
      containerElement="label" // <-- Just add me!
      label="Upload"
    >
      <input type="file" style={{ display: 'none' }} />
    </RaisedButton>
  )
}

export default CreateTripStep3