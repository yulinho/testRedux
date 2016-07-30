import SmartCombineBill from '../containers/SmartCombineBill'
import {orders} from '../reducers'
const initialState ={
  visable:true,
  size:'full',
  title:"title",
  desk:{},
  disabled: false,
  buttonTitle: "CombineBill"
}
const smartCombineBill = (state = initialState, action) => {
  // console.log(orders)
  switch (action.type) {
    case 'SMARTCOMBINEBILL_OPEN':
      // console.log(action)

      return Object.assign({}, state, {
       //  data:({desk:action.desk}),
        // smartCombineBillClassName:action.desk.status_id === 1 ? "normal":"full",
        title:action.menu.name,
        menu:action.menu,
        visable: !state.visable,
        disabled: false,
        buttonTitle: $name
      })
    case 'SMARTCOMBINEBILL_OPENDESK':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTCOMBINEBILL_CLOSE':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTCOMBINEBILL_DISABLED':
      return Object.assign({}, state, {
        buttonTitle: '系统正在处理，请稍等',
        disabled: true
      })
    case 'SMARTCOMBINEBILL_DOSOME':
      console.log("do some")
      return Object.assign({}, state, {
        buttonTitle: '系统正在处理，请稍等',
        disabled: true
      })
    default:
      return state
  }
}

export default smartCombineBill