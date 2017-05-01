import React from "react";
import PlacesAutocomplete, {geocodeByAddress} from "react-places-autocomplete";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: ''}
        this.startDate = null
        this.endDate = null
        this.onChange = (address) => this.setState({address})

    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        const {address} = this.state

        geocodeByAddress(address, (err, {lat, lng}) => {
            if (err) {
                console.log('Oh no!', err)
            }

            console.log(`Yay! got latitude and longitude for ${address}`, {lat, lng})
            console.log(this.startDate, this.endDate)
        })
    }

    setStartDate = (event, date) => this.startDate = date


    setEndDate = (event, date) => this.endDate = date


    render() {
        const myStyles = {
            input: {width: '100%', padding: '20px',},
            autocompleteContainer: {backgroundColor: 'green'},
            autocompleteItem: {color: 'black'},
            autocompleteItemActive: {color: 'blue'}
        }

        const cssClasses = {
            root: 'col-sm',
            autocompleteContainer: 'my-autocomplete-container'
        }

        const datePickerStyle = {
            'border-style': 'groove'
        }
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="container">
                    <div className="row" style={datePickerStyle}>
                        <PlacesAutocomplete
                            value={this.state.address}
                            onChange={this.onChange}
                            styles={myStyles}
                            classNames={cssClasses}
                        />
                        <MuiThemeProvider>
                            <DatePicker hintText="Start Date" container="inline"
                                        onChange={this.setStartDate} autoOk={true} className="col-sm"
                                        textFieldStyle={{width: '100%'}} style={datePickerStyle}/>
                        </MuiThemeProvider>
                        <MuiThemeProvider>
                            <DatePicker hintText="End Date" container="inline"
                                        onChange={this.setEndDate} autoOk={true} className="col-sm"
                                        textFieldStyle={{width: '100%'}} style={datePickerStyle}/>
                        </MuiThemeProvider>
                        <MuiThemeProvider>
                            <RaisedButton type='submit' label="Search" className="col-sm"/>
                        </MuiThemeProvider>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search