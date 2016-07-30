import SmartDiscountOrder from '../containers/SmartDiscountOrder'
import {orders} from '../reducers'
import {apiFetchSetorderdiscount} from '../actions'
const initialState ={
  visable:false,
  size:'half',
  title:"title",
  desk:{},
  disabled: false,
  buttonTitle: "DiscountOrder",
  discount: 1
}
const smartDiscountOrder = (state = initialState, action ,t) => {
  // console.log(orders)
  switch (action.type) {
    case 'SMARTDISCOUNTORDER_OPEN':
      // console.log(action)

      return Object.assign({}, state, {
       //  data:({desk:action.desk}),
        // smartDiscountOrderClassName:action.desk.status_id === 1 ? "normal":"full",
        title:action.order.menu_name ,
        // menu:action.menu,
        visable: !state.visable,
        disabled: false,
        order: action.order,
        discount: action.discount,
        // discount: action.order.discount
        // buttonTitle: $name
      })
    case 'SMARTDISCOUNTORDER_OPENDESK':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTDISCOUNTORDER_CLOSE':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTDISCOUNTORDER_DISABLED':
      return Object.assign({}, state, {
        buttonTitle: '系统正在处理，请稍等',
        disabled: true
      })
    case 'SMARTDISCOUNTORDER_DOSOME':
      console.log("do some")
      // action.dispatch(apiFetchSetorderdiscount(0.8))
      return Object.assign({}, state, {
        buttonTitle: '系统正在处理，请稍等',
        disabled: true
      })
    case 'SMARTDISCOUNTORDER_SETDISCOUNT':
      return Object.assign({}, state, {
        discount: action.discount,
        disabled: isNaN(action.discount) || action.discount==""
      })
    default:
      return state
  }
}

export default smartDiscountOrder