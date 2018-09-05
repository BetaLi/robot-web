import React from 'react'
import { Layout,Row,Col,Tooltip } from 'antd'
import styles from './map.less'

import robot from '../../assets/icon/robot.png'
import screen from '../../assets/icon/screen.png'
import ur from '../../assets/icon/ur.png'
import resturant from '../../assets/icon/餐厅.png'
import robotArm from '../../assets/icon/机器人.png'
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
    for(let i=0;i<imgList.length;i++){
      imgList[i].style.width = `${Math.floor(55*ff/1775)}px`
    }
    const imgList_60 = document.getElementsByClassName('icon_60')
    for(let i=0;i<imgList_60.length;i++){
      imgList_60[i].style.width = `${Math.floor(60*ff/1775)}px`
    }
    const imgList_tuli = document.getElementsByClassName('icon_tuli')
    for(let i=0;i<imgList_tuli.length;i++){
      imgList_tuli[i].style.width = `${Math.floor(55*ff/1775)}px`
    }
  }

  render(){
    return (
      <div>
        <Layout>
          <Header style={{backgroundColor:'rgb(250,250,250)',textAlign:'center'}}><h1 style={{fontSize:35}}>餐厅电子地图</h1></Header>
          <Content>
            <Row>
              <Col span={24}>
                <div id="background" className={styles.background}>
                  <div style={{position:'absolute',top:'23%',left:'44%',border:' 1px'}}><Tooltip title="宣传展示屏"><img className="icon" src={screen} alt="" /></Tooltip></div>
                  {/* <div style={{position:'absolute',top:'18%',left:'8%',border:' 1px'}}><Tooltip title="用餐区"><img className="icon_60" src={resturant} alt="" /></Tooltip></div> */}
                  
                  <div style={{position:'absolute',top:'3%',left:'38%',border:' 1px'}}><Tooltip title="傲博倒茶机器人"><img className="icon" src={robotTea} alt="" /></Tooltip></div>
                  <div style={{position:'absolute',top:'3%',left:'41%',border:' 1px'}}><img className="icon" src={ur} alt="" /></div>
                  <div style={{position:'absolute',top:'3%',left:'50%',border:' 1px'}}><img className="icon" src={robot} alt="" /></div>

                  <div style={{position:'absolute',top:'74%',left:'35%',border:' 1px'}}><img className="icon" src={robotYingbing} alt="" /></div>
                  <div style={{position:'absolute',top:'68%',left:'35%',border:' 1px'}}><img className="icon" src={robotHeidou} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'38%',border:' 1px'}}><img className="icon" src={robotChess} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'41%',border:' 1px'}}><img className="icon" src={robotTea} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'44%',border:' 1px'}}><img className="icon" src={robotChess2} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'47%',border:' 1px'}}><img className="icon" src={robotMirror} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'50%',border:' 1px'}}><img className="icon" src={robotCoffee} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'53%',border:' 1px'}}><img className="icon" src={robotHeart} alt="" /></div>

                  <div style={{position:'absolute',top:'44%',left:'84.5%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'88%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'91.5%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'95%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'16%',left:'84%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'22%',left:'89.5%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'12%',left:'72%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>

                  <div style={{position:'absolute',top:'23%',left:'95.5%',border:' 1px'}}><img className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'18%',left:'95.5%',border:' 1px'}}><img className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'13%',left:'95.5%',border:' 1px'}}><img className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'28%',left:'95.5%',border:' 1px'}}><img className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'33%',left:'95.5%',border:' 1px'}}><img className="icon" src={assembleLine} alt="" /></div>

                  <div style={{position:'absolute',top:'37%',left:'38%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'38%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'45%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'37%',left:'45%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'52%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'37%',left:'52%',border:' 1px'}}><img className="icon" src={robot50} alt="" /></div>

                  <div style={{position:'absolute',top:'42.5%',left:'38%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'37%',left:'36%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'37%',left:'40%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'38%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'36%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'40%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  
                  <div style={{position:'absolute',top:'42.5%',left:'45%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'37%',left:'43%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'37%',left:'47%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'45%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'43%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'47%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>

                  <div style={{position:'absolute',top:'42.5%',left:'52%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'37%',left:'50%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'37%',left:'54%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'52%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'50%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'54%',border:' 1px'}}><img className="icon" src={cook} alt="" /></div>

                  <div style={{position:'absolute',top:'54%',left:'58%',border:' 1px'}}><img className="icon" src={cookFanxing} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'60.6%',border:' 1px'}}><img className="icon" src={cookFanxing} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'63.2%',border:' 1px'}}><img className="icon" src={cookFanxing} alt="" /></div>
                  
                </div>
              </Col>
            </Row>
            <Row style={{backgroundColor:'rgb(250,250,250)',paddingTop:10,border:'solid 1px rgb(100,100,100)'}}>
              <Col span={1} />
              <Col span={2}>
                <div>
                  <h2 style={{color:'rgb(150,150,150)'}}><b>图&nbsp;例</b></h2>
                </div>
              </Col> 
              <Col span={20}>
                <div>
                  <Row gutter={20}>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotHeidou} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;迎宾机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={cook} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;MegCook炒菜机</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={cookFanxing} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;繁兴炒菜机</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={assembleLine} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;Kindle装配线</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={screen} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;宣传显示屏</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robot50} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;发那科机械臂</span></div>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotCoffee} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;咖啡机机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotHeart} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;芯片机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotMirror} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;健康镜</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotChess} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;下棋机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotTea} alt="" /><span style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;沏茶机器人</span></div>
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
