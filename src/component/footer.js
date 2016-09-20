import React, { PropTypes } from 'react'
import {Link } from "react-router"

class Footer extends React.Component {
  render () {
      return(
        <div className="content-footer">
            <Link to="/" activeStyle={{color:"#283593"}} onlyActiveOnIndex={true}>
            <span className="glyphicon glyphicon-home"></span><br/>
            Home</Link>
            <Link to="/about" activeStyle={{color:"#283593"}}>
            <span className="glyphicon glyphicon-user"></span><br/>
            About</Link>
            <Link to="/blog" activeStyle={{color:"#283593"}}>
            <span className="glyphicon glyphicon-book"></span><br/>
            Blog</Link>
            <Link to="/work" activeStyle={{color:"#283593"}}>
            <span className="glyphicon glyphicon-search"></span><br/>
            Work</Link>
        </div>
      )
  }
}

export default Footer;
