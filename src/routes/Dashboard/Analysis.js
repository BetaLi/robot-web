import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
// import moment from 'moment';
// import echarts from 'echarts/lib/echarts'
import 'echarts-gl';
// import Chart from 'chart.js';
// import $ from 'jquery'
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  // Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
  Avatar,
  Button,
} from 'antd';
import numeral from 'numeral';
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from 'components/Charts';
import Trend from 'components/Trend';
import NumberInfo from 'components/NumberInfo';
// import background from '../../assets/background.png'
import { getTimeDistance } from '../../utils/utils';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './Analysis.less';

// import aler from "../../assets/ts-alert-shine.svg"
import dataLogo from '../../assets/data_logo.svg'
import deviceLogo from '../../assets/device_logo.png'
import fanuc from '../../assets/FANUC_20i.PNG'
import heidou from '../../assets/heidouRobot.png'
import shangcaiAGV from '../../assets/shangcaiAGV.png'
import yingbingAGV from '../../assets/yingbingAGV.png'
import yunliaoAGV from '../../assets/yunliaoAGV.png'
import metcook from '../../assets/MetCook.png'
import aobo from '../../assets/aobo.png'
import dafan from '../../assets/dafan.png'
import fanxing from '../../assets/fanxing.png'
// import jiazhiAGV from '../../assets/jiazhiAGV.png'
import rethink from '../../assets/Rethink.png'
import UR from '../../assets/UR.png'
// import xiaobaiAGV from '../../assets/xiaobai.png'
import xiaoheiAGV from '../../assets/xiaoheiAGV.png'
import playIcon from '../../assets/play.svg'
// import bzlVideo from '../../assets/vvideo.mp4'

require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title'); 
// import list from '../../models/list';


const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `碧桂园机器人餐厅 ${i} 号店`,
    total: 323234,
  });
}

const Yuan = ({ children }) => (
  <span
    dangerouslySetInnerHTML={{ __html: yuan(children) }} /* eslint-disable-line react/no-danger */
  />
);

