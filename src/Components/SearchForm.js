import React from "react";
import PlacesAutocomplete, {geocodeByAddress} from "react-places-autocomplete";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";


class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {address: ''}
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

            // console.log(`Yay! got latitude and longitude for ${address}`, {lat, lng})
            // console.log(this.startDate, this.endDate)

            const startDate = this.startDate
            const endDate = this.endDate
            const obj = {
                address,
                lat,
                lng,
                startDate,
                endDate
            }

            console.log(obj)

            fetch('http://localhost:3000/api/v1/test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(function (response) {
                return response.json()
            }).then(function (json) {
                console.log('parsed json', json)
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })

        })
    }
    setStartDate = (event, date) => this.startDate = date.toISOString().slice(0,10);

    setEndDate = (event, date) => this.endDate = date.toISOString().slice(0,10);


    render() {
        const myStyles = {
            input: {width: '100%', paddingTop: '15px', border: 'none', outline: 'none'},
            autocompleteContainer: {backgroundColor: 'green'},
            autocompleteItem: {color: 'black'},
            autocompleteItemActive: {color: 'blue'}
        }

        const cssClasses = {
            root: 'col-sm',
            autocompleteContainer: 'my-autocomplete-container'
        }

        const datePickerStyle = {
            borderStyle: 'groove',
            paddingTop:'5px'
        }



        return (
            <form onSubmit={this.handleFormSubmit} style={{marginTop:'10px'}}>
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
                                        textFieldStyle={{width: '100%'}}/>
                        </MuiThemeProvider>
                        <MuiThemeProvider>
                            <DatePicker hintText="End Date" container="inline"
                                        onChange={this.setEndDate} autoOk={true} className="col-sm"
                                        textFieldStyle={{width: '100%'}}/>
                        </MuiThemeProvider>
                        <div className="col-sm">
                            <MuiThemeProvider>
                                <RaisedButton type='submit' label="Search" style={{marginTop:'5px'}}/>
                            </MuiThemeProvider>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchForm