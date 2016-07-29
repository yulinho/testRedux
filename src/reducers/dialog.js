import SmartOpenDesk from '../containers/SmartOpenDesk'
import deskDetail from '../components/deskDetail'
import {orders} from '../reducers'
const initialState ={
  visable:false
}
const dialog = (state = initialState, action) => {
  // console.log(orders)
  switch (action.type) {
    case 'DIALOG_ONCLICKDESK_OLD':
      // console.log(action)

      return Object.assign({}, state, {
      	title: action.desk.status_id === 1 ? "开台【"+action.desk.name+"】":"餐台详情【"+action.desk.name+"】",
      	children: action.desk.status_id === 1 ? SmartOpenDesk : deskDetail({desk:action.desk ,bill:action.bill,orders:action.orders}) ,
        data:({desk:action.desk}),
      	dialogClassName:action.desk.status_id === 1 ? "normal":"full",
        visable: !state.visable
      })
    case 'DIALOG_ONCLICKDIALOG':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    default:
      return state
  }
}

export default dialog