import React from 'react'
import { Layout,Row,Col,Tooltip,Modal,Card } from 'antd'
import styles from './map.less'

import robot from '../../assets/icon/robot.png'
import screen from '../../assets/icon/screen.png'
import ur from '../../assets/icon/ur.png'
// import resturant from '../../assets/icon/餐厅.png'
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
import monitor from '../../assets/monitor.png'
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

    setInterval(()=>{
      const env =[{tempreture:`${Number(Math.random()+27.5).toFixed(2)}`,humidity:`${Number(Math.random()+53.5).toFixed(2)}`}]
      document.getElementById(`${count-1}`).style.width = `${w}px`;
      document.getElementById(`${count-1}`).style.zIndex = 1;
      document.getElementById(`${count}`).style.position = 'absolute'
      document.getElementById(`${count}`).style.zIndex = 10;
      document.getElementById(`${count}`).style.width = `${w+20}px`;
      
      document.getElementById('showBox').innerHTML = `<p><b>设备名称：</b>${deviceName[count-2]}</p>
                                                      <p>
                                                          <b>设备位置：</b>(${parseInt(document.getElementById(`${count}`).parentNode.style.left)*120.50}, ${parseInt(document.getElementById(`${count}`).parentNode.style.top)*38.50})
                                                      </p>
                                                      <p><b>设备状态：</b>${Math.random()>0.5 ? '运行中':'空闲'}</p>
                                                      <p><b>任务量：</b>${Math.floor(Math.random()*10)}</p>`
      document.getElementById('tempreture').innerHTML = `&nbsp室内温度：<span>${env[0].tempreture}℃</span>`
      document.getElementById('humidity').innerHTML = `&nbsp室内湿度：<span>${env[0].humidity}%</span>`
      if(count<51){
        count +=1;
      }else{
        document.getElementById(`${count}`).style.width = `${w}px`;
        document.getElementById(`${count}`).style.zIndex = 1;
        count = 2;
      } 
    },5000)
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

  handleModal = (data) => {
    // alert(data)
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
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
          <Header style={{backgroundColor:'rgb(250,250,250)',textAlign:'center'}}><h1 style={{fontSize:35}}>博智林机器人餐厅电子地图</h1></Header>
          <Content>
            <Row>
              <Col span={24}>
                <div id="background" className={styles.background}>
                  <div id="enviroument" style={{position:'absolute',top:'70%',left:'57%',width:190,height:90,backgroundColor:'white',color:'black',padding:10,}}>
                      <p style={{textAlign:'center'}}><span><img src={green_dot} style={{width:10}} /></span><span id="tempreture" style={{fontSize:'16px'}}>室内温度：</span></p>
                      <p style={{textAlign:'center'}}><span><img src={green_dot} style={{width:10}} /></span><span id="humidity" style={{fontSize:'16px'}}>室内湿度：</span></p>
                  </div>
                  <div style={{height:200,width:250,border:'1px dot',position:'absolute',top:'13%',left:'5%',padding:13,backgroundImage:`url("${monitor}")`,backgroundSize:'contain',backgroundRepeat:'no-repeat',color:'white'}} id="showBox" />
                  <div style={{position:'absolute',top:'23%',left:'44%'}}><Tooltip title="宣传展示屏"><img onClick={this.handleModal.bind(this,1)} id="1" className="icon" src={screen} alt="" /></Tooltip></div>
                  <div style={{position:'absolute',top:'3%',left:'38%'}}><Tooltip title="傲博倒茶机器人"><img onClick={this.handleModal.bind(this,1)} id="2" className="icon" src={robotTea} alt="" /></Tooltip></div>
                  <div style={{position:'absolute',top:'3%',left:'41%'}}><Tooltip title="UR5收拾餐具"><img onClick={this.handleModal.bind(this,1)} id="3" className="icon" src={ur} alt="" /></Tooltip></div>
                  <div style={{position:'absolute',top:'3%',left:'50%'}}><Tooltip title="Omron AGV 抓盘展示"><img onClick={this.handleModal.bind(this,1)} id="4" className="icon" src={robot} alt="" /></Tooltip></div>

                  <div style={{position:'absolute',top:'74%',left:'35%'}}><img onClick={this.handleModal.bind(this,1)} id="5" className="icon" src={robotYingbing} alt="" /></div>
                  <div style={{position:'absolute',top:'68%',left:'35%'}}><img onClick={this.handleModal.bind(this,1)} id="6" className="icon" src={robotHeidou} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'38%'}}><img onClick={this.handleModal.bind(this,1)} id="7" className="icon" src={robotChess} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'41%'}}><img onClick={this.handleModal.bind(this,1)} id="8" className="icon" src={robotTea} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'44%'}}><img onClick={this.handleModal.bind(this,1)} id="9" className="icon" src={robotChess2} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'47%'}}><img onClick={this.handleModal.bind(this,1)} id="10" className="icon" src={robotMirror} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'50%'}}><img onClick={this.handleModal.bind(this,1)} id="11" className="icon" src={robotCoffee} alt="" /></div>
                  <div style={{position:'absolute',top:'88%',left:'53%'}}><img onClick={this.handleModal.bind(this,1)} id="12" className="icon" src={robotHeart} alt="" /></div>

                  <div style={{position:'absolute',top:'44%',left:'84.5%'}}><img onClick={this.handleModal.bind(this,2)} id="13" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'88%'}}><img onClick={this.handleModal.bind(this,2)} id="14" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'91.5%'}}><img onClick={this.handleModal.bind(this,2)} id="15" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'44%',left:'95%'}}><img onClick={this.handleModal.bind(this,2)} id="16" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'16%',left:'84%'}}><img onClick={this.handleModal.bind(this,2)} id="17" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'22%',left:'89.5%'}}><img onClick={this.handleModal.bind(this,2)} id="18" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'12%',left:'72%'}}><img onClick={this.handleModal.bind(this,2)} id="19" className="icon" src={robot50} alt="" /></div>

                  <div style={{position:'absolute',top:'23%',left:'95.5%'}}><img onClick={this.handleModal.bind(this,1)} id="22" className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'18%',left:'95.5%'}}><img onClick={this.handleModal.bind(this,1)} id="21" className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'13%',left:'95.5%'}}><img onClick={this.handleModal.bind(this,1)} id="20" className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'28%',left:'95.5%'}}><img onClick={this.handleModal.bind(this,1)} id="23" className="icon" src={assembleLine} alt="" /></div>
                  <div style={{position:'absolute',top:'33%',left:'95.5%'}}><img onClick={this.handleModal.bind(this,1)} id="24" className="icon" src={assembleLine} alt="" /></div>

                  <div style={{position:'absolute',top:'36%',left:'38%'}}><img onClick={this.handleModal.bind(this,2)} id="25" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'38%'}}><img onClick={this.handleModal.bind(this,2)} id="26" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'45%'}}><img onClick={this.handleModal.bind(this,2)} id="27" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'45%'}}><img onClick={this.handleModal.bind(this,2)} id="28" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'52%'}}><img onClick={this.handleModal.bind(this,2)} id="29" className="icon" src={robot50} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'52%'}}><img onClick={this.handleModal.bind(this,2)} id="30" className="icon" src={robot50} alt="" /></div>

                  <div style={{position:'absolute',top:'41.5%',left:'38%'}}><img onClick={this.handleModal.bind(this,1)} id="31" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'36%'}}><img onClick={this.handleModal.bind(this,1)} id="32" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'40%'}}><img onClick={this.handleModal.bind(this,1)} id="33" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'38%'}}><img onClick={this.handleModal.bind(this,1)} id="34" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'36%'}}><img onClick={this.handleModal.bind(this,1)} id="35" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'40%'}}><img onClick={this.handleModal.bind(this,1)} id="36" className="icon" src={cook} alt="" /></div>
                  
                  <div style={{position:'absolute',top:'41.5%',left:'45%'}}><img onClick={this.handleModal.bind(this,1)} id="37" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'43%'}}><img onClick={this.handleModal.bind(this,1)} id="38" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'47%'}}><img onClick={this.handleModal.bind(this,1)} id="39" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'45%'}}><img onClick={this.handleModal.bind(this,1)} id="40" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'43%'}}><img onClick={this.handleModal.bind(this,1)} id="41" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'47%'}}><img onClick={this.handleModal.bind(this,1)} id="42" className="icon" src={cook} alt="" /></div>

                  <div style={{position:'absolute',top:'41.5%',left:'52%'}}><img onClick={this.handleModal.bind(this,1)} id="43" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'50%'}}><img onClick={this.handleModal.bind(this,1)} id="44" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'36%',left:'54%'}}><img onClick={this.handleModal.bind(this,1)} id="45" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'48.5%',left:'52%'}}><img onClick={this.handleModal.bind(this,1)} id="46" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'50%'}}><img onClick={this.handleModal.bind(this,1)} id="47" className="icon" src={cook} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'54%'}}><img onClick={this.handleModal.bind(this,1)} id="48" className="icon" src={cook} alt="" /></div>

                  <div style={{position:'absolute',top:'54%',left:'58%'}}><img onClick={this.handleModal.bind(this,1)} id="49" className="icon" src={cookFanxing} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'60.6%'}}><img onClick={this.handleModal.bind(this,1)} id="50" className="icon" src={cookFanxing} alt="" /></div>
                  <div style={{position:'absolute',top:'54%',left:'63.2%'}}><img onClick={this.handleModal.bind(this,1)} id="51" className="icon" src={cookFanxing} alt="" /></div>
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
