import React,{ Component }  from 'react'
import { Link } from 'dva/router'
import { Layout,Tabs,Row,Col,Table,Icon,Progress } from 'antd'
import echarts from 'echarts'
import styles from './HomePage.less'
import robotLocation from '../../assets/robot-location.png'

const {
  Header,
  Content,
} = Layout
const { TabPane }=Tabs

const orderList = [{
      title: '黑椒汁牛仔骨',
     
      operation: '30',
    },
    {
      title: '菜远煎焗鸡',
    
      operation: '28',
    },
    {
      title: '头菜炒猪颈肉',
      
      operation: '25',
    },
    {
      title: '哈密炒北极贝',
      
      operation: '20',
    },
    {
      title: '酱肉碎炒豆角粒',
     
      operation: '18',
    },
    {
      title: '酸姜糖醋烧鸭丝',
   
      operation: '15',
    }]

// const colums = [{
//   title:<span style={{fontSize:20}}>设备利用率</span>,
//   dataIndex:'device',
//   key:'device',
// },{
//   title:<span style={{fontSize:20}}>上午(6:00-10:00)</span>,
//   dataIndex:'morning',
//   key:'morning',
// },{
//   title:<span style={{fontSize:20}}>中午(11:00-14:00)</span>,
//   dataIndex:'afternoon',
//   key:'afternoon',
// }, {
//   title: <span style={{fontSize:20}}>晚上(16:00-21:00)</span>,
//   dataIndex: 'moon',
//   key: 'moon',
// }]

// const dataSource =[{
//   key:'1',
//   device:<div style={{height:80}} />,
//   morning:<div style={{width:'50%'}}><Progress percent={50} status="active" strokeWidth={12} strokecolor="rgb(155,155,155)" /></div>,
//   afternoon: <div style={{width:'50%'}}><Progress percent={50} status="active" strokeWidth={12} /></div>,
//   moon: <div style={{width:'50%'}}><Progress percent={50} status="active" strokeWidth={12} /></div>,
// }]

export default class HomePage extends Component{
  componentDidMount() {
    const app = echarts.init(document.getElementById('main'))
    app.title = "设备使用率"
const option = {
  color:['rgb(131,182,238)'],
  title:{
    text:'设备利用率(%)',
  },
  xAxis: {
    type: 'category',
    data: ['7:00', '9:00', '11:00', '13:00', '15:00', '17:00', '19:00','21:00'],
  },
  yAxis: {
    type: 'value',
  },
  series: [{
    name:'该时段利用率',
    data: [10, 40, 60, 70, 50, 80, 88,60],
    barWidth:'50%',
    type: 'bar',
  }],
};
    app.setOption(option)
  }

