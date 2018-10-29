import React from 'react'
import { Layout,Row,Col,Tooltip,Modal,Card } from 'antd'
import $ from 'jquery'
import styles from './map.less'

import robot from '../../assets/icon/robot.png'
import robot1 from '../../assets/icon/robot2.png'
import robot2 from '../../assets/icon/robot3.png'

import screen from '../../assets/icon/screen.png'
import screen1 from '../../assets/icon/screen2.png'
import screen2 from '../../assets/icon/screen3.png'

// import ur from '../../assets/icon/ur.png'
// import resturant from '../../assets/icon/餐厅.png'
import cook from '../../assets/icon/炒菜机.png'
import cook1 from '../../assets/icon/炒菜机2.png'
import cook2 from '../../assets/icon/炒菜机3.png'

import cookFanxing from '../../assets/icon/厨房.png'
import cookFanxing1 from '../../assets/icon/厨房2.png'
import cookFanxing2 from '../../assets/icon/厨房3.png'

// import robotYingbing from '../../assets/icon/robot_yingbing2.png'
// import robotHeidou from '../../assets/icon/Robot-heidou.png'

import robotChess from '../../assets/icon/robot_chess.png'
import robotChess1 from '../../assets/icon/robot_chess2.png'
import robotChess2 from '../../assets/icon/robot_chess3.png'

import robot50 from '../../assets/icon/机械臂.png'
import robot501 from '../../assets/icon/机械臂2.png'
import robot502 from '../../assets/icon/机械臂3.png'

import assembleLine from '../../assets/icon/assembly-line.png'
import assembleLine1 from '../../assets/icon/assembly-line2.png'
import assembleLine2 from '../../assets/icon/assembly-line3.png'

import robotMirror from '../../assets/icon/镜子.png'
import robotMirror1 from '../../assets/icon/镜子2.png'
import robotMirror2 from '../../assets/icon/镜子3.png'

import robotTea from '../../assets/icon/茶.png'
import robotTea1 from '../../assets/icon/茶2.png'
import robotTea2 from '../../assets/icon/茶3.png'

import robotCoffee from '../../assets/icon/咖啡机.png'
import robotCoffee1 from '../../assets/icon/咖啡机2.png'
import robotCoffee2 from '../../assets/icon/咖啡机3.png'

import robotHeart from '../../assets/icon/芯片.png'

import monitor from '../../assets/monitor.png'

import bgGreen from '../../assets/icon/绿色-bg.png'
import bgYellow from '../../assets/icon/黄色-bg.png'
import bgGray from '../../assets/icon/灰色-bg.png'

import tem_icon from '../../assets/icon/温度.png'
import humi_icon from '../../assets/icon/湿度.png'
import green_dot from '../../assets/icon/绿点.png'

const { Header,Content } = Layout

export default class Map extends React.Component{
  state = { visible: false }

