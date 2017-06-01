import { handleActions } from 'redux-actions'
import API from '../containers/api'
import Consts from '../containers/consts'

export const shopReducer = handleActions({
  [Consts.GET_SHOP]: (state, action) => ({
    shop: action.payload ? action.payload.data : state.shop,
  }),
}, {
  shop: [],
})

