import { combineReducers } from 'redux'
import cates from './cates'
import menus from './menus'
import todos from './todos'
import desks from './desks'
// import list from './list'
import visibilityFilter from './visibilityFilter'
import onOff from './onOff'
import dialog from './dialog'
import bills from './bills'
import orders from './orders'
import smartPanel from './smartPanel'
import smartOpenDesk from './smartOpenDesk'
import smartDeskDetail from './smartDeskDetail'
import smartTakeMyOrder from './smartTakeMyOrder'
import smartChangeDesk from './smartChangeDesk'
import smartDiscountOrder from './smartDiscountOrder'
import smartCombineBill from './smartCombineBill'


const todoApp = combineReducers({
  cates,
  menus,
  onOff,
  todos,
  dialog,
  // list,
  visibilityFilter,
  desks,
  bills,
  orders,
  smartPanel,
  smartOpenDesk,
  smartDeskDetail,
  smartTakeMyOrder,
  smartChangeDesk,
  smartDiscountOrder,
  smartCombineBill

})

export default todoApp