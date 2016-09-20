import React, { PropTypes } from 'react'
import {seachgit} from "./utiles/helper.js"
class About extends React.Component {
  constructor(){
    super()
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
       seachgit("omzzn")
       .then( (data) =>{
         this.setState({
           data:data.data,
           wait:false
         })
         console.log(data.data)

       })
  }
  render () {
    let person=(
      <div>
        <div class="page-header">
            <h1>这是我的个人简介</h1>
        </div>
        <img src={this.state.data.avatar_url} />
        <h3><span className="label label-primary">姓名:</span>{this.state.data.name}</h3>
        <p>邮箱：{this.state.data.email}</p>
      </div>
    )
     return(
       <div>
            {this.state.wait ? "请稍等": person}
       </div>
     )
  }
}

export default About;
