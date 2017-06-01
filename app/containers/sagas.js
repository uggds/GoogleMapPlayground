import { fork } from "redux-saga/effects"
import { put, call, take, takeEvery } from "redux-saga/effects"
import Actions from './actions'
import API from './api'
import Consts from './consts'
import 'babel-polyfill'

function* getShop() {
  while(true) {
    const { data } = yield call(API.getShop)
    yield put(Actions.getShop({ data }))
    yield take(Consts.GET_SHOP)
  }
}

export default function* rootSaga() {
  yield fork(getShop)
}

