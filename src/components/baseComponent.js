/**
 * Created by huy on 2017-06-07.
 */


import * as React from 'react';
import { CircularProgress } from 'material-ui';
import ActionDescription from 'material-ui/svg-icons/action/description'
import { cyan500 } from 'material-ui/styles/colors';
import S from 'shorti'

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

  empty(message) {
    return (
      <div style={S('text-center')}>
        <ActionDescription color={ cyan500 } style={S('w-120 h-120')}/>
        <p> { message } </p>
      </div>
    )
  }
}