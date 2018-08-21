import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import echarts from 'echarts/lib/echarts'
import 'echarts-gl';
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

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
  List,
  Avatar
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
import { getTimeDistance } from '../../utils/utils';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './Analysis.less';

import aler from "../../assets/ts-alert-shine.svg" 
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
    rangePickerValue: getTimeDistance('year'),
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/fetch',
    });

    setInterval(()=>{
      dispatch({
        type: 'project/fetchNotice',
      });
      dispatch({
        type: 'project/fetchOrder',
      });
      dispatch({
        type:'project/fetchOrderList'
      })
      },3000)

  }

  componentDidUpdate (){
    var myChart = echarts.init(document.getElementById('main'));

    var data = [
      [
      [28604,77,170968690,'Australia','Omron_AGV'],
      [31163,73.4,170968690,'Canada','Omron_AGV'],
      [1516,68,170968690,'China','Omron_AGV'],
      [13670,74.7,170968690,'Cuba','Omron_AGV'],
    ],
      [
      [1390,71.4,251553170,'North Korea','MKLM_AGV'],
      [34644,80.7,251553170,'South Korea','MKLM_AGV'],
      [34186,78.6,251553170,'New Zealand','MKLM_AGV'],
      [64304,81.6,251553170,'Norway','MKLM_AGV'],
      ]
  ];

  
 const option = {
      
      backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
          offset: 0,
          color: 'rgb(255,255,255)'
      }, {
          offset: 1,
          color: 'rgb(255,255,255)'
      }]),
      title: {
          text: 'AGV与各机器人的位置',
          x:'center',
          y:0
      },
      legend: {
          right: 180,
          data: ['Omron_AGV', 'MKLM_AGV']
      },
      xAxis: {
        left:'center',
          splitLine: {
              lineStyle: {
                  type: 'dashed'
              }
          }
      },
      yAxis: {
          splitLine: {
              lineStyle: {
                  type: 'dashed'
              }
          },
          scale: true
      },
      series: [{
          name: 'Omron_AGV',
          data: data[0],
          type: 'scatter',
          symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
          },
          label: {
              emphasis: {
                  show: true,
                  formatter: function (param) {
                      return param.data[3];
                  },
                  position: 'top'
              }
          },
          itemStyle: {
              normal: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(120, 36, 50, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                      offset: 0,
                      color: 'rgb(251, 118, 123)'
                  }, {
                      offset: 1,
                      color: 'rgb(204, 46, 72)'
                  }])
              }
          }
      }, {
          name: 'MKLM_AGV',
          data: data[1],
          type: 'scatter',
          symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
          },
          label: {
              emphasis: {
                  show: true,
                  formatter: function (param) {
                      return param.data[3];
                  },
                  position: 'top'
              }
          },
          itemStyle: {
              normal: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(25, 100, 150, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                      offset: 0,
                      color: 'rgb(129, 227, 238)'
                  }, {
                      offset: 1,
                      color: 'rgb(25, 183, 207)'
                  }])
              }
          }
      }]
  };
  myChart.setOption(option)


  //   var dataAll = [
  //     [
  //         [10.0, 8.04],
  //         [8.0, 6.95],
  //         [13.0, 7.58],
  //         [9.0, 8.81],
  //         [11.0, 8.33],
  //         [14.0, 9.96],
  //         [6.0, 7.24],
  //         [4.0, 4.26],
  //         [12.0, 10.84],
  //         [7.0, 4.82],
  //         [5.0, 5.68]
  //     ],
  //     [
  //         [10.0, 9.14],
  //         [8.0, 8.14],
  //         [13.0, 8.74],
  //         [9.0, 8.77],
  //         [11.0, 9.26],
  //         [14.0, 8.10],
  //         [6.0, 6.13],
  //         [4.0, 3.10],
  //         [12.0, 9.13],
  //         [7.0, 7.26],
  //         [5.0, 4.74]
  //     ],
  //     [
  //         [10.0, 7.46],
  //         [8.0, 6.77],
  //         [13.0, 12.74],
  //         [9.0, 7.11],
  //         [11.0, 7.81],
  //         [14.0, 8.84],
  //         [6.0, 6.08],
  //         [4.0, 5.39],
  //         [12.0, 8.15],
  //         [7.0, 6.42],
  //         [5.0, 5.73]
  //     ],
  //     [
  //         [8.0, 6.58],
  //         [8.0, 5.76],
  //         [8.0, 7.71],
  //         [8.0, 8.84],
  //         [8.0, 8.47],
  //         [8.0, 7.04],
  //         [8.0, 5.25],
  //         [19.0, 12.50],
  //         [8.0, 5.56],
  //         [8.0, 7.91],
  //         [8.0, 6.89]
  //     ]
  // ];
