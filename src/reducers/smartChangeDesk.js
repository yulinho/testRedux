import SmartChangeDesk from '../containers/SmartChangeDesk'
// import ChangeDesk from '../components/ChangeDesk'
import {orders} from '../reducers'
const initialState ={
  visable:false,
  size:'full',
  disabled: false,
  buttonTitle: "转台",
  title: "title",
  cate_index: 0,
  menu_index: 0,
  dest_desk: null
}
const smartChangeDesk = (state = initialState, action) => {
  // console.log(orders)
  switch (action.type) {
    case 'SMARTChangeDesk_OPEN':
      // console.log(action.bill)

      return Object.assign({}, state, {
      	// title: action.desk.status_id === 1 ? "结账【"+action.desk.name+"】":"餐台详情【"+action.desk.name+"】",
      	// children: action.desk.status_id === 1 ? smartChangeDesk : ChangeDesk({desk:action.desk ,bill:action.bill,orders:action.orders}) ,
       //  data:({desk:action.desk}),
      	// smartChangeDeskClassName:action.desk.status_id === 1 ? "normal":"full",
        desk:action.desk,
        bill:action.bill,
        // orders:action.orders,
        visable: !state.visable,
        disabled: false,
        buttonTitle: "结账",
        buttonTitle2: "转台",
        buttonTitle3: "拼单",
        buttonTitle4: "撤单",
        title: action.desk.name
      })
    case 'SMARTCHANGEDESK_CLOSE':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTChangeDesk_DISABLED':
      return Object.assign({}, state, {
        buttonTitle: '结账中...',
        disabled: true
      })
    case 'SMARTChangeDesk_CATEPAGECHANGE':
      // if(state.cate_index === 0 && action.plus<0)
        // return state
      // if(state.cate_index === (action.pagecount -1) && action.plus>0)
        // return state

      return Object.assign({}, state, {
        cate_index : state.cate_index + action.plus
      })
    case 'SMARTChangeDesk_MENUPAGECHANGE':
      // if(state.cate_index === 0 && action.plus<0)
        // return state
      // if(state.cate_index === (action.pagecount -1) && action.plus>0)
        // return state

      return Object.assign({}, state, {
        menu_index : state.menu_index + action.plus
      })
    case 'SMARTChangeDesk_MENUPAGERESET':
      // if(state.cate_index === 0 && action.plus<0)
        // return state
      // if(state.cate_index === (action.pagecount -1) && action.plus>0)
        // return state

      return Object.assign({}, state, {
        menu_index : 0
      })
    case 'SMARTCHANGEDESK_CLICKDESK':
      return Object.assign({}, state, {
        dest_desk : action.desk
      })
    case 'SMARTCHANGEDESK_OPEN':
      return Object.assign({}, state, {
        title: action.desk.name,
        visable : true
      })

    default:
      return state
  }
}

export default smartChangeDesk