  componentDidMount(){
    window.addEventListener('resize',this.handHeight)
    this.handHeight()
    let count = 2;
    
    const ff = document.getElementById("background").offsetWidth
    const w = Math.floor(55*ff/1775);

    const deviceName = [
      '傲博倒茶机器人',
      'UR5收拾餐具',
      'Omron收盘机器人',
      '迎宾机器人',
      '黑豆机器人',
      '下棋机器人',
      '单臂倒茶机器人',
      '下棋机器人2',
      '智能健康镜',
      '咖啡机器人',
      '芯片机器人',
      'FANUC1',
      'FANUC2',
      'FANUC3',
      'FANUC4',
      'FANUC5',
      'FANUC6',
      'FANUC7',
      'kindle流水线1',
      'kindle流水线2',
      'kindle流水线3',
      'kindle流水线4',
      'kindle流水线5',
      'FANUC8',
      'FANUC9',
      'FANUC10',
      'FANUC11',
      'FANUC12',
      'FANUC13',
      'MegCook炒菜机1',
      'MegCook炒菜机2',
      'MegCook炒菜机3',
      'MegCook炒菜机4',
      'MegCook炒菜机5',
      'MegCook炒菜机6',
      'MegCook炒菜机7',
      'MegCook炒菜机8',
      'MegCook炒菜机9',
      'MegCook炒菜机10',
      'MegCook炒菜机11',
      'MegCook炒菜机12',
      'MegCook炒菜机13',
      'MegCook炒菜机14',
      'MegCook炒菜机15',
      'MegCook炒菜机16',
      'MegCook炒菜机17',
      'MegCook炒菜机18',
      '繁星炒菜机1',
      '繁星炒菜机2',
      '繁星炒菜机3',
    ]

    
    
    this.time_timer = setInterval(()=>{
      const time = new Date()
      document.getElementById('time').innerHTML = `<b>当前系统时间：</b>${time}`
    },1000)

    // this.env_timer = setInterval(()=>{
    //   const env =[{tempreture:`${Number(Math.random()+27.5).toFixed(1)}`,humidity:`${Number(Math.random()+53.5).toFixed(1)}`}]
    //   document.getElementById('tempreture').innerHTML = `&nbsp;室内温度/湿度：<span>${env[0].tempreture}℃/${env[0].humidity}%</span>`
    // },3600000)

    const env = []
    $.get('http://t.weather.sojson.com/api/weather/city/101280800',
        (data) => {
            env[0] = {'wendu':data.data.wendu,"shidu":data.data.shidu}
            document.getElementById('tempreture').innerHTML = `&nbsp;当前温度/湿度：${env[0].wendu}℃/${env[0].shidu}`
         
        }
    )
    

    // this.devices_timer = setInterval(()=>{
      
    //   // document.getElementById(`${count-1}`).style.width = `${w}px`;
    //   // document.getElementById(`${count-1}`).style.zIndex = 1;
    //   // document.getElementById(`${count}`).style.position = 'absolute'
    //   // document.getElementById(`${count}`).style.zIndex = 10;
    //   // document.getElementById(`${count}`).style.width = `${w+20}px`;
      
      document.getElementById('showBox').innerHTML = `<p><b>设备数量：</b>42台</p>
                                                      <p><b>正在运行：</b>20/42</p>
                                                      <p><b>故障数量：</b>0/42</p>
                                                      <p><b>累计任务量：</b></p>`
      
    //   // document.getElementById('humidity').innerHTML = `&nbsp室内湿度：<span>${env[0].humidity}%</span>`
    //   // if(count<51){
    //   //   count +=1;
    //   // }else{
    //   //   document.getElementById(`${count}`).style.width = `${w}px`;
    //   //   document.getElementById(`${count}`).style.zIndex = 1;
    //   //   count = 2;
    //   // } 
    // },5000)
  }

 componentWillUpdate(){
    this.handHeight()
  }

