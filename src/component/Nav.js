import React, { PropTypes } from 'react'
import {Link } from "react-router"


class Nav extends React.Component {

  render () {
    let aa={display:"none"}
     return(
    <div>
      <div className='sideNav'>
        <h3>Kobe_{this.props.title}</h3>
        <Link to="/" activeStyle={{color:"#283593"}} onlyActiveOnIndex={true}>
        <span className="glyphicon glyphicon-home"></span>
        Home</Link>
        <Link to="/about" activeStyle={{color:"#283593"}}>
        <span className="glyphicon glyphicon-user"></span>
        About</Link>
        <Link to="/blog" activeStyle={{color:"#283593"}}>
        <span className="glyphicon glyphicon-book"></span>
        Blog</Link>
        <Link to="/work" activeStyle={{color:"#283593"}}>
        <span className="glyphicon glyphicon-search"></span>
        Honor</Link>

      </div>
    </div>
     )
  }
}

export default Nav;
