import React, { PropTypes } from 'react'
import marked from 'marked'
import axios from 'axios'
import {gitKobe} from './utiles/helper.js'
class Person extends React.Component {
  constructor(){
    super()
    this.state={
      kobe:'',
    }
  }
  componentDidMount(){
    gitKobe(this.props.params.title)
    .then( (res)=>{
    console.log(res)
    this.setState({
      kobe:res.getKobe
    })
}
      )

  }
  render () {
    let abc=marked(this.state.kobe)
      return(

        <div>
          <div dangerouslySetInnerHTML={{__html: abc}} />
        </div>
      )
  }
}

export default Person;
