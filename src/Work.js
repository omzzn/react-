import React, { PropTypes } from 'react'
import Card from "./card.js"
import {gitkobe} from "./utiles/helper.js"
class Work extends React.Component {
  constructor(){
    super()
    this.state={
      value:[],
      wait:true
    }
  }
  componentDidMount(){
    gitkobe()
    .then((res)=>{
      this.setState({
        value:res.getkobe,
        wait:false
      })
    })
    console.log(this.state.value)
  }
  render () {
    let card=this.state.value.map(function(item,index){
      return <Card {...item} key={index}/>
    })
     return(
       <div className="content-work">
          {this.state.wait ? "请稍等" : card}
       </div>
     )
  }
}

export default Work;
