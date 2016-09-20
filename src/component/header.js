import React, { PropTypes } from 'react'

class Header extends React.Component {
  render () {

     return(
       <div>
           <div className="content-header">
                <span><span className="glyphicon glyphicon-arrow-left"></span>Back</span>
                <h3 >Hello World</h3>
                <span className="glyphicon glyphicon-tint"></span>
           </div>
        </div>
     )
  }
}

export default Header;
