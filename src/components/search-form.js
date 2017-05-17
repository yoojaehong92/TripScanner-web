import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress } from 'react-places-autocomplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';


class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.startDate = null
    this.endDate = null
    this.onChange = (address) => this.setState({ address })
  }

  setStartDate = (event, date) =>
    this.startDate = date.toISOString().slice(0, 10);

  setEndDate = (event, date) =>
    this.endDate = date.toISOString().slice(0, 10);

  handleFormSubmit = (event) => {
    event.preventDefault()

    const { address } = this.state

    geocodeByAddress(address, (err, { lat, lng }) => {
      const startDate = this.startDate
      const endDate = this.endDate
      const obj = {
        address,
        lat,
        lng,
        startDate,
        endDate
      }

      fetch('http://localhost:3000/api/v1/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
    })
  }

  render() {
    const myStyles = {
      input: {
        width: '100%',
        paddingTop: '15px',
        border: 'none',
        outline: 'none'
      },
      autocompleteContainer: { backgroundColor: 'green' },
      autocompleteItem: { color: 'black' },
      autocompleteItemActive: { color: 'blue' }
    }

    const cssClasses = {
      root: 'col-sm',
      autocompleteContainer: 'my-autocomplete-container'
    }

    const datePickerStyle = {
      borderStyle: 'groove',
      paddingTop: '5px'
    }

    return (
      <form onSubmit={ this.handleFormSubmit } style={ { marginTop: '10px' } }>
        <div className="container">
          <div className="row" style={ datePickerStyle }>
            <PlacesAutocomplete
              value={ this.state.address }
              onChange={ this.onChange }
              styles={ myStyles }
              classNames={ cssClasses }

            />
            <MuiThemeProvider>
              <DatePicker hintText="Start Date"
                container="inline"
                onChange={ this.setStartDate }
                autoOk
                className="col-sm"
                textFieldStyle={ { width: '100%' } }
              />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <DatePicker hintText="End Date"
                container="inline"
                onChange={ this.setEndDate }
                autoOk
                className="col-sm"
                textFieldStyle={ { width: '100%' } }
              />
            </MuiThemeProvider>
            <div className="col-sm">
                <MuiThemeProvider>
                    <RaisedButton
                      type="submit"
                      label="Search"
                      style={ { marginTop: '5px' } }
                    />
                </MuiThemeProvider>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchForm
