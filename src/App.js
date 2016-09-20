import React from 'react';
import Nav from './component/Nav.js'
import Header from './component/header.js'
import Footer from './component/footer.js'
import Navbar from "./component/Nav.js"
class App extends React.Component {
  constructor (){
    super()
    this.state={
      show:false
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
  render () {
    return(
      <div className="content">
        {this.state.show ? <Navbar  /> :<Header />}


        <div className="content-main">
          {this.props.children}
        </div>
        {this.state.show ? null :<Footer />}
      </div>
    )
  }
}

export default App;
