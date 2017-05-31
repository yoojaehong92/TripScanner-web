/**
 * Created by jaehong on 2017. 5. 29..
 */

import { CardHeader, CardText } from 'material-ui';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import ToggleStarHalf from 'material-ui/svg-icons/toggle/star-half';
import PropTypes from 'prop-types';
import { cyan500 } from 'material-ui/styles/colors'
import React from 'react'
import { connect } from 'react-redux';

class ReviewListItem extends React.Component {
  static propTypes = {
    review: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      rate, updated_at, content, owner
    } = this.props.review;

    const contentToHtml = content ? content.split('\n')
        .map((line, index) => {
          return (<span key={ index }>{ line }<br/></span>)
        }) : '';
    const rateToHtml = []
    for (let i = 0; i < 5; i++) {
      if ((rate - i) >= 1)
        rateToHtml.push(<ToggleStar key={ i } color={ cyan500 }/>);
      else if ((rate - i) === 0.5)
        rateToHtml.push(<ToggleStarHalf key={ i } color={ cyan500 }/>);
      else
        rateToHtml.push(<ToggleStarBorder key={ i } color={ cyan500 }/>);
    }

    return (
      <div>
        <CardHeader
          title={ owner.name }
          subtitle={
              <span>{ `${updated_at}` }</span>
          }
          children={ rateToHtml }
          avatar={ owner.image_thumb }
        />
        <CardText>
          { contentToHtml }
        </CardText>
      </div>
    )
  }
}

export default connect()(ReviewListItem);