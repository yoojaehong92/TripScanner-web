/**
 * Created by jaehong on 2017. 5. 25..
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import S from 'shorti'

class ImageUploadWidget extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    formContext: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      imageData: null
    }
    this.onChange = this.onChange.bind(this)
  }
  componentWillMount() {
    this.setState({ imageData: this.props.formContext.imageMedium })
  }
  onChange(event) {
    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    const fileName = event.target.files[0].name

    reader.onload = () => {
      const index = reader.result.indexOf(';')
      const image = reader.result.slice(0, index) +
        ';name=' + fileName + reader.result.slice(index)
      this.setState({ imageData: image })
      this.props.onChange(image)
    }
  }
  render() {
    return (
      <div className="row form-group">
        <div className="col-sm" >
          <img src= {this.state.imageData} alt={this.state.imageData} height="100" width="100"/>
        </div>
        <div className="col-sm">
          <RaisedButton
            containerElement="label"
            label="Upload"
          >
            <input type="file" style={S('hidden')} onChange={ this.onChange }/>
          </RaisedButton>
        </div>
        <div style={S('clearfix')}/>
      </div>
    );
  }
}

export default ImageUploadWidget;