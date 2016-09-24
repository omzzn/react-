import React, { PropTypes } from 'react'

class Header extends React.Component {
  handclick(){
    this.context.router.goBack()
  }
  render () {

     return(
       <div>
           <div className="content-header">
                <span  onClick={this.handclick.bind(this)}><span className="glyphicon glyphicon-arrow-left"></span>Back</span>
                <h3 >Kobe_{this.props.title}</h3>
                <span className="glyphicon glyphicon-tint"></span>
           </div>
        </div>
     )
  }
}
Header.contextTypes={
  router:React.PropTypes.object
}
export default Header;
