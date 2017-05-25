/**
 * Created by jaehong on 2017. 5. 25..
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

class ImageUploadWidget extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      imageData: null
    }
    this.onChange = this.onChange.bind(this)
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
      <div className="form-group field field-string">
        <div style={{ float: 'left' }}>
          <img src= {this.state.imageData} alt={this.state.imageData} height="100" width="100"/>
        </div>
        <div>
          <RaisedButton
            containerElement="label"
            label="Upload"
          >
            <input type="file" style={{ display: 'none' }} onChange={ this.onChange }/>
          </RaisedButton>
        </div>
        <div style={{ clear: 'both' }}/>
      </div>
    );
  }
}

export default ImageUploadWidget;