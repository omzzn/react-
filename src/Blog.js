import React, { PropTypes } from 'react'
import one from "./../images/gaobie.jpg"
import two from "./../images/two.jpg"
import three from "./../images/three.jpg"
class Blog extends React.Component {
  constructor(){
    super()
    this.state={
      num:0,
      string:'',
      index:0,
      show:true
    }
  }
  componentDidMount(){
    this.add("传奇谢幕")
    this.set()
    window.onresize= this.set.bind(this)
  }
  tick(){
    this.setState({
      num:this.state.num +1
    })
  }

  add(str){

    let length=str.length
    this.go=setInterval(()=>
      {
      if(this.state.index<length){
        console.log(1)
      this.setState({
        string:this.state.string+str.charAt(this.state.index),
        index: this.state.index+1
      })

    }else{
      clearInterval(this.go)

    }},1000)
  }
  pageleft(){
    this.setState({
      num:this.state.num>0 ? this.state.num-1 : 0
    })
  }
  pageright(){
    this.setState({
      num:this.state.num<2 ? this.state.num+1 : 2
    })
  }
  set(){
    this.setState({
      show: window.innerWidth>760 ? false : true
    })
  }

  aaa(){
    if(this.state.num<2){
      cno
      this.setState({
        num:this.state.num+1
      })
    }else {
      this.setState({
        num:0
      })
    }
  }
  componentWillUnmount(){
    clearInterval(this.go)
  }

  render () {
    let x=this.state.show ?  80 : 60
    let Left=this.state.num*x
    let style={
      box:{
        width:this.state.show ? '80vw' : '60vw',
        height:"350px",
        margin:"0 auto",
        overflow:"hidden",
        position:"relative"

      },
      img:{
        maxWidth:this.state.show ? '80vw' : '60vw',
        minWidth:this.state.show ? '80vw' : '60vw',
        height:"350px"

      },
      wrap:{
        width:this.state.show ? '240vw' : '180vw',
        height:"350px",
        marginLeft:`-${Left}vw`,
        transition:"all 2s"

      },
      left:{
        fontSize:"30px",
        color:"#fff",
        position:"absolute",
        left:"0",
        top:"40%",
        cursor:"pointer"
      },
      right:{
        fontSize:"30px",
        color:"#fff",
        position:"absolute",
        right:"0",
        top:"40%",
        cursor:"pointer"
      },
      main:{
        flexGrow:1,
        backgroundColor:"#fff",
        opacity:"1",

      },
      h3:{
        textAlign:"center",
        color:"#212121",
        fontWeight:"bold"
      },
      h2:{
        color:"#6A1B9A",
        textShadow:"2px 2px 3px #000",
        fontWeight:"bold",
        textAlign:"center",
        margin:"30px"
      }

    }
     return(
      <div style={style.main}>
         <h3 style={style.h3} id="h3">{this.state.string}</h3>
         <div style={style.box}>
           <span style={style.left} onClick={this.pageleft.bind(this)}> &lt;</span>
           <span style={style.right} onClick={this.pageright.bind(this)}> &gt;</span>
           <div style={style.wrap}>
             <img src={one}  style={style.img}/>
             <img src={two}  style={style.img}/>
             <img src={three}  style={style.img}/>
          </div>


        </div>
        <h2 style={style.h2}>就算有下一个科比，我也没有青春去追了</h2>
      </div>

     )
  }
}

export default Blog;
