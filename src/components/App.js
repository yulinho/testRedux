import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleDesks from '../containers/VisibleDesks'
import styles from './App.css'
import SmartOpenDesk from '../containers/SmartOpenDesk'
import SmartDeskDetail from '../containers/SmartDeskDetail'
import SmartTakeMyOrder from '../containers/SmartTakeMyOrder'
import SmartChangeDesk from '../containers/SmartChangeDesk'
import SmartDiscountOrder from '../containers/SmartDiscountOrder'

	// <SmartDeskDetail />
const App = ({store}) => (
  <div>
	<VisibleDesks />
	<SmartOpenDesk />
	<SmartDeskDetail />
	<SmartTakeMyOrder />
	<SmartChangeDesk />
	<SmartDiscountOrder />
  </div>
)

export default App