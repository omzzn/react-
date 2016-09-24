import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class Card1 extends React.Component {
  getChildContext() {
   return {muiTheme: getMuiTheme()};
 }
 constructor(props) {
     super(props);
   }


   render() {
      let font={
        fontFamily:"微软雅黑"

      }
      let div={
        margin:"10px 0",
        borderShadow:"rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px",

      }
     return (
       <div style={div} className="col-sm-6">
       <Card>

       <CardMedia
         overlay={<CardTitle title={this.props.title} subtitle={this.props.index} />}
       >
         <img src={this.props.img} />
       </CardMedia>
       <CardTitle title={this.props.card}  />
       <CardText style={font}>
        {this.props.content}
       </CardText>

     </Card>
     </div>
     );
   }
}
Card1.childContextTypes = {
  muiTheme:React.PropTypes.object.isRequired,
};
export default Card1;
