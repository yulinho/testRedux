import SmartOpenDesk from '../containers/SmartOpenDesk'
import deskDetail from '../components/deskDetail'
import {orders} from '../reducers'
const initialState ={
  visable:false,
  size:'half',
  title:"title",
  desk:{},
  disabled: false,
  buttonTitle: "开台",
  holdpeople: 0
}
const smartOpenDesk = (state = initialState, action) => {
  // console.log(orders)
  switch (action.type) {
    case 'SMARTOPENDESK_OPEN':
      // console.log(action)
        // console.log(action.desk)
        // console.log(action.desk.holdpeople)
      return Object.assign({}, state, {
      	// title: action.desk.status_id === 1 ? "开台【"+action.desk.name+"】":"餐台详情【"+action.desk.name+"】",
      	// children: action.desk.status_id === 1 ? SmartOpenDesk : deskDetail({desk:action.desk ,bill:action.bill,orders:action.orders}) ,
       //  data:({desk:action.desk}),
      	// smartOpenDeskClassName:action.desk.status_id === 1 ? "normal":"full",
        title:action.desk.name,
        desk:action.desk,
        visable: !state.visable,
        disabled: false,
        buttonTitle: "开台",
        holdpeople: action.desk.holdpeople,
      })
    case 'SMARTOPENDESK_SETTINGHOLDPEOPLE':
      let holdpeople = action.holdpeople;
      let _holdpeople = parseInt(holdpeople) > 0 ? parseInt(holdpeople) : 1;
      return Object.assign({}, state, {
        holdpeople: _holdpeople
      })

    case 'SMARTOPENDESK_CLOSE':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTOPENDESK_DISABLED':
      return Object.assign({}, state, {
        buttonTitle: '系统正在开台，请稍等',
        disabled: true
      })
    case 'SMARTOPENDESK_SETTINGHOLDPEOPLE_PLUS':
      return Object.assign({}, state, {
        holdpeople: state.holdpeople + action.value > 0 ? state.holdpeople + action.value : 1
      })
    default:
      return state
  }
}

export default smartOpenDesk