@connect(({ project,chart, loading }) => ({
  project,
  chart,
  projectLoading: loading.effects['project/fetchNotice'],
  loading: loading.effects['chart/fetch'],
}))
export default class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    loaded:false,
    rangePickerValue: getTimeDistance('year'),
  };

  componentDidMount() {
    const {
      dispatch,
    } = this.props;
    this.setState({
        loaded: true,
      })
    dispatch({
      type: 'chart/fetch',
    });
    dispatch({
      type: 'project/fetchNotice',
    });
    dispatch({
      type: 'project/fetchOrder',
    });
    dispatch({
      type: 'project/fetchDevicesLocation',
    });
    dispatch({
      type: 'project/fetchOrderList',
    })
  //   setInterval(() => {
  //     dispatch({
  //       type: 'project/fetchOrderList',
  //     })
  //   }, 3000)
}
 
  componentDidUpdate (){

  // const {
  //   project: {
  //     devicesLocation,
  //   },
  // } = this.props; 

// const ctx = document.getElementById("mycanvas");
//    let scatterChart = new Chart(ctx, {
//      type: 'scatter',
//      data: {
//        datasets: [{
//          label: 'Scatter Dataset',
//          data: [{
//            x: -10,
//            y: 0,
//          }, {
//            x: 0,
//            y: 10,
//          }, {
//            x: 10,
//            y: 5,
//          }],
//        }],
//      },
//      options: {
//        scales: {
//          xAxes: [{
//            type: 'linear',
//            position: 'bottom',
//          }],
//        },
//      },
//    });


  // const myChart =await echarts.init(document.getElementById('main'));

  // const data = await devicesLocation

  // const option = {
      
  //     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
  //         offset: 0,
  //         color: 'rgb(255,255,255)',
  //     }, {
  //         offset: 1,
  //         color: 'rgb(255,255,255)',
  //     }]),
  //     title: {
  //         text: '机器人餐厅设备电子地图',
  //         x:'80',
  //         y:0,
  //     },
  //     legend: {
  //         right: 80,
  //         data: ['Omron_AGV', 'MKLM_AGV', 'FANUC'],
  //     },
  //     xAxis: {
  //       // left:'center',
  //         // splitLine: {
  //         //     lineStyle: {
  //         //         type: 'none',
  //         //     },
  //         // },
  //     },
  //     yAxis: {
  //         // splitLine: {
  //         //     lineStyle: {
  //         //         type: 'none',
  //         //     },
  //         // },
  //         // scale: true,
  //     },
  //     series: [{
  //         name: 'Omron_AGV',
  //         data: data[0],
  //         type: 'scatter',
  //         symbolSize (param) {
  //             return Math.sqrt(param[2]) / 5e2;
  //         },
  //         label: {
  //             emphasis: {
  //                 show: true,
  //                 formatter (param) {
  //                     return param.data[3];
  //                 },
  //                 position: 'top',
  //             },
  //         },
  //         itemStyle: {
             
  //             normal: {
  //                 shadowBlur: 10,
  //                 shadowColor: 'rgba(120, 36, 50, 0.5)',
  //                 shadowOffsetY: 5,
  //                 color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
  //                     offset: 0,
  //                     color: 'rgb(251, 118, 123)',
  //                 }, {
  //                     offset: 1,
  //                     color: 'rgb(204, 46, 72)',
  //                 }]),
  //             },
  //         },
  //     }, 
  //     {
  //       name: 'FANUC',
  //       data: data[2],
  //       type: 'scatter',
  //       symbolSize (param) {
  //         return Math.sqrt(param[2]) / 5e2;
  //       },
  //       label: {
  //         emphasis: {
  //           show: true,
  //           formatter (param) {
  //             return param.data[3];
  //           },
  //           position: 'top',
  //         },
  //       },
  //       itemStyle: {
  //         normal: {
  //           shadowBlur: 10,
  //           shadowColor: 'rgba(120, 180, 50, 0.5)',
  //           shadowOffsetY: 5,
  //           color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
  //             offset: 0,
  //             color: 'rgb(243, 238, 44)',
  //           }, {
  //             offset: 1,
  //             color: 'rgb(204, 178, 0)',
  //           }]),
  //         },
  //       },
  //     },
  //     {
  //         name: 'MKLM_AGV',
  //         data: data[1],
  //         type: 'scatter',
  //         symbolSize(param) {
  //             return Math.sqrt(param[2]) / 5e2;
  //         },
  //         label: {
  //             emphasis: {
  //                 show: true,
  //                 formatter (param) {
  //                     return param.data[3];
  //                 },
  //                 position: 'top',
  //             },
  //         },
  //         itemStyle: {
  //             normal: {
  //                 shadowBlur: 10,
  //                 shadowColor: 'rgba(25, 100, 150, 0.5)',
  //                 shadowOffsetY: 5,
  //                 color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
  //                     offset: 0,
  //                     color: 'rgb(129, 227, 238)',
  //                 }, {
  //                     offset: 1,
  //                     color: 'rgb(25, 183, 207)',
  //                 }]),
  //             },
  //         },
  //     }],
  // };
  // myChart.setOption(option)
  // this.componentWillUnmount()
}


  componentWillUnmount() {
    const { dispatch } = this.props;
    
    dispatch({
      type: 'chart/clear',
    });
  }

  handleChangeSalesType = e => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = key => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = rangePickerValue => {
    this.setState({
      rangePickerValue,
    });

    const { dispatch } = this.props;
    dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  handleClick = e=> {
    if (document.getElementById('video1').style.display === 'none') {
      document.getElementById('video1').style.display = 'block'
      document.getElementById('video1').play()
    }
    else{
      document.getElementById('video1').pause()
      document.getElementById('video1').style.display = 'none'
    }
    
  }

  selectDate = type => {
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });

    const { dispatch } = this.props;
    dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  isActive(type) {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return;
    }
    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }
  }

  render() {
    const { rangePickerValue, salesType, currentTabKey } = this.state;
    const { chart, loading, project:{orderList} } = this.props;
    const {
      visitData,
      // visitData2,
      salesData,
      // searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
    } = chart;
    // const {project:{notice}} = this.props;

    const salesPieData =
      salesType === 'all'
        ? salesTypeData
        : salesType === 'online'
          ? salesTypeDataOnline
          : salesTypeDataOffline;

    const menu = (
      <Menu>
        <Menu.Item>操作一</Menu.Item>
        <Menu.Item>操作二</Menu.Item>
      </Menu>
    );

    const iconGroup = (
      <span className={styles.iconGroup}>
        <Dropdown overlay={menu} placement="bottomRight">
          <Icon type="ellipsis" />
        </Dropdown>
      </span>
    );

    const salesExtra = (
      <div className={styles.salesExtraWrap}>
        <div className={styles.salesExtra}>
          <a className={this.isActive('today')} onClick={() => this.selectDate('today')}>
            今日
          </a>
          <a className={this.isActive('week')} onClick={() => this.selectDate('week')}>
            本周
          </a>
          <a className={this.isActive('month')} onClick={() => this.selectDate('month')}>
            本月
          </a>
          <a className={this.isActive('year')} onClick={() => this.selectDate('year')}>
            全年
          </a>
        </div>
        <RangePicker
          value={rangePickerValue}
          onChange={this.handleRangePickerChange}
          style={{ width: 256 }}
        />
      </div>
    );

    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);

    const CustomTab = ({ data, currentTabKey: currentKey }) => (
      <Row gutter={8} style={{ width: 138, margin: '8px 0' }}>
        <Col span={12}>
          <NumberInfo
            title={data.name}
            subTitle="消费率"
            gap={2}
            total={`${data.cvr * 100}%`}
            theme={currentKey !== data.name && 'light'}
          />
        </Col>
        <Col span={12} style={{ paddingTop: 36 }}>
          <Pie
            animate={false}
            color={currentKey !== data.name && '#BDE4FF'}
            inner={0.55}
            tooltip={false}
            margin={[0, 0, 0, 0]}
            percent={data.cvr * 100}
            height={64}
          />
        </Col>
      </Row>
    );

    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: { marginBottom: 24 },
    };

    // const randomNum = numeral(Math.random()*1000000).format('0,0')
    const randomNum = 35420

    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar
            size="large"
            src={deviceLogo}
            style={{backgroundColor:'#87d068'}}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>机器人餐厅设备总览</div>
          <div>AGV状态｜FANUC机器人状态 | UR机器人状态 </div>
        </div>
      </div>
    );

    const extraContent = (
      <div className={styles.extraContent}>
        <div className={styles.statItem}>
          <p>设备数量</p>
          <p>25</p>
        </div>
        <div className={styles.statItem}>
          <p>正在运行</p>
          <p>
            15
            <span> / 25</span>
          </p>
        </div>
        <div className={styles.statItem}>
          <p>总运行次数</p>
          <p>2,223</p>
        </div>
      </div>
    );



    const pageHeaderContent2 = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar
            size="large"
            src={dataLogo}
            style={{backgroundColor:'#87d068'}}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>机器人营业数据总览</div>
          <div>销售额｜客流量 | 菜品订单 </div>
        </div>
      </div>
    );

    const extraContent2 = (
      <div className={styles.extraContent}>
        <div className={styles.statItem}>
          <p>门店数量</p>
          <p>10</p>
        </div>
        <div className={styles.statItem}>
          <p>正在营业</p>
          <p>
            8
            <span> / 10</span>
          </p>
        </div>
        <div className={styles.statItem}>
          <p>总营业天数</p>
          <p>122</p>
        </div>
      </div>
    );

    const devices = [[
      {titile:'FAUNC机器人',src:fanuc,description:[5,<div><p>3台位于试验区，用于参观展示</p><p>2台用于厨房，用于实现自动化炒菜</p><p>1台用于洗碗区，用于抓盘子</p></div>]},
      {titile:'UR机器人',src:UR,description:[3,<div><p>3台均位于试验区进行调试，实现煮面机，煎饼机的自动化集成</p></div>]},
      {titile:'傲博机器人',src:aobo,description:[3,<div><p>3台均位于试验区，2台用于自动沏茶，1台用于自动化拧螺丝</p></div>]},
      {titile:'Rethink机器人',src:rethink,description:[2,<div><p>1台位于餐厅入口处，用来和客人进行互动</p><p>1台位于试验区，用于自动化煎饼机</p></div>]},
      {titile:'迎宾机器人',src:yingbingAGV,description:[1,<div><p>1台位于餐厅入口处，用来带领客人准确入座</p></div>]},
      {titile:'黑豆机器人',src:heidou,description:[1,<div><p>1台位于餐厅入口处，用于和客人进行互动</p></div>]}],
      [
      {titile:'送料AGV',src:yunliaoAGV,description:[1,<div><p>1台位于厨房区，用于炒菜原料的运送</p></div>]},
      {titile:'MegCook炒菜机',src:metcook,description:[3,<div><p>3台均位于厨房区，集成FANUC机器人实现自动化炒菜</p></div>]},
      {titile:'繁星炒菜机',src:fanxing,description:[3,<div><p>3台均位于厨房</p></div>]},
      {titile:'打饭机器人',src:dafan,description:[1,<div><p>1台位于厨房区，用于自动化打饭</p></div>]},
      {titile:'送菜AGV',src:shangcaiAGV,description:[1,<div><p>1台位于用餐区，负责上菜</p></div>]},
      // {titile:'迦智AGV',src:jiazhiAGV,description:[3]},
      {titile:'自助服务AGV',src:xiaoheiAGV,description:[1,<div><p>1台位于用餐区，负责给客人提供常用的服务用品</p></div>]},
    ],
    ]

    return (
      <div>
        <PageHeaderLayout content={pageHeaderContent} extraContent={extraContent}>
          <Fragment> 
            {/* <Row gutter={24} style={{marginBottom:20}}>
              <Col style={{height:600,width:'100%'}} xl={24} lg={24} md={24} sm={24} xs={24}>
                <div id='main' style={{height:'100%',width:'100%'}} />
              </Col>
            </Row> */}
            <Row>
              {devices.map((item,i)=>(
                <Row>
                  {item.map((key,ii)=>(
                    <Col style={{marginBottom:24}} xl={4} lg={8} md={8} sm={12} xs={24}>
                      <Card
                        hoverable
                        style={{ width: 240,borderRadius:' 0 0 8px 8px'}}
                        cover={<img alt="example" src={key.src} style={{backgroundColor:'#fafafa'}} />}
                      >
                        <Card.Meta
                          title={key.titile}
                          description={
                            <div style={{width:'100%'}}>
                              <span>设备数量: {key.description[0]}</span>   
                              <span style={{float:"right"}}>
                                <Tooltip
                                  title={
                                    <div>
                                      {key.description[1]}
                                    </div>}
                                  trigger='click'
                                  placement='right'
                                >
                                  <Icon type="link" style={{fontSize:20}} />
                                </Tooltip>
                              </span>
                            </div>
                            }
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              ))}
            </Row>
            <Row>
              <Col span={24}>
                <div style={{width:'100%',backgroundColor:'#f9fcff',marginBottom:15}}>
                  <h2 className={styles.title}>博智林机器人公司从这里开始</h2>
                  {/* <h4 className={styles.title} style={{color:'#acacac'}}>设备演示视频，点击播放</h4> */}
                  <div className={styles.video}>
                    <img alt="playIcon" src={playIcon} style={{width:100,height:100}} onClick={this.handleClick} />
                  </div>
                  <video id="video1" style={{width:'80%',margin:'10px auto',display:'none',paddingBottom:20}} controls> 
                    <source
                      src="http://139.199.66.122:5000/api/video"
                      type="video/mp4"
                      style={{margin:'10px auto'}}
                    />
                  </video>
                </div>
              </Col>
              
            </Row>
          </Fragment>
        </PageHeaderLayout>
        <div style={{height:20}} />
        <PageHeaderLayout content={pageHeaderContent2} extraContent={extraContent2}>
          <Fragment>
            <Row gutter={24}>
              <Col {...topColResponsiveProps}>
                <ChartCard
                  bordered={false}
                  title="总销售额"
                  loading={loading}
                  action={
                    <Tooltip title="指标说明">
                      <Icon type="info-circle-o" />
                    </Tooltip>
              }
                  total={() => <Yuan>{randomNum}</Yuan>}
                  footer={<Field label="日均销售额" value={`￥${numeral(12423).format('0,0')}`} />}
                  contentHeight={46}
                >
                  <Trend flag="up" style={{ marginRight: 16 }}>
                周同比
                    <span className={styles.trendText}>12%</span>
                  </Trend>
                  <Trend flag="down">
                日环比
                    <span className={styles.trendText}>11%</span>
                  </Trend>
                </ChartCard>
              </Col>
              <Col {...topColResponsiveProps}>
                <ChartCard
                  bordered={false}
                  title="客流量"
                  loading={loading}
                  action={
                    <Tooltip title="指标说明">
                      <Icon type="info-circle-o" />
                    </Tooltip>
              }
                  total={numeral(8846).format('0,0')}
                  footer={<Field label="日客流量" value={numeral(1234).format('0,0')} />}
                  contentHeight={46}
                >
                  <MiniArea color="#975FE4" data={visitData} />
                </ChartCard>
              </Col>
              <Col {...topColResponsiveProps}>
                <ChartCard
                  bordered={false}
                  title="支付笔数"
                  loading={loading}
                  action={
                    <Tooltip title="指标说明">
                      <Icon type="info-circle-o" />
                    </Tooltip>
              }
                  total={numeral(6560).format('0,0')}
                  footer={<Field label="转化率" value="60%" />}
                  contentHeight={46}
                >
                  <MiniBar data={visitData} />
                </ChartCard>
              </Col>
              <Col {...topColResponsiveProps}>
                <ChartCard
                  bordered={false}
                  title="当月销售目标完成情况"
                  loading={loading}
                  action={
                    <Tooltip title="指标说明">
                      <Icon type="info-circle-o" />
                    </Tooltip>
              }
                  total="78%"
                  footer={
                    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                      <Trend flag="up" style={{ marginRight: 16 }}>
                    周同比
                        <span className={styles.trendText}>12%</span>
                      </Trend>
                      <Trend flag="down">
                    日环比
                        <span className={styles.trendText}>11%</span>
                      </Trend>
                    </div>
              }
                  contentHeight={46}
                >
                  <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
                </ChartCard>
              </Col>
            </Row>

            {/* <Row gutter={24}>
          <Col style={{marginBottom:12}} span={16} xl={16} lg={16} md={24} sm={24} xs={24}>
            <Card
              className={styles.projectList}
              style={{ marginBottom: 10 }}
              title="机器人状态"
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
              {notice.map(item => (
                <Card.Grid className={styles.projectGrid} key={item.id}>
                  <Card bodyStyle={{ padding: 0 }} bordered={false}>
                    <Card.Meta
                      title={
                        <div className={styles.cardTitle}>
                          <img size="small" src={aler} alt="loading.." width="22px" />
                          <a>{item.title}</a>
                        </div>
                      }
                      description={
                        <div>
                          <p>{item.description[0]}</p>
                          <p>{item.description[1]}</p>
                          <p>{item.description[2]}</p>
                          <p>{item.description[3]}</p>
                        </div>
                      }
                    />
                    <div className={styles.projectItemContent}>
                      {item.updatedAt && (
                      <span className={styles.datetime} title={item.updatedAt}>
                        {moment(item.updatedAt).fromNow()}
                      </span>
                      )}
                    </div>
                  </Card>
                </Card.Grid>
              ))}
            </Card>
          </Col>
          <Col style={{marginBottom:12}} span={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <Card title="当前订单信息">
              {/* <List
                size="small"
                bordered={false}
                dataSource={order}
                renderItem={item => (<List.Item>{item}</List.Item>)}
              /> */}
            {/* <ul className={styles.rankingList}>
             {order.map((item, i) => (
                          <li key={item.title}>
                            <span className={i < 3 ? styles.active : ''}>{i + 1}</span>
                            <span>{item.title}</span>
                            <span>{item.total}</span>
                          </li>
                        ))}
              </ul>
            </Card>
          </Col>
        </Row> */}
            <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
              <div className={styles.salesCard}>
                <Tabs tabBarExtraContent={salesExtra} size="large" tabBarStyle={{ marginBottom: 24 }}>
                  <TabPane tab="销售额" key="sales">
                    <Row>
                      <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                        <div className={styles.salesBar}>
                          <Bar height={295} title="销售额趋势" data={salesData} />
                        </div>
                      </Col>
                      <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                        <div className={styles.salesRank}>
                          <h4 className={styles.rankingTitle}>菜品热销排名</h4>
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
                  <TabPane tab="访问量" key="views">
                    <Row>
                      <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                        <div className={styles.salesBar}>
                          <Bar height={292} title="访问量趋势" data={salesData} />
                        </div>
                      </Col>
                      <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                        <div className={styles.salesRank}>
                          <h4 className={styles.rankingTitle}>门店访问量排名</h4>
                          <ul className={styles.rankingList}>
                            {rankingListData.map((item, i) => (
                              <li key={item.title}>
                                <span className={i < 3 ? styles.active : ''}>{i + 1}</span>
                                <span>{item.title}</span>
                                <span>{numeral(item.total).format('0,0')}</span>
                              </li>
                        ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </Tabs>
              </div>
            </Card>

            <Row gutter={24}>
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <Card
                  loading={loading}
                  className={styles.salesCard}
                  bordered={false}
                  title="销售额类别占比"
                  bodyStyle={{ padding: 24 }}
                  extra={
                    <div className={styles.salesCardExtra}>
                      {iconGroup}
                      <div className={styles.salesTypeRadio}>
                        <Radio.Group value={salesType} onChange={this.handleChangeSalesType}>
                          <Radio.Button value="all">全部渠道</Radio.Button>
                          <Radio.Button value="online">线上</Radio.Button>
                          <Radio.Button value="offline">门店</Radio.Button>
                        </Radio.Group>
                      </div>
                    </div>
              }
                  style={{ marginTop: 24, minHeight: 509 }}
                >
                  <h4 style={{ marginTop: 8, marginBottom: 32 }}>销售额</h4>
                  <Pie
                    hasLegend
                    subTitle="销售额"
                    total={() => <Yuan>{salesPieData.reduce((pre, now) => now.y + pre, 0)}</Yuan>}
                    data={salesPieData}
                    valueFormat={value => <Yuan>{value}</Yuan>}
                    height={248}
                    lineWidth={4}
                  />
                </Card>
              </Col>

              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <Card
                  title="各品类占比" 
                  bordered={false} 
                  className={styles.pieCard}
                  bodyStyle={{ padding: 24 }}
                  style={{ marginTop: 24, minHeight: 509 }}
                >
                  <Row style={{ padding: '16px 0' }}>
                    <Col span={8}>
                      <Pie
                        animate
                        percent={28}
                        subTitle="前菜"
                        total="18%"
                        height={150}
                        lineWidth={2}
                      />
                    </Col>
                    <Col span={8}>
                      <Pie
                        animate={false}
                        color="#5DDECF"
                        percent={22}
                        subTitle="蒸菜"
                        total="12%"
                        height={150}
                        lineWidth={2}
                      />
                    </Col>
                    <Col span={8}>
                      <Pie
                        animate={false}
                        color="#2FC25B"
                        percent={32}
                        subTitle="炒菜"
                        total="26%"
                        height={150}
                        lineWidth={2}
                      />
                    </Col>
                  </Row>
                  <Row style={{ padding: '16px 0' }}>
                    <Col span={8}>
                      <Pie
                        animate
                        percent={18}
                        subTitle="油炸"
                        total="28%"
                        height={150}
                        lineWidth={2}
                      />
                    </Col>
                    <Col span={8}>
                      <Pie
                        animate={false}
                        color="#5DDECF"
                        percent={22}
                        subTitle="汤"
                        total="12%"
                        height={150}
                        lineWidth={2}
                      />
                    </Col>
                    <Col span={8}>
                      <Pie
                        animate={false}
                        color="#2FC25B"
                        percent={32}
                        subTitle="甜点"
                        total="14%"
                        height={150}
                        lineWidth={2}
                      />
                    </Col>
                  </Row>
                </Card>

                {/* <Card
              loading={loading}
              bordered={false}
              title="线上热门搜索"
              extra={iconGroup}
              style={{ marginTop: 24 }}
            >
              <Row gutter={68}>
                <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
                  <NumberInfo
                    subTitle={
                      <span>
                        搜索用户数
                        <Tooltip title="指标文案">
                          <Icon style={{ marginLeft: 8 }} type="info-circle-o" />
                        </Tooltip>
                      </span>
                    }
                    gap={8}
                    total={numeral(12321).format('0,0')}
                    status="up"
                    subTotal={17.1}
                  />
                  <MiniArea line height={45} data={visitData2} />
                </Col>
                <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
                  <NumberInfo
                    subTitle="人均搜索次数"
                    total={2.7}
                    status="down"
                    subTotal={26.2}
                    gap={8}
                  />
                  <MiniArea line height={45} data={visitData2} />
                </Col>
              </Row>
              <Table
                rowKey={record => record.index}
                size="small"
                columns={columns}
                dataSource={searchData}
                pagination={{
                  style: { marginBottom: 0 },
                  pageSize: 5,
                }}
              />
            </Card> */}
              </Col>
            </Row>

            <Card
              loading={loading}
              className={styles.offlineCard}
              bordered={false}
              bodyStyle={{ padding: '0 0 32px 0' }}
              style={{ marginTop: 32 }}
            >
              <Tabs activeKey={activeKey} onChange={this.handleTabChange}>
                {offlineData.map(shop => (
                  <TabPane tab={<CustomTab data={shop} currentTabKey={activeKey} />} key={shop.name}>
                    <div style={{ padding: '0 24px' }}>
                      <TimelineChart
                        height={400}
                        data={offlineChartData}
                        titleMap={{ y1: '客流量', y2: '支付笔数' }}
                      />
                    </div>
                  </TabPane>
            ))}
              </Tabs>
            </Card>
          </Fragment>
        </PageHeaderLayout>
      </div>
    );
  }
}
