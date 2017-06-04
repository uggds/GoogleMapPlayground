import { reducer as router } from 'react-native-router-redux'
import { handleActions } from 'redux-actions'
import API from './api'
import Consts from './consts'

const shopReducer = handleActions({
  [Consts.GET_SHOP]: (state, action) => ({
    shop: action.payload ? action.payload.data : state.shop,
  }),
}, {
  shop: [],
})

export {
  router,
  shopReducer
}
