import React, { PropTypes } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AAA extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
})
    return(
      <div>
       <AppBar title="My AppBar"  muiTheme={muiTheme}/>
      </div>
    )
  }
}
AAA.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
export default AAA;
