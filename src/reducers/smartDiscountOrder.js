import SmartDiscountOrder from '../containers/SmartDiscountOrder'
import {orders} from '../reducers'
const initialState ={
  visable:true,
  size:'half',
  title:"title",
  desk:{},
  disabled: false,
  buttonTitle: "DiscountOrder"
}
const smartDiscountOrder = (state = initialState, action) => {
  // console.log(orders)
  switch (action.type) {
    case 'SMARTDISCOUNTORDER_OPEN':
      // console.log(action)

      return Object.assign({}, state, {
       //  data:({desk:action.desk}),
        // smartDiscountOrderClassName:action.desk.status_id === 1 ? "normal":"full",
        title:action.menu.name,
        menu:action.menu,
        visable: !state.visable,
        disabled: false,
        buttonTitle: $name
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
      return Object.assign({}, state, {
        buttonTitle: '系统正在处理，请稍等',
        disabled: true
      })
    default:
      return state
  }
}

export default smartDiscountOrder