// 绘制图表
// option = {
//   xAxis: {},
//   yAxis: {},
//   series: [{
//       symbolSize: 50,
//       data: data,
//       type: 'scatter'
//   }]
// };


// myChart.setOption({
//   title: {
//       text: 'Anscombe\'s quartet',
//       x: 'center',
//       y: 0
//   },
//   grid: [
//       {x: '7%', y: '7%', width: '38%', height: '38%'},
//       {x2: '7%', y: '7%', width: '38%', height: '38%'},
//       {x: '7%', y2: '7%', width: '38%', height: '38%'},
//       {x2: '7%', y2: '7%', width: '38%', height: '38%'}
//   ],
//   tooltip: {
//       formatter: 'Group {a}: ({c})'
//   },
//   xAxis: {},
//   yAxis: {},
//   series: [
//       {
//           name: 'I',
//           type: 'scatter',
//           xAxisIndex: 0,
//           yAxisIndex: 0,
//           data: dataAll[0],
          
//       },
//       {
//           name: 'II',
//           type: 'scatter',
//           xAxisIndex: 1,
//           yAxisIndex: 1,
//           data: dataAll[1],
          
//       },
//       {
//           name: 'III',
//           type: 'scatter',
//           xAxisIndex: 2,
//           yAxisIndex: 2,
//           data: dataAll[2],
          
//       },
//       {
//           name: 'IV',
//           type: 'scatter',
//           xAxisIndex: 3,
//           yAxisIndex: 3,
//           data: dataAll[3],
         
//       }
//   ]
// });  // 需要注意的是我们不能跟 grid 一样省略 grid3D

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
    const { chart, loading, project:{notice,order,orderList} } = this.props;
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

    // const columns = [
    //   {
    //     title: '排名',
    //     dataIndex: 'index',
    //     key: 'index',
    //   },
    //   {
    //     title: '搜索关键词',
    //     dataIndex: 'keyword',
    //     key: 'keyword',
    //     render: text => <a href="/">{text}</a>,
    //   },
    //   {
    //     title: '用户数',
    //     dataIndex: 'count',
    //     key: 'count',
    //     sorter: (a, b) => a.count - b.count,
    //     className: styles.alignRight,
    //   },
    //   {
    //     title: '周涨幅',
    //     dataIndex: 'range',
    //     key: 'range',
    //     sorter: (a, b) => a.range - b.range,
    //     render: (text, record) => (
    //       <Trend flag={record.status === 1 ? 'down' : 'up'}>
    //         <span style={{ marginRight: 4 }}>
    //           {text}
    //           %
    //         </span>
    //       </Trend>
    //     ),
    //     align: 'right',
    //   },
    // ];

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

    // const data = [
    //   'Racing car sprays burning fuel into crowd.',
    //   'Japanese princess to wed commoner.',
    //   'Australian walks 100km after outback crash.',
    //   'Man charged over missing wedding girl.',
    //   'Los Angeles battles huge wildfires.',
    // ];

    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar
            size="large"
            src=".././assets/bgy_logo.PNG"
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
          <p>13</p>
        </div>
        <div className={styles.statItem}>
          <p>正在运行</p>
          <p>
            8
            <span> / 13</span>
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
            src=".././assets/bgy_logo.PNG"
            style={{backgroundColor:'#87d068'}}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>机器人营业数据总览</div>
          <div>AGV状态｜FANUC机器人状态 | UR机器人状态 </div>
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



    return (
      <div>
      <PageHeaderLayout content={pageHeaderContent} extraContent={extraContent}>
      <Fragment> 
        <Row gutter={24} style={{marginBottom:20}}>
        <Col style={{height:600,width:'100%'}} xl={24} lg={24} md={24} sm={24} xs={24}>
          <div id='main' style={{height:'100%',margin:0}}></div>
        </Col>
        </Row>
      </Fragment>
      </PageHeaderLayout>
      <div style={{height:20}}></div>
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
              title="运营活动效果"
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