  render() {
    return (
      <div>
        <Layout>
          <Header style={{backgroundColor:'rgb(250,250,250)',textAlign:'center'}}><h1 style={{fontSize:35}}>餐厅信息数据总览</h1></Header>
          <Content style={{backgroundColor:'white'}}>
            <Row>
              <Tabs>
                <TabPane tab="" key="sales" style={{fontSize:20}}>
                  <Row>
                    <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                      <div>
                        <Row style={{marginLeft:20}}>
                          <h3 style={{fontFamily:'黑体',color:'rgb(25,134,165)',fontSize:30}}><b>营业数据总览</b></h3>
                        </Row>
                        <Row gutter={16} style={{paddingLeft:50}}>
                          <Col span={8}>
                            <div>
                              <div style={{fontSize:25,color:'rgb(100,100,100)'}}>今日营业总额</div>
                              <div style={{marginTop:10,fontSize:24,fontFamily:'微软雅黑',color:'rgb(24,144,255)'}}>￥<b style={{fontSize:31}}>5,556</b></div>
                              <div style={{marginTop:8,color:'rgb(170,170,170)'}}>昨日营业额：￥5,785<span style={{fontSize:16}}>  &nbsp;下降 25%&nbsp;<Icon type="arrow-down" style={{color:"rgb(132,178,71)"}} /></span></div>
                              <div style={{paddingTop:30}}>
                                <Progress type="circle" percent={75} strokeWidth={8} strokecolor='rgb(0,0,0)' />
                              </div>
                            </div>
                          </Col>
                          <Col span={8}>
                            <div>
                              <div style={{fontSize:25,color:'rgb(100,100,100)'}}>今日客流量</div>
                              <div style={{marginTop:10,fontSize:24,fontFamily:'微软雅黑',color:'rgb(132,178,71)'}}><b style={{fontSize:31}}>789</b>人</div>
                              <div style={{marginTop:8,color:'rgb(170,170,170)'}}>昨日客流量：829人<span style={{fontSize:16}}>  &nbsp;下降 12%&nbsp;<Icon type="arrow-down" style={{color:"rgb(132,178,71)"}} /></span></div>
                              <div style={{paddingTop:30}}>
                                <Progress type="circle" percent={88} strokecolor='rgb(132,178,71)' strokeWidth={8} />
                              </div>
                            </div>
                          </Col>
                          <Col span={8}>
                            <div>
                              <div style={{fontSize:25,color:'rgb(100,100,100)'}}>今日订单总数</div>
                              <div style={{marginTop:10,fontSize:24,fontFamily:'微软雅黑',color:'rgb(239,143,63)'}}><b style={{fontSize:31}}>521</b>单</div>
                              <div style={{marginTop:8,color:'rgb(170,170,170)'}}>昨日订单总数：536单<span style={{fontSize:16}}>  &nbsp;下降 20%&nbsp;<Icon type="arrow-down" style={{color:"rgb(132,178,71)"}} /></span></div>
                              <div style={{paddingTop:30}}>
                                <Progress type="circle" percent={80} strokeWidth={8} />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row style={{float:"right"}}><div><Link to='/dashboard/analysis'> 营业数据详情 </Link></div></Row>
                      </div>
                    </Col>
                    <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                      <div className={styles.salesRank}>
                        <h4 className={styles.rankingTitle}><span style={{color:'rgb(25,134,165)',fontSize:23}}>今日热门菜品</span></h4>
                        <ul className={styles.rankingList}>
                          {orderList.map((item, i) => (
                            <li key={item.title}>
                              <span className={i < 3 ? styles.active : ''}>{i + 1}</span>
                              <span>{item.title}</span>
                              <span>{item.operation}</span>
                            </li>
                        ))}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Row> 
            <Tabs>
              <TabPane tab="" key="sales" style={{fontSize:20}}>
                <Row style={{marginLeft:20}}>
                  <h3 style={{fontFamily:'黑体',color:'rgb(25,134,165)',fontSize:30}}><b>设备信息总览</b></h3>
                </Row>
                <Row gutter={16}>
                  <Col span={5} xl={5} lg={22} md={22} sm={22} xs={22}>
                    <div style={{fontSize:25,marginLeft:40}}>
                  设备运转情况
                      <div style={{display:'inline',fontSize:20}}><Link to='/dashboard/workplace'> (设备数据详情)</Link></div>
                    </div>
                    <div style={{margin:'15px 10px 0 40px',fontSize:19}}>
                      <p>AGV：<Icon type="check-circle" style={{color:'rgb(135,208,104)',fontSize:19}} /></p>
                      <p>炒菜机：<Icon type="check-circle" style={{color:'rgb(135,208,104)',fontSize:19}} /></p>
                      <p>机械臂：<Icon type="check-circle" style={{color:'rgb(135,208,104)',fontSize:19}} /></p>
                    </div>
                  </Col>
                  <Col span={1} />
                  <Col span={8} xl={8} lg={22} md={22} sm={22} xs={22}>
                    <div id="main" style={{height:400,width:600}}>
                      {/* <Table dataSource={dataSource} columns={colums} size="default" /> */}
                    </div>
                  </Col>
                  <Col span={8} xl={8} lg={22} md={22} sm={24} xs={22}>
                    <div><b style={{fontfamily:'黑体'}}>餐厅平面图</b></div>
                    <div id='chart2' style={{width:698,height:379}}>
                      <Link to='/dashboard/map'>
                        <img src={robotLocation} alt='robot location' style={{width:'100%',height:'100%'}} />
                      </Link>
                    </div>
                  </Col>
                  <Col span={1} />
                </Row>
              </TabPane>
            </Tabs>
          </Content>
        </Layout>  
      </div>
    )
  }
}
