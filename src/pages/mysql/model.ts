import { Reducer, Effect, Subscription } from 'umi';
import { editRemote, getRemoteList,createRemote, deleteRemote} from './service'
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
    },
    *editRemote({payload:{id,values}}, { put, call }) {
      const data = yield call(editRemote,{id,values});
      yield put({
        type: 'getRemote'
      });
    },
    *createRemote({payload}, { put, call }) {
      const data = yield call(createRemote,payload);
      yield put({
        type: 'getRemote'
      });
    },
    *deleteRemote({payload}, { put, call }) {
      console.log(payload)
      const data = yield call(deleteRemote,payload);
      yield put({
        type: 'getRemote'
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