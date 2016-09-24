import {Router ,Route ,hashHistory , IndexRoute} from "react-router"
import App from './App.js';
import React from "react"
import Work from './Work.js';
import Blog from './Blog.js';
import Home from './Home.js';
import About from './About.js';
import Person from './person.js'
class Routers extends React.Component {
  render () {
       return(
         <Router history={hashHistory}>
            <Route path='/' component={App} >
                <IndexRoute component={Home} />
                <Route path='/about' component={About} />
                <Route path='/work' component={Work} />
                <Route path='/blog' component={Blog} />
                <Route path='/person/:title' component={Person} />
            </Route>
         </Router>
       )
  }
}

export default Routers;
