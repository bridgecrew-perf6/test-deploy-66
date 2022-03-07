import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.POSTCATEGORY;

export function* getListPostCategory(params) {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getCategoryPostAPI, params.category);
    const { data } = _res;

    yield put({ type: Redux.GET_POST_CATEGORY_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_POST_CATEGORY_FAILED,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_POST_CATEGORY_LIST, getListPostCategory)]);
}
