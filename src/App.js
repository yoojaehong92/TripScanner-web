import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const App = () => (
    <MuiThemeProvider>
        <RaisedButton label="App" />
    </MuiThemeProvider>
);


export default App;