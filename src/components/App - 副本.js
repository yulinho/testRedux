import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styles from './App.css'

const App = ({store}) => (
  <div>
    <Header />
    <Body>
	    <AddTodo />
	    <VisibleTodoList />
	    <button onClick={
	    	()=>{
	    		console.log(store.getState())
	    	}
	    }>button</button>
    </Body>
    <Footer />
  </div>
)

export default App