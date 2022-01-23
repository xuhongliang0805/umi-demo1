import { Reducer, Effect, Subscription } from 'umi';
import { getRemoteList } from './service'
interface UserModelType {
  namespace: 'users';
  state: {};
  reducers: {
    getList: Reducer;
  };
  effects: {
    getRemote: Effect;
  };
  subscriptions: {
    sutup: Subscription;
  }
}

const UserModel: UserModelType = {
  namespace: "users",
  state: {},
  reducers: {
    getList(state, { payload }) {
      console.log({ payload })
      return payload;
    }
  },
  effects: {
    *getRemote(action, { put, call }) {
      const data = yield call(getRemoteList);
      yield put({
        type: 'getList',
        payload: {
          data
        }
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/mysql') {
          dispatch({
            type: 'getRemote'
          })
        }
      })
    }
  }
}

export default UserModel;