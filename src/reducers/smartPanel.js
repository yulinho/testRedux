import SmartPanel from '../containers/SmartPanel'
import {orders} from '../reducers'
const initialState ={
  visable:true,
  size:'half',
  title:"title",
  desk:{},
  disabled: false,
  buttonTitle: "Panel",
  index: 0
}
const smartPanel = (state = initialState, action) => {
  // console.log(orders)
  switch (action.type) {
    case 'SMARTPANEL_OPEN':
      // console.log(action)

      return Object.assign({}, state, {
       //  data:({desk:action.desk}),
        // smartPanelClassName:action.desk.status_id === 1 ? "normal":"full",
        title:action.menu.name,
        menu:action.menu,
        visable: !state.visable,
        disabled: false,
        buttonTitle: $name
      })
    case 'SMARTPANEL_OPENDESK':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTPANEL_CLOSE':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTPANEL_DISABLED':
      return Object.assign({}, state, {
        buttonTitle: '系统正在处理，请稍等',
        disabled: true
      })
    case 'SMARTPANEL_DOSOME':
      console.log("do some")
      return Object.assign({}, state, {
        buttonTitle: '系统正在处理，请稍等',
        disabled: true
      })
    case 'SMARTPANEL_NEXT':
      return Object.assign({}, state, {
        index: state.index + action.value // > 0 ? 
      })

    default:
      return state
  }
}

export default smartPanel