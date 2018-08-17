import { queryProjectNotice, queryProjectOrder } from '../services/api';

export default {
  namespace: 'project',

  state: {
    notice: [],
    order:[],
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
  },
};
