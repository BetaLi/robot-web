import {
  queryProjectNotice,
  queryProjectOrder,
  queryProjectOrderList,
  queryProjectLocation,
} from '../services/api';

export default {
  namespace: 'project',

  state: {
    notice: [],
    order:[],
    orderList:[],
    devicesLocation:[],
  },

  effects: {
    *fetchNotice(_, { call, put }) {
      const response = yield call(queryProjectNotice);
      yield put({
        type: 'saveNotice',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *fetchOrder(_,{ call, put }) {
      const orderRes = yield call(queryProjectOrder);
      yield put({
        type:'saveOrder',
        payload: Array.isArray(orderRes)? orderRes : [],
      });
    },
    *fetchOrderList(_,{ call, put }) {
      const orderList = yield call(queryProjectOrderList);
      yield put({
        type: 'saveOrderList',
        payload:Array.isArray(orderList)?orderList:[],
      })
    },
    *fetchDevicesLocation(_,{ call, put }){
      const devicesLocation = yield call(queryProjectLocation);
      yield put({
        type:'saveLocation',
        payload:Array.isArray(devicesLocation)?devicesLocation:[],
      })
    },
  },
  reducers: {
    saveNotice(state, action) {
      return {
        ...state,
        notice: action.payload,
      };
    },
    saveOrder(state,action) {
      return {
        ...state,
        order: action.payload,
      }
    },
    saveOrderList(state,action) {
      return {
        ...state,
        orderList: action.payload,
      }
    },
    saveLocation(state, action) {
      return {
          ...state,
          devicesLocation: action.payload,
        }
      },
  },
};
