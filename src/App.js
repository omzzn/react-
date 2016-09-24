import React from 'react';
import Nav from './component/Nav.js'
import Header from './component/header.js'
import Footer from './component/footer.js'
import Navbar from "./component/Nav.js"
class App extends React.Component {
  constructor (){
    super()
    this.state={
      show:false,
      title:"home"
    }
  }
  set(){
    this.setState({
      show: window.innerWidth>760 ? true : false
    })
  }
  componentDidMount(){
    this.set()
    window.onresize= this.set.bind(this)
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive('/',true) ? "Home" :
            this.context.router.isActive('/blog') ? "Blog" :
            this.context.router.isActive('/work') ? "Work" :
            this.context.router.isActive('/about') ? "About" : 'item'

    })
  }
  componentWillReceiveProps(){
        this.setTitle()
  }
  componentWillMount(){
    this.setTitle();
  }
  render () {
    return(
      <div className="content">
        {this.state.show ? <Navbar  title={this.state.title}/> :<Header title={this.state.title}/>}


        <div className="content-main">
          {this.props.children}
        </div>
        {this.state.show ? null :<Footer />}
      </div>
    )
  }
}
App.contextTypes={
  router:React.PropTypes.object
}
export default App;
