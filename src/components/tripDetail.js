/**
 * Created by huy on 2017-05-23.
 */

import {
  Card, CardActions, CardHeader, CardMedia,
  CardText, CardTitle, FlatButton, Divider
} from 'material-ui';
import PropTypes from 'prop-types';
import * as React from 'react';
import UserInfoChips from './userInfoChips';
import { connect } from 'react-redux';

class TripDetail extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    trip: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      check_in, check_out, city, country, image_original, content,
      owner
    } = this.props.trip;
    return (
      <Card>
        <CardHeader
          title={ owner.name }
          subtitle={ owner.email }
          avatar={ owner.image_thumb }
        />
        <CardMedia
          overlay={
            <CardTitle
              title={ `${city}, ${country}` }
              subtitle={ `${check_in} ~ ${check_out}` }
            />
          }
        >
          <img src={ image_original } />
        </CardMedia>
        <UserInfoChips owner={ owner }/>
        <Divider />
        <CardText>
          {
            content.split('\n').map(line => {
              return (<span>{ line }<br/></span>)
            })
          }
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
}

/*
<FlatButton
 label="호스트 정보보기"
 onTouchTap={ () => dispatch(push(`users/${owner.id}`)) }
 />
 <FlatButton label="동행 참여하기" primary />
* */

export default connect()(TripDetail);