  componentWillUnmount(){
    window.removeEventListener('resize',this.handHeight)
    // clearInterval(this.devices_timer)
    clearInterval(this.time_timer)
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

  handleModal = (data) => {
    // alert(data)
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          this is a detail message.
        </div>
      ),
      okText:'好的',
      centered:true,
      onOk() {},
    });
  }

  render(){

    return (
      <div>
        <Layout>
          <Header style={{backgroundColor:'rgb(250,250,250)',textAlign:'center'}}>
            <div id="enviroument" style={{zIndex:10, display:'inline-block',float:'left'}}>
              <p style={{textAlign:'center'}}><span><img src={green_dot} style={{width:5}} /></span><span id="tempreture">&nbsp;当前室内温度/湿度：21.5℃/54.2%</span></p>
              {/* <p style={{textAlign:'center'}}><span><img src={green_dot} style={{width:5}} /></span><span id="humidity">室内湿度：</span></p> */}
            </div>
            <h1 style={{fontSize:35, display:'inline-block'}}>博智林机器人餐厅电子地图</h1>
            <span id="time" style={{float:'right'}}><b>当前系统时间：</b></span>
          </Header>
          <Content>
            <Row>
              <Col span={24}>
                <div id="background" className={styles.background}>
                  <div style={{height:200,width:250,border:'1px dot',position:'absolute',top:'13%',left:'5%',padding:13,backgroundImage:`url("${monitor}")`,backgroundSize:'contain',backgroundRepeat:'no-repeat',color:'white'}} id="showBox" />
                  <div style={{position:'absolute',top:'17%',left:'82.5%'}}><Tooltip title="宣传展示屏"><img onClick={this.handleModal.bind(this,1)} id="1" className="icon" src={screen} alt="" /></Tooltip>当前位置</div>
                  {/* <div style={{position:'absolute',top:'3%',left:'38%'}}><Tooltip title="傲博倒茶机器人"><img onClick={this.handleModal.bind(this,1)} id="2" className="icon" src={robotTea} alt="" /></Tooltip></div> */}
                  <div style={{position:'absolute',top:'3%',left:'41%'}}><Tooltip title="UR5收拾餐具"><img onClick={this.handleModal.bind(this,1)} id="3" className="icon" src={robot2} alt="" /></Tooltip></div>
                  {/* <div style={{position:'absolute',top:'3%',left:'50%'}}><Tooltip title="Omron AGV 抓盘展示"><img onClick={this.handleModal.bind(this,1)} id="4" className="icon" src={robot} alt="" /></Tooltip></div> */}

                  <div style={{position:'absolute',top:'82%',left:'35%'}}><img onClick={this.handleModal.bind(this,1)} id="5" className="icon" src={robot} alt="" /></div>
                  <div style={{position:'absolute',top:'68%',left:'40%'}}><img onClick={this.handleModal.bind(this,1)} id="6" className="icon" src={robot} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'38%'}}><img onClick={this.handleModal.bind(this,1)} id="7" className="icon" src={robotChess} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'41%'}}><img onClick={this.handleModal.bind(this,1)} id="8" className="icon" src={robotTea2} alt="" /></div>
                  {/* <div style={{position:'absolute',top:'88%',left:'44%'}}><img onClick={this.handleModal.bind(this,1)} id="9" className="icon" src={robotChess2} alt="" /></div> */}
                  <div style={{position:'absolute',top:'88%',left:'47%'}}><img onClick={this.handleModal.bind(this,1)} id="10" className="icon" src={robotMirror} alt="" /></div>
                  {/* <div style={{position:'absolute',top:'88%',left:'50%'}}><img onClick={this.handleModal.bind(this,1)} id="11" className="icon" src={robotCoffee} alt="" /></div> */}
                  
                  <div style={{position:'absolute',top:'44%',left:'84.5%'}}><img onClick={this.handleModal.bind(this,2)} id="13" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'88%'}}><img onClick={this.handleModal.bind(this,2)} id="14" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'91.5%'}}><img onClick={this.handleModal.bind(this,2)} id="15" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'95%'}}><img onClick={this.handleModal.bind(this,2)} id="16" className="icon" src={robot50} alt="" /></div>
                  {/* <div style={{position:'absolute',top:'16%',left:'84%'}}><img onClick={this.handleModal.bind(this,2)} id="17" className="icon" src={robot50} alt="" /></div> */}
                  <div style={{position:'absolute',top:'22%',left:'89.5%'}}><img onClick={this.handleModal.bind(this,2)} id="18" className="icon" src={robotCoffee} alt="" /></div>
                  <div style={{position:'absolute',top:'12%',left:'72%'}}><img onClick={this.handleModal.bind(this,2)} id="19" className="icon" src={robot50} alt="" /></div>

                  <div style={{position:'absolute',top:'23%',left:'95.5%'}}><img onClick={this.handleModal.bind(this,1)} id="22" className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'18%',left:'95.5%'}}><img onClick={this.handleModal.bind(this,1)} id="21" className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'13%',left:'95.5%'}}><img onClick={this.handleModal.bind(this,1)} id="20" className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'28%',left:'95.5%'}}><img onClick={this.handleModal.bind(this,1)} id="23" className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'33%',left:'95.5%'}}><img onClick={this.handleModal.bind(this,1)} id="24" className="icon" src={assembleLine} alt="" /></div>

                  {/* <div style={{position:'absolute',top:'36%',left:'38%'}}><img onClick={this.handleModal.bind(this,2)} id="25" className="icon" src={robot50} alt="" /></div> */}
                  {/* <div style={{position:'absolute',top:'54%',left:'38%'}}><img onClick={this.handleModal.bind(this,2)} id="26" className="icon" src={robot50} alt="" /></div> */}
                  <div style={{position:'absolute',top:'54%',left:'45%'}}><img onClick={this.handleModal.bind(this,2)} id="27" className="icon" src={robot501} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'45%'}}><img onClick={this.handleModal.bind(this,2)} id="28" className="icon" src={robot501} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'52%'}}><img onClick={this.handleModal.bind(this,2)} id="29" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'52%'}}><img onClick={this.handleModal.bind(this,2)} id="30" className="icon" src={robot501} alt="" /></div>

                  <div style={{position:'absolute',top:'41.5%',left:'38%'}}><img onClick={this.handleModal.bind(this,1)} id="31" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'36%'}}><img onClick={this.handleModal.bind(this,1)} id="32" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'40%'}}><img onClick={this.handleModal.bind(this,1)} id="33" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'38%'}}><img onClick={this.handleModal.bind(this,1)} id="34" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'36%'}}><img onClick={this.handleModal.bind(this,1)} id="35" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'40%'}}><img onClick={this.handleModal.bind(this,1)} id="36" className="icon" src={cook2} alt="" /></div>
                  
                  <div style={{position:'absolute',top:'41.5%',left:'45%'}}><img onClick={this.handleModal.bind(this,1)} id="37" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'43%'}}><img onClick={this.handleModal.bind(this,1)} id="38" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'47%'}}><img onClick={this.handleModal.bind(this,1)} id="39" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'45%'}}><img onClick={this.handleModal.bind(this,1)} id="40" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'43%'}}><img onClick={this.handleModal.bind(this,1)} id="41" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'47%'}}><img onClick={this.handleModal.bind(this,1)} id="42" className="icon" src={cook2} alt="" /></div>

                  <div style={{position:'absolute',top:'41.5%',left:'52%'}}><img onClick={this.handleModal.bind(this,1)} id="43" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'50%'}}><img onClick={this.handleModal.bind(this,1)} id="44" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'54%'}}><img onClick={this.handleModal.bind(this,1)} id="45" className="icon" src={cook2} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'52%'}}><img onClick={this.handleModal.bind(this,1)} id="46" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'50%'}}><img onClick={this.handleModal.bind(this,1)} id="47" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'54%'}}><img onClick={this.handleModal.bind(this,1)} id="48" className="icon" src={cook} alt="" /></div>

                  <div style={{position:'absolute',top:'54%',left:'58%'}}><img onClick={this.handleModal.bind(this,1)} id="49" className="icon" src={cookFanxing2} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'60.6%'}}><img onClick={this.handleModal.bind(this,1)} id="50" className="icon" src={cookFanxing2} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'63.2%'}}><img onClick={this.handleModal.bind(this,1)} id="51" className="icon" src={cookFanxing2} alt="" /></div>
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
                      <div><img className="icon_tuli" src={robot2} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;迎宾机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={cook2} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;MegCook炒菜机</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={cookFanxing2} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;繁兴炒菜机</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={assembleLine2} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;Kindle装配线</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={screen2} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;展示大屏</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robot502} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;发那科机械臂</span></div>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotChess2} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;下棋机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotTea2} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;沏茶机器人</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotMirror2} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;健康镜</span></div>
                    </Col>
                    <Col span={4}>
                      <div><img className="icon_tuli" src={robotCoffee2} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;咖啡机机器人</span></div>
                    </Col>
                    <Col span={3}>
                      <div><img className="icon_tuli" src={bgGreen} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;正在运行</span></div>
                    </Col>
                    <Col span={2}>
                      <div><img className="icon_tuli" src={bgYellow} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;已通信</span></div>
                    </Col>
                    <Col span={2}>
                      <div><img className="icon_tuli" src={bgGray} alt="" /><span className="font" style={{fontSize:20,color:'rgb(150,150,150)',fontSize:14}}>&nbsp;未连接</span></div>
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
