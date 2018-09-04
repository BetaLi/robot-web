import mockjs from 'mockjs';
import { getRule, postRule } from './mock/rule';
import { getActivities, getNotice, getFakeList } from './mock/api';
import { getFakeChartData } from './mock/chart';
import { getProfileBasicData } from './mock/profile';
import { getProfileAdvancedData } from './mock/profile';
import { getNotices } from './mock/notices';
import { format, delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    $desc: '获取当前用户接口',
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      notifyCount: 12,
    },
  },
  // GET POST 可省略
  'GET /api/project/orderList':[
    {
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
    }
  ],
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'GET /api/project/notice': getNotice,
  'GET /api/activities': getActivities,
  'GET /api/project/devicesLocation': [
    [
      [-13380, -5000, 170968690, 'Omron_AGV', 'Omron_AGV'],
      [4520, -18440, 170968690, 'Omron_AGV', 'Omron_AGV'],
    ],
    [
      [1390, 7500, 251553170, 'MKLM_AGV', 'MKLM_AGV'],
      [15000, -5600, 251553170, 'MKLM_AGV', 'MKLM_AGV'],
    ],
    [
      [-2529, 7500, 151553170, 'FANUC', 'FANUC'],
      [-2529, 9500, 151553170, 'FANUC', 'FANUC'],
      [-2529, 11500, 151553170, 'FANUC', 'FANUC'],
      [-2529, 13500, 151553170, 'FANUC', 'FANUC'],
    ],
  ],
  'GET /api/rule': getRule,
  'POST /api/rule': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postRule,
  },
  'POST /api/forms': (req, res) => {
    res.send({ message: 'Ok' });
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
  }),
  'GET /api/fake_list': getFakeList,
  'GET /api/fake_chart_data': getFakeChartData,
  'GET /api/profile/basic': getProfileBasicData,
  'GET /api/profile/advanced': getProfileAdvancedData,
  'POST /api/login/account': (req, res) => {
    const { password, userName, type } = req.body;
    if (password === '888888' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }
    if (password === '123456' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }
    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req, res) => {
    res.send({ status: 'ok', currentAuthority: 'user' });
  },

  //'GET /api/notices': getNotices,

  // 'GET /api/notices': [
  //     {
  //       id: '000000001',
  //       avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
  //       title: '你收到了 14 份新周报',
  //       datetime: '2017-08-09',
  //       type: '通知',
  //     },
      
  //     {
  //       id: '000000012',
  //       title: 'ABCD 版本发布',
  //       description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
  //       extra: '进行中',
  //       status: 'processing',
  //       type: '待办',
  //     },
  //   ],

  // 'GET /api/notices': (req,res) => {
  //   res.send([
  //     {
  //       id: '000000001',
  //       avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
  //       title: '你收到了 14 份新周报',
  //       datetime: '2017-08-09',
  //       type: '通知',
  //     }, 
  //     {
  //       id: '000000012',
  //       title: 'ABCD 版本发布',
  //       description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
  //       extra: '进行中',
  //       status: 'processing',
  //       type: '待办',
  //     },
  //   ])
  // },

  //'GET /api/notices': 'http://127.0.0.1:5000/',

  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
};

export default (noProxy ? {} : delay(proxy, 1000));
