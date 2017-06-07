/**
 * Created by huy on 2017-06-07.
 */


import * as React from 'react';
import { CircularProgress } from 'material-ui';

export default class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.spinner = this.spinner.bind(this);
  }

  spinner() {
    return (
      <div className="text-center">
        <h3>
          Please wait...
        </h3>
        <div>
          <CircularProgress size={80} thickness={5} />
        </div>
      </div>
    )
  }
}