import { basicFetch } from '../services/app';
export default {
  namespace: 'app',
  state: {
    dataSource: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(basicFetch, payload);
      yield put({
        type: 'saveData',
        payload: response.data.data,
      });
    },
  },
  reducers: {
    saveData(state, action) {
      return {
        ...state,
        dataSource: action.payload,
      };
    },
  },
};
