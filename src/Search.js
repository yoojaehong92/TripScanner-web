import React from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';


const divStyle = {
    float:'left'
}
const style = {
    margin:'auto'
}

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: '여행지' }
        this.onChange = (address) => this.setState({ address })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        const { address } = this.state

        geocodeByAddress(address,  (err, { lat, lng }) => {
            if (err) { console.log('Oh no!', err) }

            console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng })
        })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <PlacesAutocomplete
                                value={this.state.address}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col">
                            <MuiThemeProvider>
                                <DatePicker hintText="Portrait Inline Dialog" container="inline" />
                            </MuiThemeProvider>
                        </div>
                        <div className="col">
                            <MuiThemeProvider>
                                <DatePicker hintText="Landscape Inline Dialog" container="inline" />
                            </MuiThemeProvider>
                        </div>
                        <div className="col" >
                            <MuiThemeProvider>
                                <RaisedButton type='submit' label="Default" />
                            </MuiThemeProvider>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search