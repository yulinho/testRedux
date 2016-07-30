import SmartOpenDesk from '../containers/SmartOpenDesk'
// import deskDetail from '../components/deskDetail'
import {orders} from '../reducers'
const initialState ={
  visable:false,
  size:'full',
  disabled: false,
  buttonTitle: "结账",
  title: "title",
  cate_index: 0,
  menu_index: 0
}
const smartDeskDetail = (state = initialState, action) => {
  // console.log(orders)
  switch (action.type) {
    case 'SMARTDESKDETAIL_OPEN':
      // console.log(action.bill)

      return Object.assign({}, state, {
      	// title: action.desk.status_id === 1 ? "结账【"+action.desk.name+"】":"餐台详情【"+action.desk.name+"】",
      	// children: action.desk.status_id === 1 ? smartDeskDetail : deskDetail({desk:action.desk ,bill:action.bill,orders:action.orders}) ,
       //  data:({desk:action.desk}),
      	// smartDeskDetailClassName:action.desk.status_id === 1 ? "normal":"full",
        // desk_id:action.desk_id,
        desk:action.desk,
        bill:action.bill,
        // orders:action.orders,
        visable: true,//!state.visable,
        disabled: false,
        buttonTitle: "结账",
        buttonTitle2: "转台",
        buttonTitle3: "拼单",
        buttonTitle4: "撤单",
        title: action.desk.name
      })
    case 'SMARTDESKDETAIL_CLOSE':
      return Object.assign({}, state, {
        visable: !state.visable
      })
    case 'SMARTDESKDETAIL_DISABLED':
      return Object.assign({}, state, {
        buttonTitle: '结账中...',
        disabled: true
      })
    case 'SMARTDESKDETAIL_CATEPAGECHANGE':
      // if(state.cate_index === 0 && action.plus<0)
        // return state
      // if(state.cate_index === (action.pagecount -1) && action.plus>0)
        // return state

      return Object.assign({}, state, {
        cate_index : state.cate_index + action.plus
      })
    case 'SMARTDESKDETAIL_MENUPAGECHANGE':
      // if(state.cate_index === 0 && action.plus<0)
        // return state
      // if(state.cate_index === (action.pagecount -1) && action.plus>0)
        // return state

      return Object.assign({}, state, {
        menu_index : state.menu_index + action.plus
      })
    case 'SMARTDESKDETAIL_MENUPAGERESET':
      // if(state.cate_index === 0 && action.plus<0)
        // return state
      // if(state.cate_index === (action.pagecount -1) && action.plus>0)
        // return state

      return Object.assign({}, state, {
        menu_index : 0
      })

    default:
      return state
  }
}

export default smartDeskDetail