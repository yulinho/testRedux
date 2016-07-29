import SmartTakeMyOrder from '../containers/SmartTakeMyOrder'
import {orders} from '../reducers'
const initialState ={
  visable:false,
  size:'half',
  title:"title",
  desk:{},
  disabled: false,
  buttonTitle: "点菜"
}
const smartTakeMyOrder = (state = initialState, action) => {
  // console.log(orders)
  switch (action.type) {
    case 'SMARTTAKEMYORDER_OPEN':
      // console.log(action)

      return Object.assign({}, state, {
       //  data:({desk:action.desk}),
      	// smartTakeMyOrderClassName:action.desk.status_id === 1 ? "normal":"full",
        title:action.menu.name,
        menu:action.menu,
        visable: !state.visable,
        disabled: false,
        buttonTitle: "点菜"
      })
    case 'SMARTTAKEMYORDER_OPENDESK':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTTAKEMYORDER_CLOSE':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTTAKEMYORDER_DISABLED':
      return Object.assign({}, state, {
        buttonTitle: '系统正在点餐，请稍等',
        disabled: true
      })
    default:
      return state
  }
}

export default smartTakeMyOrder