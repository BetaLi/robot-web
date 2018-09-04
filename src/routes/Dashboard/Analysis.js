import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
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
  Table, Badge,
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
import rethink from '../../assets/Rethink.png'
import UR from '../../assets/UR.png'
import xiaoheiAGV from '../../assets/xiaoheiAGV.png'
import playIcon from '../../assets/play.svg'
import stopIcon from '../../assets/stop.svg'


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
      });
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
      document.getElementById('playIcon').src = stopIcon
    }
    else{
      document.getElementById('video1').pause()
      document.getElementById('video1').style.display = 'none'
      document.getElementById('playIcon').src = playIcon
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

  // const columns = [{
  //       title: 'AGV',
  //       dataIndex: 'agv',
  //       key: 'agv',
  //       render: text => ( <a href="javascript:;"> {text} </a>),
  //     }, {
  //       title: '设备状态',
  //       dataIndex: 'state',
  //       key: 'state',
  //     }, {
  //       title: '设备位置',
  //       dataIndex: 'location',
  //       key: 'location',
  //     }, {
  //       title: 'Tags',
  //       key: 'tags',
  //       dataIndex: 'tags',
  //       render: tags => ( 
  //         <span> {
  //             tags.map(tag => ( <Tag color="blue" key={tag}> {tag} </Tag>))} 
  //         </span>),
  //         }, 
  //         {
  //           title: '当前任务',
  //           key: 'mission',
  //           render: (text, record) => ( 
  //             <span>
  //               <a href="javascript:;"> Invite {record.name} </a> <Divider type="vertical" />
  //               <a href="javascript:;"> Delete </a>  
  //             </span>
  //           )}];

  //       const data = [{
  //         key: '1',
  //         agv: 'AGV_iplus_EMMA200_1',
  //         state: 'OK',
  //         location: '用餐区',
  //         tags: ['nice', 'developer'],
  //       }, {
  //         key: '2',
  //         agv: 'AGV_iplus_EMMA200_1',
  //         state: 'OK',
  //         location: '用餐区',
  //         tags: ['nice', 'developer'],
  //       }, {
  //         key: '3',
  //         agv: 'AGV_iplus_EMMA200_1',
  //         state: 'OK',
  //         location: '用餐区',
  //         tags: ['nice', 'developer'],
  //       }];

function NestedTable() {
  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <span className="table-operation">
            <a href="javascript:;">Pause</a>
            <a href="javascript:;">Stop</a>
          </span>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; i++) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  };

  const columns = [
    { title: '设备名称', dataIndex: 'name', key: 'name' },
    { title: '设备状态', dataIndex: 'state', key: 'state' },
    { title: '设备位置', dataIndex: 'location', key: 'location' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: '操作人员', dataIndex: 'operator', key: 'operator' },
    { title: '日期', dataIndex: 'createdAt', key: 'createdAt' },
    { title: '当前任务', key: 'mission', render: () => <a href="javascript:;">Publish</a> },
  ];

  const data = [
    {
      key: 1,
      name: 'AGV_iplus_EMMA200_1',
      state: <Icon type="check-circle" style={{color:'rgb(135,208,104)',fontSize:25}} />,
      location: '用餐区',
      upgradeNum: 500,
      operator: '--',
      createdAt: '2014-12-24 23:12:00',
    },
    {
      key: 2,
      name: 'AGV_iplus_EMMA200_2',
      state: <Icon type="check-circle" style={{color:'rgb(135,208,104)',fontSize:25}} />,
      location: '用餐区',
      upgradeNum: 500,
      operator: '--',
      createdAt: '2014-12-24 23:12:00',
    },
    {
      key: 3,
      name: 'AGV_Omron_1',
      state: <Icon type="check-circle" style={{color:'rgb(135,208,104)',fontSize:25}} />,
      location: '用餐区',
      upgradeNum: 500,
      operator: '--',
      createdAt: '2014-12-24 23:12:00',
    },
    {
      key: 4,
      name: 'AGV_Omron_2',
      state: <Icon type="check-circle" style={{color:'rgb(135,208,104)',fontSize:25}} />,
      location: '用餐区',
      upgradeNum: 500,
      operator: '--',
      createdAt: '2014-12-24 23:12:00',
    },
    {
      key: 5,
      name: 'AGV_Iso_DZ80_1',
      state: <Icon type="check-circle" style={{color:'rgb(135,208,104)',fontSize:25}} />,
      location: '用餐区',
      upgradeNum: 500,
      operator: '--',
      createdAt: '2014-12-24 23:12:00',
    },
  ];

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandedRowRender={expandedRowRender}
      dataSource={data}
      style={{backgroundColor:'white'}}
    />
  );
}

    return (
      <div>
        <PageHeaderLayout content={pageHeaderContent} extraContent={extraContent}>
          <Fragment> 
            {/* <Row gutter={24} style={{marginBottom:20}}>
              <Col style={{height:600,width:'100%'}} xl={24} lg={24} md={24} sm={24} xs={24}>
                <div id='main' style={{height:'100%',width:'100%'}} />
              </Col>
            </Row> */}
            <Row style={{marginBottom:20}}>
              <NestedTable />
            </Row>
            {/* <Row>
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
                  
                  {/* <h4 className={styles.title} style={{color:'#acacac'}}>设备演示视频，点击播放</h4> */}
            {/* <div className={styles.video}>
                    <img id="playIcon" alt="playIcon" src={playIcon} style={{width:100,height:100}} onClick={this.handleClick} />
                    <h2 className={styles.title}>设备联动调试视频</h2>
                  </div>
                  <video id="video1" style={{width:'80%',margin:'10px auto',display:'none',paddingBottom:20}} controls> 
                    <source
                      src="http://localhost:5000/api/video"
                      type="video/mp4"
                      style={{margin:'10px auto'}}
                    />
                  </video>
                </div>
              </Col> 
            </Row> */}
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
