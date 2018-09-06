import React from 'react'
import { Layout,Row,Col,Tooltip } from 'antd'
import styles from './map.less'

import robot from '../../assets/icon/robot.png'
import screen from '../../assets/icon/screen.png'
import ur from '../../assets/icon/ur.png'
import resturant from '../../assets/icon/餐厅.png'
import cook from '../../assets/icon/炒菜机.png'
import cookFanxing from '../../assets/icon/厨房2.png'
import robotYingbing from '../../assets/icon/robot_yingbing2.png'
import robotHeidou from '../../assets/icon/Robot-heidou.png'
import robotChess from '../../assets/icon/robot_chess.png'
import robotChess2 from '../../assets/icon/robot_chess2.png'
import robot50 from '../../assets/icon/机械臂.png'
import assembleLine from '../../assets/icon/assembly-line.png'
import robotMirror from '../../assets/icon/镜子.png'
import robotTea from '../../assets/icon/茶.png'
import robotCoffee from '../../assets/icon/咖啡机.png'
import robotHeart from '../../assets/icon/芯片.png'

const { Header,Content } = Layout

export default class Map extends React.Component{
  componentDidMount(){
    window.addEventListener('resize',this.handHeight)
    this.handHeight()
  }

 componentWillUpdate(){
    this.handHeight()
  }

  componentWillUnmount(){
    window.removeEventListener('resize',this.handHeight)
  }

  handHeight = ()=> {
    const ff = document.getElementById("background").offsetWidth
    document.getElementById('background').style.height = `${Math.floor(ff*1486/3972)}px`
    const imgList = document.getElementsByClassName('icon')
    for(let i=0;i<imgList.length;i+=1){
      imgList[i].style.width = `${Math.floor(55*ff/1775)}px`
    }
    const imgList_60 = document.getElementsByClassName('icon_60')
    for(let i=0;i<imgList_60.length;i+=1){
      imgList_60[i].style.width = `${Math.floor(60*ff/1775)}px`
    }
    const imgList_tuli = document.getElementsByClassName('icon_tuli')
    for(let i=0;i<imgList_tuli.length;i+=1){
      imgList_tuli[i].style.width = `${Math.floor(55*ff/1775)}px`
    }
    const fontSizeList = document.getElementsByClassName('font')
    for(let i=0;i<fontSizeList.length;i+=1){
      fontSizeList[i].style.fontSize = `${Math.floor(14*ff/1775)}px`
    }
  }

  render(){
    return (
      <div>
        <Layout>
          <Header style={{backgroundColor:'rgb(250,250,250)',textAlign:'center'}}><h1 style={{fontSize:35}}>博智林机器人餐厅电子地图</h1></Header>
          <Content>
            <Row>
              <Col span={24}>
                <div id="background" className={styles.background}>
                  <div style={{position:'absolute',top:'23%',left:'44%'}}><Tooltip title="宣传展示屏"><img className="icon" src={screen} alt="" /></Tooltip></div>
                  {/* <div style={{position:'absolute',top:'18%',left:'8%'}}><Tooltip title="用餐区"><img className="icon_60" src={resturant} alt="" /></Tooltip></div> */}
                  <div style={{position:'absolute',top:'3%',left:'38%'}}><Tooltip title="傲博倒茶机器人"><img className="icon" src={robotTea} alt="" /></Tooltip></div>
                  <div style={{position:'absolute',top:'3%',left:'41%'}}><Tooltip title="UR5收拾餐具"><img className="icon" src={ur} alt="" /></Tooltip></div>
                  <div style={{position:'absolute',top:'3%',left:'50%'}}><Tooltip title="Omron AGV 抓盘展示"><img className="icon" src={robot} alt="" /></Tooltip></div>

                  <div style={{position:'absolute',top:'74%',left:'35%'}}><img className="icon" src={robotYingbing} alt="" /></div>
                  <div style={{position:'absolute',top:'68%',left:'35%'}}><img className="icon" src={robotHeidou} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'38%'}}><img className="icon" src={robotChess} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'41%'}}><img className="icon" src={robotTea} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'44%'}}><img className="icon" src={robotChess2} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'47%'}}><img className="icon" src={robotMirror} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'50%'}}><img className="icon" src={robotCoffee} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'53%'}}><img className="icon" src={robotHeart} alt="" /></div>

                  <div style={{position:'absolute',top:'44%',left:'84.5%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'88%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'91.5%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'95%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'16%',left:'84%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'22%',left:'89.5%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'12%',left:'72%'}}><img className="icon" src={robot50} alt="" /></div>

                  <div style={{position:'absolute',top:'23%',left:'95.5%'}}><img className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'18%',left:'95.5%'}}><img className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'13%',left:'95.5%'}}><img className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'28%',left:'95.5%'}}><img className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'33%',left:'95.5%'}}><img className="icon" src={assembleLine} alt="" /></div>

                  <div style={{position:'absolute',top:'36%',left:'38%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'38%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'45%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'45%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'52%'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'52%'}}><img className="icon" src={robot50} alt="" /></div>

                  <div style={{position:'absolute',top:'41.5%',left:'38%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'36%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'40%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'38%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'36%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'40%'}}><img className="icon" src={cook} alt="" /></div>
                  
                  <div style={{position:'absolute',top:'41.5%',left:'45%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'43%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'47%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'45%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'43%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'47%'}}><img className="icon" src={cook} alt="" /></div>

                  <div style={{position:'absolute',top:'41.5%',left:'52%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'50%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'54%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'52%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'50%'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'54%'}}><img className="icon" src={cook} alt="" /></div>

                  <div style={{position:'absolute',top:'54%',left:'58%'}}><img className="icon" src={cookFanxing} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'60.6%'}}><img className="icon" src={cookFanxing} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'63.2%'}}><img className="icon" src={cookFanxing} alt="" /></div>
                </div>
              </Col>
            </Row>
            <Row style={{backgroundColor:'rgb(250,250,250)',paddingTop:10,border:' 1px rgb(100,100,100)'}}>
              <Col span={1} />
              <Col span={2}>
                <div>
                  <h2 style={{color:'rgb(150,150,150)',marginTop:22}}><b>图&nbsp;&nbsp;&nbsp;例</b></h2>
                </div>
              </Col> 
              <Col span={20}>
                <div style={{marginTop:20,marginBottom:20}}>
                  <Row gutter={20}>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotHeidou} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;迎宾机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={cook} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;MegCook炒菜机</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={cookFanxing} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;繁兴炒菜机</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={assembleLine} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;Kindle装配线</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={screen} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;宣传显示屏</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robot50} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;发那科机械臂</span></div>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotChess} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;下棋机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotTea} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;沏茶机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotMirror} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;健康镜</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotCoffee} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;咖啡机机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotHeart} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;芯片机器人</span></div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    )
  }
}
