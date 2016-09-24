import React, { PropTypes } from 'react'
import {hashHistory} from "react-router"
class Card extends React.Component {
  handClick(){
    let url=this.props.url
  hashHistory.push(`/person/${url}`)
  }
  render () {
    let style={
      row:{


      }
    }
      return(
        <div className="row" style={style.row}>
          <div className="col-sm-12 col-md-12">
          <h3 className="text-center">{this.props.title}</h3>
            <div className="thumbnail">
                <img src={this.props.img}/>
                <div className="caption">

                  <p>{this.props.desc}</p>
                  <p><a  className="btn btn-default" role="button" onClick={this.handClick.bind(this)}>阅读更多</a> </p>
                </div>
              </div>
            </div>
          </div>
            )
  }
}

export default Card;
