import React, { PropTypes } from 'react'
import {seachgit} from "./utiles/helper.js"
import Card from './aaa.js'

class About extends React.Component {
  constructor(){
    super()
    this.state={
      data:{},
      wait:true
    }
  }

render(){
  let value=[{img:"http://odqb3lppp.bkt.clouddn.com/5b98760e0cf3d7ca31932477f11fbe096a63a980.jpg",title:"初入联盟",index:'96届13顺位新秀',card:"生涯前期",content:"１９９６年，未满１８岁的科比直接以高中生身份进入ＮＢＡ，在第１３顺位被夏洛特黄蜂队选中后被交易至洛杉矶湖人队。1９９７年，科比在全明星赛上勇夺扣篮大赛冠军，１８岁的他也成为了ＮＢＡ史上最年轻的“扣篮王”。１９９８年，科比首次入选ＮＢＡ全明星阵容，并成为历史上最年轻的全明星首发球员。同年，他已展现出了联盟顶尖后卫潜质，并与湖人队续签了一份６年７０００万美元的合同。１９９９年，冠军教头菲尔·杰克逊来到湖人执教，在他的调教下，科比当年首次入选ＮＢＡ最佳防守阵容。"},
             {img:"http://img3.cache.netease.com/sports/2010/6/2/20100602104618f25bc.jpg",title:"生涯首冠",index:"逐步迈入超巨",content:"１９９９－２０００赛季，科比虽然在球队中扮演着二号角色，但凭借在西部决赛和总决赛中的关键表现，帮助湖人队自１９８８年后再次获得ＮＢＡ总冠军。２０００－２００１赛季，科比将个人场均得分提高到２８．５分，在季后赛中湖人队以１５胜１负的傲人成绩蝉联ＮＢＡ总冠军。２００１－２００２赛季，科比第一次入选ＮＢＡ最佳阵容第一阵容，洛杉矶湖人队也再次夺冠，科比成为最年轻的拿下三次总冠军的球员"},
             {img:"http://odqb3lppp.bkt.clouddn.com/thumbnail_400_400.jpg",title:"孤胆英雄",index:"独自带队",content:"２００２－２００３赛季，科比创造了连续９场比赛得分４０＋纪录，整个２００３年２月场均得到４０．６分。2006年１月２２日，科比在对阵多伦多猛龙队的比赛中得到职业生涯最高的８１分，成为ＮＢＡ历史单场第二高分，仅次于张伯伦在１９６２年创造的单场１００分纪录。２００５－２００６赛季，科比首次摘得ＮＢＡ得分王，场均得分３５．４"},
             {img:"http://odqb3lppp.bkt.clouddn.com/two.jpg",title:"巅峰时刻",index:"万王之王",content:"２００７－２００８赛季，科比获得了人生唯一一座常规赛ＭＶＰ奖杯。２００８年８月，科比在北京获得第一块奥运会金牌。２００８－２０１０赛季，科比帮助湖人队再次两获ＮＢＡ总冠军，并两次获得总决赛ＭＶＰ。２０１２年，科比在伦敦再次获得奥运金牌。同年１２月５日，３４岁１０４天的科比成为联盟历史上拿下３００００分的最年轻球员。"}]
  let card=value.map(function(item,index){
    return <Card {...item} key={index} />
  })
  let div={
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap"
  }
  return(
    <div style={div}>
      {card}
    </div>
  )
}
  }


export default About;
