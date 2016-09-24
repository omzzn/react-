import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class Home extends React.Component {

  render () {

     return(
       <div className="home-contain">
          <div className="home-wrap">
              <h3>My <span>Idol</span></h3>
              <p> NBA SuperStar</p>
              <Link to="/about" className="btn btn-primary">简历介绍</Link>
          </div>
       </div>
     )
  }
}

export default Home;
