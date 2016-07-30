import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styles from './App.css'
// import VisibleDesks from '../containers/VisibleDesks'
import SmartPanel  from '../containers/SmartPanel'
import SmartOpenDesk from '../containers/SmartOpenDesk'
import SmartDeskDetail from '../containers/SmartDeskDetail'
import SmartTakeMyOrder from '../containers/SmartTakeMyOrder'
import SmartChangeDesk from '../containers/SmartChangeDesk'
import SmartDiscountOrder from '../containers/SmartDiscountOrder'
import SmartCombineBill from '../containers/SmartCombineBill'
	// <SmartDeskDetail />
const App = ({store}) => (
  <div>
	<SmartPanel />
	<SmartOpenDesk />
	<SmartDeskDetail />
	<SmartTakeMyOrder />
	<SmartChangeDesk />
	<SmartDiscountOrder />
	<SmartCombineBill />
  </div>
)

export default App